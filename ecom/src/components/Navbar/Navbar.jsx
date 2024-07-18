

import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from '../../Context/ShopContext';
import logo1 from '../assets/logo1.jpg'

const Navbar = () => {
  const[menu,setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo1} alt='' style={{height:'100px',width:'100px'}}/>
        <p>ShoPpeR</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}> Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("mens")}}><Link to='/mens'style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("kids")}}><Link to='/kids'style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>} 
       <Link to='/cart'>  <ShoppingCartIcon style={{height:'30px',width:"30px"}} className='icon'/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>


    </div>
  )
}

export default Navbar