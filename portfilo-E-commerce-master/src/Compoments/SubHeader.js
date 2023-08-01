import React from 'react'
import Container from './Container';
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import TextParag from './TextParag';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from '../Redux/auth/AuthSlice';


function SubHeader() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch()

      const userLogoutHandler  = () => {
        console.log("chal ja")
        dispatch(userLogout())
      }


      const LoginScreenHandler = () => {
        navigate("/login")
      }

      

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 ">
          <div className="flex justify-between">
            <Link to="/">
              <TextParag title="Home" fsize="16px" className="font-semibold" />
            </Link>
            <TextParag title="About" fsize="16px" className="font-semibold" />
            <Link to="/shop">
              <TextParag title="Shop" fsize="16px" className="font-semibold" />
            </Link>
            <TextParag title="Blog" fsize="16px" className="font-semibold" />
          </div>{" "}
          <div></div>
          <div className="flex md:justify-end  xs: justify-between gap-[38px]">
            <div>
              <div>
                <AiOutlineHeart
                  style={{ fontSize: "24px", color: "#000000" }}
                />{" "}
              </div>
            </div>

            <Link to="/cart">
              <div className="flex gap-2">
                <div>
                  <SlBasketLoaded
                    style={{ fontSize: "24px", color: "#000000" }}
                  />
                </div>
                <div className="rounded-full w-[20px] h-[20px] text-white bg-[#F86338] text-center">
                  {cart.list.length}
                </div>
              </div>
            </Link>

            <div>

              
              {auth.userinfo ? (
                <button
                  className="bg-[#F86338] px-4 shadow-lg text-white rounded-md text-[20px]"
                  onClick={userLogoutHandler}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-[#F86338] px-4 shadow-lg text-white rounded-md text-[20px]"
                  onClick={LoginScreenHandler}
                >
                  Login
                </button>
              )}
            </div>
          </div>{" "}
        </div>
      </Container>
    </div>
  );
}

export default SubHeader