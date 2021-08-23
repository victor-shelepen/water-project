import React,  {Fragment } from 'react'
import { Button } from '@material-ui/core'
import Header from './Header'

export default function () {
  return (
    <Fragment>
      <Header />
      <Button color="primary">Button</Button>
    </Fragment>
  )
}