import React from 'react'
import "./authentication.scss"
// import {useEffect} from 'react'
// import {getRedirectResult} from 'firebase/auth'
import SignUp from '../../components/sign-up/SignUp'
import SignIn from '../../components/sign-in/SignIn'

const Authentication = () => {
	// useEffect(async()=>{
	// 	const response=await getRedirectResult(auth);
	// 	if(response){
	// 		const userDocRef=await getRedirectResult(auth)
	// 	}
	// },[])
	
 	// const logGoogleRedirectUser=async()=>{
 	// 	const {user}=await signInWithGoogleRedirect();
 	// 	console.log(user)
 	// }
	return (

		<div className="authentication-container">
	
		<SignIn/>
		<SignUp/>
		{/*<button onClick={signInWithGoogleRedirect}>
			SignIn google redirect
		</button>*/}
		</div>
	)
}

export default Authentication;