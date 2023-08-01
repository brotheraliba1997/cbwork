import React, { useEffect } from 'react'
import Container from '../../Compoments/Container'
import { useDispatch, useSelector } from 'react-redux';
import { subTotal } from '../../Redux/Cart/CartSlice';
import { useNavigate } from 'react-router-dom';

function CartTotal() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

   const cart = useSelector((state) => state.cart.list);
   const sum = cart.reduce((accumulator, currentValue) => {
     return accumulator + currentValue.quantity * currentValue.price;
   }, 0);


    const ProceedToCheckOutHandler = () =>{
              navigate("/checkout");
    }

    // useEffect(() => {
    //   if(auth.user){
    //     navigate("/login")

    //   }
    // },[])

   dispatch(subTotal(sum));


  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-8">
          <div className="bg-[#FFEFEB] md:w-[70%] xs:w-[100%] py-4 px-8  flex flex-col items-start justify-center ">
            <p className="text-[24px] my-4">Have a Coupon?</p>
            <input
              type="text"
              className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full rounded-md h-[40px]"
            />

            <button className="bg-[#F86338] text-[16px] p-3 my-7 text-[white] ">
              Apply Coupon
            </button>
          </div>
          <div>
            <p className="text-[24px] ">Cart Totals</p>
            <div className="flex justify-start gap-12 items-start">
              <div>
                <p className="text-[16px] my-5 h-[20px] ">Subtotal</p>
                <p className="text-[16px] my-5 h-[20px] ">Shipping</p>
                <p className="text-[16px] my-5 h-[20px] "></p>
                <p className="text-[16px] my-5 h-[20px]">Total</p>
              </div>
              <div>
                <p className="text-[16px] my-5  text-[#515151] h-[20px]">
                  ${Math.round(sum)}
                </p>
                <p className="text-[16px] my-5  text-[#515151] h-[20px]">
                  Free Shipping
                </p>
                <div className="flex justify-between gap-4 h-[20px] ">
                  <p className="text-[16px]   text-[#515151]">
                    Shipping to Sidney
                  </p>
                  <p className="text-[16px]   text-[#F3692E] h-[20px]">
                    Change
                  </p>
                </div>
                <p className="text-[16px] my-5  text-[#11142D] h-[20px] font-semibold">
                  ${Math.round(sum)}
                </p>
              </div>
            </div>

            <div
              className="bg-[#F86338] text-[16px] cursor-pointer p-3 my-7 text-[white] px-10 text-center md:w-[80%]  xs:w-[100%]"
              onClick={ProceedToCheckOutHandler}
            >
              Proceed to Check
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartTotal