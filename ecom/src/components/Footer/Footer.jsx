import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-logo">
        <img src="" alt="" />
        <p>ShoPpeR</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
            <li>Products</li>
            <li>Officers</li>
            <li>About</li>
            <li>Contact</li>
            
          </ul>
          <div className="footer-social-icons">
          <InstagramIcon/>
          <WhatsAppIcon/>
          <XIcon/>
       </div>
  

      <div className='footer-copyright' >
      <hr/>
      <p >Copyright 2024 @ Shopper.com - All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer