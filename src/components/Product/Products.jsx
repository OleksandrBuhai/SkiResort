import AOS from "aos";
import 'aos/dist/aos.css';

import React, { useEffect } from 'react'
import Carousel from './Carousel/Product'

export default function Products() {

  useEffect(() => { AOS.init }, [])

  return (
    <div id="Products"
      data-aos="fade-right">
      <h2 style={{ textAlign: 'center', margin: 'auto', fontSize: '3rem' }}>Check out our Products</h2>
      <Carousel />
    </div>
  )
}
