

const currentTime = new Date().getHours();

let greeting;

const customColor = {
  color : ""
};


if( currentTime < 12) {
  greeting = "Good Morning";
 customColor.color = "red";
}else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customColor.color = "blue";
}else {
  greeting = "Good night";
  customColor.color = "green";
};

function Heading() {
  return <h1 className="heading" contentEditable="false" style={customColor}>{greeting}, My favorite foods</h1>
}

export default Heading;