import React from 'react';
import styles from './Acess.module.css';
import {Routes,Route,NavLink, Link} from 'react-router-dom'
import ECommerce from '../../../images/PNG-Zaap/E-commerce.png';
import Service from '../../../images/PNG-Zaap/Service.png';
import Shopping from '../../../images/PNG-Zaap/Shopping.png';
import Login from './Login'
import Register from './Register';
const Acess = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginArea}>
        <div className={styles.ilustration}>
          <h1>Starting to</h1>
          <div className={styles.boxImgs}>
            <div className={styles.imgLogin}>
              <img src={Service} alt="" />
            </div>
            <div className={styles.imgLogin}>
              <img src={Shopping} alt="" />
            </div>
            <div className={styles.imgLogin}>
              <img src={ECommerce} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis nesciunt autem </p>
        </div>
        <div className={styles.loginContent}>

          <div className={styles.loginOrRegister}>
            <div className={styles.change}>
              <NavLink  to="" end>Login</NavLink>
              <NavLink  to="register">Register</NavLink>
            </div>
          <div className={styles.loginIndirect}>
            <Link to="google.com">
              <i className="fab fa-google"></i>
              Google
            </Link>
            <Link to="facebook.com">
              <i className="fab fa-facebook"></i>
              Facebook
            </Link>
          </div>
            <div className={styles.division} ><p>or</p></div>
            <div className={styles.forms}>
              <Routes>
                <Route path="" element={<Login />}/>
                <Route path="register" element={<Register/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Acess
