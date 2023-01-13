import React from 'react'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Banner from './src/components/Banner'
import BodySection from './src/components/BodySection'

function HomePage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <BodySection/>
        <Footer/>
    </div>
  )
}

export default HomePage