import React from 'react'
import Header from '../../Compoments/Header';
import SubHeader from '../../Compoments/SubHeader';
import ShopSection from '../Shop/shopSection';
import Payment from './Payment';
import CartTotal from './CartTotal';
import CheckOut from './CheckOut';
import RecommendSection from '../Shop/recommendSection';
import Footer from '../../Compoments/Footer';

function Cart() {
  return (
    <div>
   
      <Payment/>
      <CartTotal/>
      {/* <RecommendSection/> */}

    </div>
  );
}

export default Cart