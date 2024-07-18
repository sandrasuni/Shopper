import React from 'react'
import './Header.css'
import { Button } from '@mui/material'

const Header = () => {
  return (
    <div className='header'>
      <img src='https://t4.ftcdn.net/jpg/05/39/99/67/360_F_539996737_T5gJEIEqsGUjMXhrLZt0lDLcrOWsSHlb.jpg' style={{height:'500px', width:'100%'}}/>
        <div className="header-contents">
            <h2>New Arrivals</h2>
            <p>Discover the latest trends and styles hot off the press!<br/>Our new arrivals section is bursting with fresh picks designed<br/> to keep your ahead of the fashion curve.</p>
          <a href='#cloth-display'  ><Button variant='contained' style={{color:'white'}}>Shop Now</Button></a>
        </div>
        
    </div>
  )
}

export default Header