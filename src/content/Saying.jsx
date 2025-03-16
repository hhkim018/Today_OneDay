const Saying = ({ saying }) => {
  return (
    <>
      <strong style={{ fontSize: "30px", color: "black" }}>
        {saying.word}
      </strong>
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
        -{saying.author || "불명"}-
      </a>
    </>
  );
};

export default Saying;
