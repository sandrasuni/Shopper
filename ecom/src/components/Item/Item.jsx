import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {

  const scrollTop = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}> <img onClick={scrollTop} src={props.image} alt=""  className='itemimg' /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item