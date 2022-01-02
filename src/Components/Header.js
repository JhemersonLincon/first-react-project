import React from "react";
import  Bio from "../images/Bio.svg";
import {NavLink} from "react-router-dom"
import styles from "./Header.module.css"

export const Header = () => {
  const [btnState, setBtnStates ] = React.useState(false);
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
      <img src={Bio} alt="Logo Bio" />
        <span>PhotoS</span> 
      </a>
      <nav>
        <button onClick={()=>setBtnStates(!btnState)} className={styles.btnMobile}>
          <span id={styles.hamburguer}></span>
        </button>
        <ul className={`${styles.menu} ${btnState && styles.active}`}>
          <li><NavLink to="/Images">Icons/Images</NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/">Contact</NavLink></li>
          <li><NavLink to="/">Log In</NavLink></li>
        </ul>
  
      </nav>
    </header>
  )
}
