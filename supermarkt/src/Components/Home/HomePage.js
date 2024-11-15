import React from 'react'
import HeaderS from '../Header/HeaderS'
import Navbar from '../Navbar/Navbar'
import DisplaySection from '../DisplaySection/DisplaySection'
import Footer from '../Footer/Footer'
import Brands from '../Brands/Brands'
import Advertisement from '../Advertisement/Advertisement'


function HomePage() {
  
  return (
    <div>
      <HeaderS />
      <Navbar />
      
      <DisplaySection></DisplaySection>
      <Advertisement></Advertisement>
      <Brands />
      <Footer></Footer>

    </div>
  )
}

export default HomePage