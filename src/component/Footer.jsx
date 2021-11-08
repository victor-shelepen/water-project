import React from "react"
import { Link } from 'react-scroll'

export default function () {
  return (
    <>
      Footer
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
        <li><Link to="presentationSection" spy={true} smooth={true}>Presentation</Link></li>
        <li><Link to="promotionSection" spy={true} smooth={true}>Promotion</Link></li>
        <li><Link to="contactsSection" spy={true} smooth={true}>Contacts</Link></li>
      </ul>
    </>
  )
}
