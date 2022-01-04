import React from "react";
import  Bio from "../images/Bio.svg";
import {Link,NavLink} from "react-router-dom"
import styles from "./Header.module.css"

export const Header = () => {
  const [btnState, setBtnStates ] = React.useState(false);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}  href="/">
      <img src={Bio} alt="Logo Bio" />
        <span>PhotoS</span> 
      </Link>
      <nav>
        <button onClick={()=>setBtnStates(!btnState)} className={styles.btnMobile}>
          <span id={styles.hamburguer}></span>
        </button>
        <ul className={`${styles.menu} ${btnState && styles.active}`}>
          
          <li onClick={()=>setBtnStates(!btnState)} >
            <NavLink to="/images">Icons | Images</NavLink>
          </li>

          <li onClick={()=>setBtnStates(!btnState)}>
            <NavLink to="/about">About</NavLink>
          </li>

          <li onClick={()=>setBtnStates(!btnState)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li onClick={()=>setBtnStates(!btnState)}>
            <NavLink to="/acess/login">Log In</NavLink>
          </li>
        </ul>  
      </nav>
    </header>
  )
}
