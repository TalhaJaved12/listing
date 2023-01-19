import React from 'react'
import BodySection from './src/components/BodySection'
import Footer from './src/inc/Footer'
import Header from './src/inc/Header'
import ListingBody from './src/components/ListingBody'
import Tabs from './src/components/Tabs'

function ListingPage() {
  return (
    <>
        <Header/>
        <Tabs/>
        <ListingBody/>
        <BodySection/>
        <Footer/>
    </>
  )
}

export default ListingPage