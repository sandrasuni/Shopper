import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Button } from '@mui/material'
import './PlaceOrder.css'
import Navbar from '../../Search/Navbar/Navbar'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div>
        <Navbar/>
    <form className='place-order'>
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input type="text"placeholder='First Name' />
                <input type="text" placeholder='Last Name'/>
            </div>
            <input type="email"placeholder='Email address' />
            <input type="text" placeholder='Street'/>
            <div className="multi-fields">
                <input type="text"placeholder='City' />
                <input type="text" placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input type="text"placeholder='zip code' />
                <input type="text" placeholder='country'/>
            </div>
            <input type="text" placeholder='Phone' />
        </div>

        <div className="place-order-right">
        <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${2}</p>
                </div>
                <hr/>
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount()+2}</b>
                </div>
            </div>
            <Button >PROCEED TO PAYMENT</Button>
        </div>
        </div>

    </form>
    </div>
  )
}

export default PlaceOrder