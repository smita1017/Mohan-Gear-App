import React from 'react'
import Navigation from './Pages/Navigation'
import Footer from './Pages/Footer'
import OurProductHeaderSection from './OurProductHeaderSection'
import Productitems from './Pages/Productitems'
import Productsection from './Pages/Productsection'

const Product = () => {
  return (
    <div>
    <Navigation/>
    <OurProductHeaderSection/>
    <Productitems/>
    <Productsection/>
    <Footer/>
    </div>
  )
}

export default Product