import React, { useState } from "react";
import Container from "../../Compoments/Container";
import rect from "../../images/Rect.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  dicreaseQuantity,
  increaseQuantity,
  remove,
} from "../../Redux/Cart/CartSlice";
import { Link } from "react-router-dom";

function Payment() {
  const increaseHandler = (data) => {
    dispatch(increaseQuantity(data));
  };
  const decreaseHandler = (data) => {
    dispatch(dicreaseQuantity(data._id));
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.list);
  const delProductHandler = (product) => {
    dispatch(remove(product._id));
  };

  return (
    <div>
      <Container>
        <div className="">
          <div>
            <p className="text-left text-[48px] font-semibold">Cart</p>
            <div className="flex flex-col">
              <div className="bg-[#F86338] p-2  rounded-md my-5">
                <div className="grid grid-cols-5 gap-4 text-center">
                  <p className="text-[white] font-semibold">Product Name</p>
                  <p className="text-[white] font-semibold">Price</p>
                  <p className="text-[white] font-semibold">Quantity</p>
                  <p className="text-[white] font-semibold">Total</p>
                  <p className="text-[white] font-semibold">Delete</p>
                </div>
              </div>
              {cart.map((product, index) => (
                <div className="grid grid-cols-5 gap-4  text-center items-center">
                  <div className="w-[100%] h-[50px]">
                    <Link to={`/detail/${product._id}`}>
                      <div className=" flex justify-center items-center gap-3 h-full   ">
                        <img src={product.image} style={{ maxWidth: "20%" }} />
                        <p className="text-[black] font-semibold">
                          {product.category}
                        </p>
                      </div>
                    </Link>
                  </div>

                  <p className="text-[black] font-semibold">${product.price}</p>
                  <div className="flex justify-center items-center gap-4">
                    <button
                      className="text-[16px] font-semibold"
                      onClick={() => decreaseHandler(product)}
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      className="border-[black] border-2 rounded-md w-[20%] text-center"
                      type="number"
                      value={product.quantity}
                    />
                    <button
                      className="text-[16px] font-semibold"
                      onClick={() => increaseHandler(product)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[black] font-semibold">
                    {" "}
                    ${Math.round(product.quantity * product.price)}{" "}
                  </p>
                  <div
                    className="mx-auto"
                    onClick={() => delProductHandler(product)}
                  >
                    <RiDeleteBin6Line />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Payment;
