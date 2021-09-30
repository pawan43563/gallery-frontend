import React, { useState } from 'react';
import styles from './Register.module.scss';
import {Link} from "react-router-dom";
import { Redirect, Route } from 'react-router';


export interface responseInterface{
    message: string,
    data: any,
} 

function Register(){
    const [redirect, setRedirect] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const url = 'http://localhost:4000/users/register';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch(event.target.name){
            case 'firstname':
                setFirstname(event.target.value);
                break;
            case 'lastname':
                setLastname(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const registerUser = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        // console.log(event);
        
        const reqObj = {
            user_name: `${firstname} ${lastname}`,
            user_email: email,
            user_password: password,
            confirm_user_password: confirmPassword,
            bio: ""
        }

        const target = event.target as typeof event.target & {
            firstname: { value: string};
            lastname: { value: string};
            email: { value: string };
            password: { value: string };
            confirmPassword: { value: string};
          };

        try{
            let resData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqObj),
            });
            
            let dataValue: responseInterface = await resData.json();
            // console.log(dataValue);

            if(dataValue && dataValue.data){
                target.firstname.value =
                target.lastname.value =
                target.email.value =
                target.password.value = 
                target.confirmPassword.value = "";
                alert("User Created Successfully");
                setRedirect(true);
            }
            else{
                target.firstname.value =
                target.lastname.value =
                target.email.value =
                target.password.value = 
                target.confirmPassword.value = "";
                alert("User Could not be created");
                setRedirect(false);
            }
            
        }catch(err){
            console.log(err);
            target.firstname.value =
            target.lastname.value =
            target.email.value =
            target.password.value = 
            target.confirmPassword.value = "";
            alert("User Could not be Created. Try Again!!");
        }
    }

    return <>
    <Route>
        { redirect ?
            <Redirect to="/login" />
            :
            <form className={styles.registerForm} onSubmit={registerUser}>
                <h1>REGISTER</h1>
                <label htmlFor="firstname">First Name </label>
                <input id="firstname" type="text" name="firstname" onChange={handleChange} required/>

                <label htmlFor="lastname">Last Name </label>
                <input id="lastname" type="text" name="lastname" onChange={handleChange}required/>

                <label htmlFor="email">Email </label>
                <input id="email" type="email" name="email" onChange={handleChange} required/>

                <label htmlFor="password">Password </label>
                <input id="password" type="password" name="password" onChange={handleChange} autoComplete="on" required minLength={8}/>

                <label htmlFor="confirmPassword">Confirm Password </label>
                <input id="confirmPassword" type="password" name="confirmPassword" onChange={handleChange} autoComplete="on" required minLength={8}/>

                <button type="submit">REGISTER</button>

                <p>Already Registered? <Link to="/login">LOGIN</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Register;