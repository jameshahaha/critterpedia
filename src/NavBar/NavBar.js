import React from 'react';
import logo from '../assets/alt-logo.png';
import styles from '../NavBar/NavBar.module.css';
import {SearchBar} from '../SearchBar/SearchBar';
export function NavBar(){
    return(
        <div className={styles['nav-bar']}>
            <img className={styles['logo']} src={logo} alt="critterpedia logo"/>
            <SearchBar small/>
            {/* <button className={`button ${styles['left-button']}`}>Sign In</button>
            <button className={`button ${styles['right-button']}`}>Register</button>
             */}
        </div>
    );
}