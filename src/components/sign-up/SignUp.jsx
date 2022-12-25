import {useState} from 'react'
import FormInput from '../form-input/formInput'
import Button from '../button/Button'
import './signup.scss'
import { UserContext } from '../../contexts/UserContext'
import {createAuthUserWithEmailAndPassword,createUserDocumentAuth} from '../../utils/firebase'
const defaultFormFields={
	displayName:'',
	email:'',
	password:'',
	confirmPassword:''
}

const SignUp = () => {
	const [formFields,setFormFields]=useState(defaultFormFields);
	const {displayName,email,password,confirmPassword}=formFields;
	
	const resetFormFields=()=>{
		setFormFields(defaultFormFields)
	}
	const handleSubmit=async (event) =>{
		event.preventDefault()
		if(password !== confirmPassword){
			alert("password do not match") 
			return;
		}

		try{
			const {user}= await createAuthUserWithEmailAndPassword(email,password);
			await createUserDocumentAuth(user,{displayName})
			
			resetFormFields();


		}catch(err){
			if(err.code=== 'auth/email-already-in-use'){
				alert('Cannot create user,email already in use!')
			}else{
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
			<h2>Don't have an account</h2>
			<span>Sign up with your email and password</span>
		<form onSubmit={handleSubmit}>
			
			<FormInput type="text" required label="Display Name" onChange={handleChange} value={displayName} name="displayName"/>
			
			<FormInput type="email" required label="Email" onChange={handleChange} value={email} name="email"/>
		
			<FormInput type="password" required label="Password" onChange={handleChange} value={password} id="" name="password"/>
		
			<FormInput type="password" required label="confirmPassword" onChange={handleChange} value={confirmPassword} id="" name="confirmPassword"/>
			<Button  type="submit">Sign Up</Button>
		</form>
		</div>

	)
}

export default SignUp