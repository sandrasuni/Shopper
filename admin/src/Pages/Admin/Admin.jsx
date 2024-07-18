import React from 'react'
import './Admin.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import { AddProduct } from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import EditProduct from '../../Components/EditProduct/EditProduct'


const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct'element={<AddProduct/>}/>
          <Route path='/listproduct'element={<ListProduct/>}/>
          <Route path='/edit/:id'element={<EditProduct/>}/>

        



        </Routes>
       
        

    </div>
  )
}

export default Admin