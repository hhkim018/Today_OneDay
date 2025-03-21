import Favofit from "./FavofitClick";

const Saying = ({ saying }) => {
  return (
    <>
      <Favofit saying={saying} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <strong style={{ fontSize: "30px", color: "black" }}>
          {saying.word}
        </strong>
      </div>
      <br />
      <br />
      <a
        target="_blank"
        href={`https://www.google.com/search?q=${saying.author}`}
        style={{
          fontSize: "20px",
          color: "black",
          textDecoration: "underline",
        }}
      >
        -{saying.author}-
      </a>
    </>
  );
};

export default Saying;
