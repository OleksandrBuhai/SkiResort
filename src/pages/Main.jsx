

import React from 'react'

import Parralax from '@/components/Hero/Parralax'
import About from '@/components/About/About'
import Team  from '@/components/Team/Team'
import Products from '@/components/Product/Products'
import Events from '@/components/Events/Events'
import Contact from '@/components/Contact/Contact'

export default function Main() {
  return (
    <div id='Main'>
     
      <Parralax />
      <About />
      <Team />
      <Products />
      <Events />
      <Contact />
    </div>
  )
}
 