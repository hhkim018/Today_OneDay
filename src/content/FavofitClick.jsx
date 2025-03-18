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
    const likedList = await db.getData("liked");
    if (likedList) {
      likedList.list.forEach((val) => {
        if (val.word === saying.word) {
          setLiked(true);
        }
      });
    }
  }

  async function clickLiked() {
    const currentStat = !liked;
    setLiked(currentStat);
    // 하루에한번 보여지는건데 , 오늘 좋아요 누르던가 안누르던가 두가지 경우만 존재,
    const likedList = await db.getData("liked");

    if (currentStat) {
      if (!likedList) {
        db.saveLiked({ key: "liked", list: [saying] });
      }
    } else {
      // 삭제
      const afterDeleteList = likedList.list.filter(
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
