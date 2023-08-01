import React from "react";
import Container from "../../Compoments/Container";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Shipping() {

  const navigate = useNavigate()
  const state = useSelector((state) => state);
  const { cart, auth } = state;
  const { list, shippingDetails, subt } = cart;
  const {userinfo} = auth

  console.log( "orderDetail",shippingDetails.address)
  console.log("user" ,userinfo.user._id);
  console.log("amount", subt);

  const amount = subt
  const user = userinfo.user._id;
  const deliveryAddress = shippingDetails.address;
  const items = list.map((x) => ({ product: x._id, qty: x.quantity }));
  console.log( "items" , items);


      const placeHAndler =  async() => {
          await axios
            .post("http://localhost:5000/order", {
              amount,
              user,
              deliveryAddress,
              items,
            })
            .then((res) => {
              console.log(res);
              navigate("/ordersuccess");

            })
            .catch((err) => {
              console.log(err);
            });
      }


  
  return (
    <div className="bg-[#F4F4F4]">
      <Container>
        <div className="grid  grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="bg-[#FFFFFF] rounded-md p-[15px]">
              <p className="text-[14px] my-3">
                Deliver to: {shippingDetails.firstName}
              </p>
              <div className="flex gap-2">
                <p className="bg-[#EBF4F6] text-[14px] px-2 h-[20px]">Home</p>
                <p className="text-[14px]">3472919116 </p>
                <p>|</p>
                <p className="text-[12px]">{shippingDetails.address}</p>
              </div>

              <div className="border-2 border-[#E5E5E5] p-3 my-3">
                <p className="text-[15px]">
                  Collect your parcels at a location close to you at a fraction
                  of the delivery fee!
                </p>
                <p className="text-[15px]">
                  6 suggested collection point(s) nearbyCheck Pick-up Points
                </p>
              </div>

              <p className="text-[15px]">Bill to default billing address</p>
              <p className="text-[15px]">Email : {shippingDetails.email} </p>
            </div>

            {list.map((x) => (
              <div className="bg-[#FFFFFF] rounded-md p-[15px] my-3">
                <p className="text-[14px] my-3">Online Universe</p>

                <div className="flex gap-2">
                  <img className="h-[40px] w-[40px]" src={x.image} />
                  <div className="flex flex-col gap-2 w-[100%]">
                    <p className="text-[12px]">{x.description}</p>
                    <div className="flex justify-between">
                      <p className="text-[16px] text-[#8BBBE9]">{x.category}</p>
                      <p className="text-[14px] "> Qty: {x.quantity} </p>
                      <p className="text-[14px] "> {x.price} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <div className="bg-[#FFFFFF] rounded-md p-[15px] ">
              <p className="text-[14px]">Discount and Payment</p>
              <div className="flex justify-between my-3">
                <p className="text-[14px]">Daraz Voucher</p>
                <p className="text-[14px]">No Applicable Voucher</p>
              </div>
              <div className="flex justify-between my-3">
                <p className="text-[14px]">Promo Code</p>
                <p className="text-[14px]">Enter Store/Daraz Code</p>
              </div>

              <hr />
              <p className="text-[14px] font-bold my-3">Order Summary</p>

              <div className="flex justify-between my-1">
                <p className="text-[14px] font-bold  mt-2">Items Total</p>
                <p className="text-[14px] font-bold  mt-2">Rs. {subt}</p>
              </div>

              <div className="flex justify-between my-1">
                <p className="text-[14px] font-bold  mt-2">Delivery Fee</p>
                <p className="text-[14px] font-bold  mt-2">Rs. 00</p>
              </div>

              <div className="flex justify-between my-1">
                <p className="text-[14px] font-bold  mt-2">Total Payment</p>
                <p className="text-[14px] font-bold  mt-2">Rs. 341</p>
              </div>

              <p className="text-[14px] font-bold   text-end">
                VAT included, where applicable
              </p>
              <div className="my-3">
                <button
                  className="bg-[#f85606] w-[100%] text-[white] rounded-sm p-2"
                  onClick={placeHAndler}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Shipping;
