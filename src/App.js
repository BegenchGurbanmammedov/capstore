import Home from './routes/home/homeComponenet'
import {Routes,Route} from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'
import { useEffect } from 'react'
import { onAuthStateChangedListener } from './utils/firebase'
import { createUserDocumentAuth } from './utils/firebase'
import { setCurrentUser } from './store/user/user.action'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
		const unsubscribe=onAuthStateChangedListener((user)=>{
			if(user){
				createUserDocumentAuth(user);
			}
			dispatch(setCurrentUser(user))
		})
		return unsubscribe;
	},[])
  return (
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        </Route>
    </Routes>
    )
}

export default App;


//bootrstrap font-awesome
    