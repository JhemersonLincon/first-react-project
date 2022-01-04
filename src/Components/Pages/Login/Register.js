import React from 'react'
import styles from './Login.module.css'
const Register = () => {
  const [login,setLogin] = React.useState({
    user:"",
    email:'',
    password:''
  })
  function handleChange({target}){
    setLogin({...login, [target.id]:target.value})
  }
  return (
    <div>
    <form className={`${styles.form} animeLeft`} action="">
      <span>User</span>
      <label htmlFor="user">
        <i className="fas fa-user"></i>
        <input 
        id='user' 
        value={login.user} 
        onChange={handleChange} 
        type="text" />
      </label>
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
          id='password' 
          value={login.password} 
          onChange={handleChange} 
          type="password" />
      </label>

      <span>
        <label htmlFor='choice'>
          <input 
            type="checkbox"
            value={login.password}
            onChange={handleChange}
            id="choice" />
          I agress to Plataform <a href='*'>Terms of Services</a>
        </label>
      </span>
      <button>Entrar</button>
    </form>
  </div>
  )
}

export default Register
