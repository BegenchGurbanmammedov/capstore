import {useState,useContext} from 'react'
import FormInput from '../form-input/formInput'
import Button from '../button/Button'
import './signin.scss'
import { UserContext } from '../../contexts/UserContext'
import {signInWithGooglePopup,createUserDocumentAuth,
			signInAuthUserWithEmailAndPassword
} from '../../utils/firebase'
const defaultFormFields={

	email:'',
	password:'',

}

const SignIn = () => {
	const [formFields,setFormFields]=useState(defaultFormFields);
	const {email,password}=formFields;
	const {setCurrentUser}=useContext(UserContext)
	const resetFormFields=()=>{
		setFormFields(defaultFormFields)
	}
	const signInWithGoogle=async ()=>{
   const {user}=await signInWithGooglePopup();
   const userDocRef = await createUserDocumentAuth(user)
 }
	const handleSubmit=async (event) =>{ 
		event.preventDefault()
		

		try{
		const {user}=await signInAuthUserWithEmailAndPassword(email,password)
	
			resetFormFields();


		}catch(err){
			switch(err.code){
				case 'auth/wrong-password':
					alert('incorrect password for email')
					break
				case 'auth/user-not-found':
					alert('no user associated with this email')
					break;
				default:
					console.log(err) 
			}
		}
	} 
	const handleChange=(event)=>{
		const {name,value}=event.target;
		setFormFields({...formFields,[name]:value})
	}
	return (
		<div className="sign-up-container">
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
		<form onSubmit={handleSubmit}>
			
			
			
			<FormInput type="email" required label="Email" onChange={handleChange} value={email} name="email"/>
		
			<FormInput type="password" required label="Password" onChange={handleChange} value={password} id="" name="password"/>
		
			<div className="buttons-container">
				<Button  type="submit">Sign In</Button>
			<Button type="button
			" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>
		
			</div>
			</form>
		</div>

	)
}

export default SignIn