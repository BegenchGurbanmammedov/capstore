import './CartDropdown.scss'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {CartContext} from '../../contexts/CartContext'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

export default function CartDropdown() {
	const { cartItems } = useContext(CartContext)
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