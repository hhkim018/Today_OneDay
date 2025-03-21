import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Test from "../utils/Test";

const FavofitClick = ({ saying }) => {
  const [liked, setLiked] = useState(false);
  const db = new Test();

  useEffect(() => {
    initHeart();
  }, [saying]);

  async function initHeart() {
    const likedObj = await db.getData("liked");
    if (likedObj) {
      likedObj.list.forEach((val) => {
        if (val.word === saying.word) {
          setLiked(true);
        }
      });
    }
  }

  async function clickLiked() {
    const currentStat = !liked;
    setLiked(currentStat);

    const likedObj = await db.getData("liked");

    if (currentStat) {
      if (likedObj) {
        likedObj.list.push(saying);
        db.saveLiked({ key: "liked", list: likedObj.list });
      } else {
        db.saveLiked({ key: "liked", list: [saying] });
      }
    } else {
      // 삭제
      const afterDeleteList = likedObj.list.filter(
        (data) => data.word !== saying.word
      );
      db.saveLiked({ key: "liked", list: afterDeleteList });
    }
  }

  return (
    <button
      onClick={clickLiked}
      className="focus:outline-none"
      style={{ backgroundColor: "#eedec7" }}
    >
      <Heart
        size={40}
        fill={liked ? "red" : "none"} // fill을 직접 설정
        className="transition-colors duration-300 text-red-500"
      />
    </button>
  );
};

export default FavofitClick;
