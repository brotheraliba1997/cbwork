import React, { useEffect, useState } from "react";
import Container from "../../Compoments/Container";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  increaseQuantity,
  dicreaseQuantity,
} from "../../Redux/Cart/CartSlice";

function DetailSection({ SingleProduct }) {
  

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  

     

  const array = [0, 1, 2, 3];

  const productHandler = (data) => {
    console.log("recerive", data);
    dispatch(add({ ...data, quantity: 1 }));
  };

  const increaseHandler = (data) => {
    dispatch(increaseQuantity(data));
  };

  const decreaseHandler = (data) => {
    console.log(data)
    dispatch(dicreaseQuantity(data._id));
  };

  const disableCart = cart.list.find((x) => x._id === SingleProduct.data._id);
  console.log(disableCart)


 
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2  xs:grid-cols-1 gap-8 py-5 border-b-2 border-[#E1E1E1]">
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col gap-3">
              {array.map(() => (
                <div className="w-[100%] h-[90px] shadow-lg p-3">
                  <div className="flex justify-center items-center h-full">
                    <img src={SingleProduct.data.image} className="h-full" />
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[100%] h-[259px]">
              <div className="flex justify-center items-center h-full">
                <img src={SingleProduct.data.image} className="h-full" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[24px] text-[#11142D] text-left font-semibold">
              {SingleProduct.data.title}
            </p>
            <div className="flex justify-start gap-2">
              <p className="text-[16px] text-left">Avaliability</p>
              <p className="text-[16px] font-semibold text-[#515151] text-left">
                : 48 in stocks
              </p>
            </div>

            <div className="flex justify-between items-center gap-4">
              <div className="flex justify-start items-center gap-4">
                <p className="text-[39px] font-semibold text-[#F3692E] text-left">
                  {SingleProduct.data.price}
                </p>
                <p className="text-[16px] font-semibold text-[#9A9AB0] text-left">
                  $1500
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-[16px] font-semibold text-[#000000] text-left">
                  Share
                </p>
                <div className="border-2 border-[#9A9AB0] rounded-md p-1">
                  <AiOutlineShareAlt />
                </div>
              </div>
            </div>

            <div className="flex justify-start items-start gap-8">
              <div className="flex justify-start flex-col items-start  gap-4 mt-[30px]">
                <p className="text-[16px] font-semibold text-[#000000] text-left">
                  SKU
                </p>
                <p className="text-[16px] font-semibold text-[#000000] text-left">
                  Category
                </p>
                <p className="text-[16px] font-semibold text-[#000000] text-left">
                  Tags
                </p>
              </div>
              <div className="flex justify-start flex-col items-start  gap-4 mt-[30px]">
                <p className="text-[16px] font-semibold text-[#666666] text-left">
                  : AA0031
                </p>
                <p className="text-[16px] font-semibold text-[#666666] text-left">
                  : {SingleProduct.data.category}
                </p>
                <p className="text-[16px] font-semibold text-[#666666] text-left">
                  : Fashion, Classic, Blouses, Dresses
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center  mt-[40px]">
              <select className="border-2 border-[black] rounded-md p-2 px-3">
                <option>Select Size</option>
              </select>

              <div className="flex justify-center items-center gap-4">
                <button
                  className="text-[16px] font-semibold"
                  onClick={() => decreaseHandler(SingleProduct.data)}
                  disabled={disableCart?.quantity <= 1}
                >
                  -
                </button>
                <input
                  className="border-[black] border-2 rounded-md w-[20%] text-center"
                  type="number"
                  value={disableCart ? disableCart.quantity : 0}
                />
                <button
                  className="text-[16px] font-semibold"
                  onClick={() => increaseHandler(SingleProduct.data)}
                >
                  +
                </button>
              </div>

              <p className="text-[16px] font-semibold text-[#F3692E]">
                Add note
              </p>
            </div>

            <div className="flex justify-start items-center gap-4 mt-[40px]">
              <button
                className="bg-[#F86338] rounded-md text-[white] p-2 px-6"
                onClick={() => productHandler(SingleProduct.data)}
                disabled={disableCart}
              >
                {disableCart ? "added To Cart" : "Add to Cart"}
              </button>
              <div className="border-[#F86338] border-2 p-3 rounded-md">
                <BsStar className="text-[#F86338]" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2  xs:grid-cols-1  gap-8 mt-[40px]">
          <div>
            <p className="text-[24px] font-semibold text-left">Description</p>
            <p className="text-[16px] text-[#515151] text-left py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur
            </p>
          </div>

          <div>
            <p className="text-[24px] font-semibold text-left ">
              Fabric Details
            </p>
            <div className="flex flex-col">
              <div className="flex justify-start items-center gap-4 mt-[30px]">
                <div className="border-2 rounded-full   border-[#F86338]">
                  <BiCheck className="text-[#F86338]" />
                </div>
                <p className="text-[16px]">100% Cotton</p>
              </div>
              <div className="flex justify-start items-center gap-4 mt-[30px]">
                <div className="border-2 rounded-full   border-[#F86338]">
                  <BiCheck className="text-[#F86338]" />
                </div>
                <p className="text-[16px]">Quick Dry</p>
              </div>
              <div className="flex justify-start items-center gap-4 mt-[30px]">
                <div className="border-2 rounded-full   border-[#F86338]">
                  <BiCheck className="text-[#F86338]" />
                </div>
                <p className="text-[16px]">Ties as Shoulder</p>
              </div>
              <div className="flex justify-start items-center gap-4 mt-[30px]">
                <div className="border-2 rounded-full   border-[#F86338]">
                  <BiCheck className="text-[#F86338]" />
                </div>
                <p className="text-[16px]">Accusantium doloremque </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailSection;
