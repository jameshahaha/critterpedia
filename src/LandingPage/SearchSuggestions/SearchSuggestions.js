import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions(){
    return(
        <div className={`${styles['suggestions']}`}>
            <span className="icon"><i className="fas fa-home"></i></span><span className={styles.suggestion}>Villagers</span>
            <span className="icon"><i className="fas fa-fish"></i></span><span className={styles.suggestion}>Fish</span>
            <span className="icon"><i className="fas fa-bug"></i></span><span className={styles.suggestion}>Bugs</span>
            <span className="icon"><i className="fas fa-skull"></i></span><span className={styles.suggestion}>Fossils</span>
        </div>
    );
}