import React, { useState } from "react";
import dummyData from "../../DummyData/DummyData";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
function CourseInfo() {
  const courses = [...dummyData];
  const [course, setCourse] = useState(courses);
  const [cart, setCart] = useState([]);
  const addToCart = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };
  const handleClear=()=>{
    setCart([])
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Cart cart={cart} key={cart.id} handleClear={handleClear}></Cart>
        </div>
        <div className="col-md-8">
          {course.map((course) => (
            <Course
              course={course}
              addToCart={addToCart}
              key={course.id}
            ></Course>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
