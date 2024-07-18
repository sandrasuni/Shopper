import React from 'react'
import './Navbar.css'
import logo1 from '../../assets/logo1.jpg'
import avatar from '../../assets/avatar.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo1} alt='' className='nav-logo'/>
        <h3 style={{color:'green',fontSize:'20px'}}>ShoPpeR</h3>
        <img src={avatar} alt='' className='profile'style={{height:'80px',width:'130px'}}/>
        
    </div>
  )
}

export default Navbar