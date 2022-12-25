import React from 'react'
import './CartItem.scss'
const CartItem = ({cartitem}) => {
	console.log(cartitem)
	const {name,imageUrl,price,quantity}=cartitem;
	console.log(cartitem.name)
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={`${name}`}/>
			<div className="item-details">
				<span className='name'>{cartitem.name}</span>
				<span className='price'>{quantity} x ${price} </span>
			</div>
			
		</div>
	)
}

export default CartItem