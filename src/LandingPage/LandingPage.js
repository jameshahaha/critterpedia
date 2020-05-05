import React from 'react';
import { TopNav } from './TopNav/TopNav';
import { SearchBar } from './SearchBar/SearchBar';
import logo from '../assets/critterpedia-full.png';
import styles from './LandingPage.module.css';

export function LandingPage(){
    return(
        <div>
            <TopNav/>
            <img src={logo} className={styles.logo} alt="logo"/>
            <SearchBar/>
        </div>
    );
}