import React from 'react';
import styles from './Login.module.css'
import {Link} from 'react-router-dom'
const Login = () => {
  const [login,setLogin] = React.useState({
    email:'',
    password:''
  })
  function handleChange({target}){
    setLogin({...login, [target.id]:target.value})
  }
  return (
    <div>
      <form className={`${styles.form} animeLeft`} action="">

        <span>Adress email</span>
        <label htmlFor="email">
          <i className="fas fa-envelope"></i>
          <input 
            id='email' 
            value={login.email}
            onChange={handleChange}
            type="email" />
        </label>
        <span>Password</span>
        <label htmlFor="password">

          <i className="fas fa-key"></i>
          <input 
            value={login.password}
            onChange={handleChange}
            id='password' 
            type="password" />
        </label>

        <span>
          <label htmlFor='choice'>
            <input 
              type="checkbox"
              value={login.password}
              onChange={handleChange}
              id="choice" />
            I agress to Plataform <Link to='*'>Terms of Services</Link>
          </label>
        </span>
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login
