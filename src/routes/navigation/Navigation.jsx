import {Outlet, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Fragment,useContext} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/CartIcon'
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartIsOpen } from '../../store/cart/cart.selector';
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import './navigation.scss'
import {signOutUser} from '../../utils/firebase'
const Navigation=()=>{
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectCartIsOpen)
  // const signOutHandler=async ()=>{
  //   const res = await signOutUser();
  //   console.log(res)
  //   setCurrentUser(null)
  // }
  return(
    <Fragment>
     
        <div className='navigation'>
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ?(
              <span className="nav-link" onClick={signOutUser}>Sign Out</span>
              ):(
            <Link className="nav-link" to="/auth">
                Auth
            </Link>
              )}
          <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
     
    </Fragment>
    )
}

export default Navigation;