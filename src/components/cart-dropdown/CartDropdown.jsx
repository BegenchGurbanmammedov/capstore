import './CartDropdown.scss'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import { selectCartItems } from '../../store/cart/cart.selector'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

export default function CartDropdown() {
	const cartItems =  useSelector(selectCartItems);
	
	const navigate=useNavigate()
	const goToCheckoutHandler=()=>{
		navigate('/checkout')
	}
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map(item=><CartItem key={item.id} cartitem={item} />)}
			</div>
			<Button onClick={goToCheckoutHandler}>Checkout</Button>
		</div>
	)
}