import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Successfullorder() {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth.userinfo);

  useEffect(() => {
    if (!auth) {
      navigate("/login?redirect=cart");
    }
  }, [auth]);

  return (
    <div className="bg-[#F4F4F4] rounded-md p-[15px]  w-[80%] mx-auto  text-center my-[60px]">
      <p className="text-[22px] ">your order is place successfully</p>
      <p className="text-[22px] ">Thankyou for Your order</p>
    </div>
  );
}

export default Successfullorder;
