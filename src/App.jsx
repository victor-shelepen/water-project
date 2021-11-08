import React from 'react'

import '../style/component/App.scss'

import Header from './component/Header'
import Presentation from './component/Presentation'
import Promotion from './component/Promotion'
import Contacts from './component/Contacts'
import Footer from './component/Footer'

export default function () {
  return (
    <>
      <Header />
      <Presentation />
      <Promotion />
      <Contacts />
      <Footer />
      <div class='hero'></div>
    </>
  )
}