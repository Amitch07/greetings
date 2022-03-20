import "./styles.css";

export default function App() {
  const d = new Date();
  const time = d.getHours();
  console.log(d);
  const stl = {
    color: "",
    greeting: ""
  };
  if (time < 12) {
    stl.color = "red";
    stl.greeting = "Good Morning";
  } else if (time < 18) {
    stl.color = "Green";
    stl.greeting = "Good Afternoon";
  } else {
    stl.color = "blue";
    stl.greeting = "Good Night";
  }
  return (
    <h1 style={stl} className="heading">
      {stl.greeting + "Amit today is : " + d}
    </h1>
  );
}
