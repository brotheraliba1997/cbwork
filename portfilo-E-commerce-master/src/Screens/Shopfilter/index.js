import React from 'react'
import Header from '../../Compoments/Header'
import SubHeader from '../../Compoments/SubHeader'
import MainSection from '../Home/MainSection'
import ShopSection from '../Shop/shopSection'
import Footer from '../../Compoments/Footer'
import ProductFilter from './ProductFilter'


function Shopfilter() {
  return (
    <div>
      <ShopSection />
      <ProductFilter/>

    </div>
  )
}

export default Shopfilter;