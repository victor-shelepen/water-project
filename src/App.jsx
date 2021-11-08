import React from 'react'

import '../style/component/App.scss'

import Header from './component/Header'
import Contacts from './component/Contacts'
import Footer from './component/Footer'

export default function () {
  return (
    <>
      <Header />
      <Contacts />
      <Footer />
      <div class='hero'></div>
    </>
  )
}