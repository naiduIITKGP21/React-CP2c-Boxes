const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  const eachBox = `${className} box`;
  return (
    <div className={eachBox}>
      <p>{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxesContainer">
      <Box className="small-box" boxText="small" />
      <Box className="medium-box" boxText="medium" />
      <Box className="large-box" boxText="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
