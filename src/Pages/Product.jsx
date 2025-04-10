import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import OurProductHeaderSection from './OurProductHeaderSection'
import Productitems from './Productitems'
import Productsection from './Productsection'

const Product = () => {
  return (
    <div>
    <OurProductHeaderSection/>
    <Productitems/>
    <Productsection/>
    </div>
  )
}

export default Product