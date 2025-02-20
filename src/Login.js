import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import fertimartLogoDark from './assets/fertimart-logo-dark.png'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e=> {
        e.preventDefault();
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
        //Fancy Firebase login;
    }
    const register = e=> {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //successful registration
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))   

        //Fancy Firebase register;
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src={fertimartLogoDark}/>
        </Link>
        
        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the Ferti-Mart Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice
                and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} 
            className='login__registerButton'>Create your Fertimart Account</button>
        </div>
    </div>
  )
}

export default Login