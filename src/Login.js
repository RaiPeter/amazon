import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        // some fancy firebase login
    }

    const register = e => {
        e.preventDefault();

        // fancy firebase register
    }
    return (
        <div className="login">
            <Link to="/">
            <img
             className="login__logo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input 
                    type='text' 
                    value={email} onChange=
                    {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input 
                    type='password' 
                    value={password} 
                    onChange={e=> setPassword(e.target.value)}/>

                <button type="submit"
                    onClick={signIn} 
                    className="login__signInButton"
                    >Sign In</button>
            </form>
            <p>
                By s igning in you agree to Amazon Clone condition of use & sale.
                Please see our privacy notice. our cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} 
                className="login__registerButton">Create your account</button>

        </div>

        </div>
    )
}

export default Login
