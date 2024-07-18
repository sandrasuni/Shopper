import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import addproduct from '../../assets/addproduct.jpg'
import productlist from '../../assets/productlist.jpg'



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <img src={addproduct} alt="" style={{height:'30px',width:'30px'}}/>
            <p>Add Product</p>
        </div>
        </Link>

       

        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className='sidebar-item'>
            <img src={productlist} alt="" style={{height:'30px',width:'30px'}} />
            <p>Product List</p>
        </div>
        </Link>

      

    </div>

  )
}

export default Sidebar