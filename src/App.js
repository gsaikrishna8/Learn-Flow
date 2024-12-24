import logo from "./courses.jpg";
import CourseInfo from "./Components/CourseInfo/CourseInfo";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <img
        src={logo}
        className="text-center bg-info p-3"
        style={{
          height: "250px",
          width: "100%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></img>
      {/* <h1 className="text-center bg-info p-3">Online Courses</h1> */}
      <CourseInfo></CourseInfo>
    </div>
  );
}

export default App;