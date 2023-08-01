import React, { useEffect, useState } from "react";
import Container from "../../Compoments/Container";
import { BsCheck2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "../../Redux/Cart/CartSlice";

function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shippingDetails, setshippingDetails] = useState({});
  const auth = useSelector((state) => state.auth.userinfo);
  console.log(auth);


  const userInfo = () => {
    console.log(shippingDetails)
    dispatch(userInformation(shippingDetails));
    navigate("/Shipping");
  }

  useEffect(() => {
    setshippingDetails({
      email: auth.user.email,
      firstName: auth.user.firstName,
      lastName: auth.user.lastName,
    });
  }, [auth.user]);

  console.log(shippingDetails);

  useEffect(() => {
    if (!auth) {
      navigate("/login?redirect=checkout");
    }
  }, [auth]);
  return (
    <div>
      <Container>
        <p className="text-[48px]  text-[#11142D] font-semibold">Checkout</p>

        <p className="text-[31px] my-5   text-[#11142D] font-semibold">
          Customer Email
        </p>
        <div>
          <p className="text-[16px]   text-[#11142D] font-semibold">
            Email Address
          </p>

          <input
            type="text"
            className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full rounded-md h-[40px]"
            value={shippingDetails.email}
            onChange={(e) =>
              setshippingDetails({ ...shippingDetails, email: e.target.value })
            }
          />

          <p className="text-[16px]   text-[#9A9AB0] font-semibold">
            Already have an account? Sign in
          </p>
        </div>
        <p className="text-[31px] my-5   text-[#11142D] font-semibold">
          Shipping Address
        </p>
        <div className="grid md:grid-cols-2 gap-4 xs:grid-cols-1 ">
          <div>
            <p className="text-[16px] text-[#11142D] font-semibold">
              First Name
            </p>
            <input
              type="text"
              className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full rounded-md h-[40px]"
              value={shippingDetails.firstName}
              onChange={(e) =>
                setshippingDetails({
                  ...shippingDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div>
            <p className="text-[16px] text-[#11142D] font-semibold">
              Last Name
            </p>
            <input
              type="text"
              className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full rounded-md h-[40px]"
              value={shippingDetails.lastName}
              onChange={(e) =>
                setshippingDetails({
                  ...shippingDetails,
                  lastName: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div>
          <p className="text-[16px] text-[#11142D] font-semibold">
            Address Line
          </p>
          <textarea
            placeholder="Address line"
            className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full rounded-md px-2"
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                address: e.target.value,
              })
            }
          />
        </div>

        {/* <div>
          <p className="text-[16px] text-[#11142D] font-semibold">Country</p>
          <select
            placeholder="Address line"
            className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full h-[40px] rounded-md px-2"
          >
            <option>moblie</option>
            <option>laptop</option>
            <option>watch</option>
          </select>
        </div> */}

        <div className="grid md:grid-cols-2 gap-4 xs:grid-cols-1 ">
          <div>
            <p className="text-[16px] text-[#11142D] font-semibold">
              Postal Code
            </p>
            <input
              type="number"
              className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full rounded-md h-[40px]"
              onChange={(e) =>
                setshippingDetails({
                  ...shippingDetails,
                  postalCode: e.target.value,
                })
              }
            />
          </div>
          <div>
            <p className="text-[16px] text-[#11142D] font-semibold">
              Phone Number
            </p>
            <input
              type="number"
              className="border-[#F86338] border-2 my-4 bg-[#FFEFEB] w-full rounded-md h-[40px]"
              onChange={(e) =>
                setshippingDetails({
                  ...shippingDetails,
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="my-6">
          <p className="text-[16px] text-[#11142D] font-semibold">
            Billing Address
          </p>
          <div className="flex justify-start items-center gap-4 my-6">
            <div className="rounded-full border-2 border-[#F86338] flex justify-center items-center   w-[20px] h-[20px] text-center ">
              <BsCheck2 className="text-[#F86338] text-[18px]  font-semibold" />
            </div>
            <p className="text-[16px] text-[#F86338] font-semibold">
              Same as shipping address
            </p>
          </div>

          <div
            className="bg-[#F86338] rounded-md text-[16px] p-3 my-7 text-[white] px-10 text-center md:w-[100%]  xs:w-[100%]"
            onClick={userInfo}
          >
            Continue
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CheckOut;
