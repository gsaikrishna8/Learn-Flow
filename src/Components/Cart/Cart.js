import React, { useEffect, useState } from "react";
const buttonStyle = {
  visibility: "visible",
  opacity: 1,
  transition: "opacity 0.3s ease-in-out",
};
function Cart(props) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setCart(props.cart);
    setTotal(props.cart.reduce((sum, item) => sum + item.price, 0));
  }, [props.cart]);
  console.log("cart", props.cart);
  //   const course = props.cart;
  //   const total = course.reduce((total, price) => total + price.price, 0);
  //   const totalPrice = Number(total).toFixed(2);
  //   const [price, setPrice] = useState(totalPrice);

  const handleClear = () => {
    if (cart.length > 0) {
      const updatedCart = cart.slice(0,-1)
      const removedItem = cart[cart.length-1]
      setCart(updatedCart);
      setTotal((prev) => prev - removedItem.price);
    }
    if (cart.length === 1) {
        props.handleClear()
        setTotal(0);
        // setCart([])
      }
    
  };
  return (
    <div className="text-center bg-dark text-warning p-2 mt-4">
      <h2 className="text-warning">CART</h2>
      <hr className="bg-danger" />
      <h5>
        Enrolled Courses: <span className="text-white">{cart.length}</span>
      </h5>
      {cart.map((course, index) => (
        <div className="d-flex" key={index}>
          <p className="mr-auto p-2">{course.title}</p>
          <h6 className="text-white p-2">${course.price}</h6>
        </div>
      ))}
      <hr className="bg-danger" />
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <h4 className=" p-2">Total :</h4>
          <h6 className="text-white p-2">${total.toFixed(2)}</h6>
        </div>
        <button
          className="btn btn-warning ml-3"
          onClick={handleClear}
          disabled={cart.length === 0}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Cart;