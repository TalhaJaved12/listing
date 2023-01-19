import React from 'react'
import Footer from './src/inc/Footer'
import Header from './src/inc/Header'
import Banner from './src/components/Banner'
import BodySection from './src/components/BodySection'

function index() {
  return (
    <div>
        <Header/>
        <Banner/>
        <BodySection/>
        <Footer/>
    </div>
  )
}

export default index