import React,  {Fragment } from 'react'
import { Button } from '@material-ui/core'

import Header from './component/Header'
import Contacts from './component/Contacts'
import Footer from './component/Footer'

export default function () {
  return (
    <Fragment>
      <Header />
      <Button color="primary">Button</Button>
      <Contacts />
      <Footer />
    </Fragment>
  )
}