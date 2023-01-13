import React from 'react'
import BodySection from './src/components/BodySection'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
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