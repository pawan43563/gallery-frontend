import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Link, Redirect, Route } from 'react-router-dom';
import { responseInterface } from "../Register/Register";
import { useDispatch } from 'react-redux';
import { loggedIn } from '../../features/auth/authSlice';

function Login(){
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const url = 'http://localhost:4000/users/login';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch(event.target.name){
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const loginUser = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        
        const reqObj = {
            user_email: email,
            user_password: password,
        }

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
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
                let data = {...dataValue.data};
                target.email.value = target.password.value = "";
                alert(dataValue.message);
                dispatch(loggedIn({payload: data.token}));
                // ------------set in local storage and global variable
                setRedirect(true);       
            }

        }catch(err){
            console.log(err);
            target.email.value = target.password.value = "";
            alert("User Cannot be Logged In. ");
        }
    }

    return <>

    <Route>
        {redirect ?
            <Redirect to='/' />
            :
            <form className={styles.loginForm} onSubmit={loginUser}>
                <h1>LOGIN</h1>
                <label htmlFor="email">Email </label>
                <input id="email" type="email" name="email" onChange={handleChange} required/>

                <label htmlFor="password">Password </label>
                <input id="password" type="password" name="password" onChange={handleChange} required minLength={8} autoComplete="on"/>

                <button type="submit">LOGIN</button>

                <p>Don't have an account? <Link to="/register">REGISTER</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Login;