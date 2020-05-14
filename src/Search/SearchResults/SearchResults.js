import React from 'react';
import { NavBar } from '../../NavBar/NavBar';
import styles from './SearchResults.module.css';

export function SearchResults(){

    return(
        <div className={styles['container']}>
            <div className={styles['search-summary']}>
                <h1><strong>search term</strong> results</h1>
                <p>Showing 1-20 out of 543 results</p>
            </div>
            <div className={styles.filters}>

            <button className="button">
                <span className="icon"><i className="fas fa-sliders-h"></i></span>
                <span>Filters</span>
            </button>

            <div className="buttons has-addons">
                <button className="button is-success is-selected">
                    <span>All</span>
                </button>
                <button className="button">
                    <span className="icon"><i className="fas fa-home"></i></span>
                    <span>Villagers</span>
                </button>
                <button className="button">
                    <span className="icon"><i className="fas fa-fish"></i></span>
                    <span>Fish</span>
                </button>
                <button className="button">
                    <span className="icon"><i className="fas fa-bug"></i></span>
                    <span>Bugs</span>
                </button>
                <button className="button">
                    <span className="icon"><i className="fas fa-skull"></i></span>
                    <span>Fossils</span>
                </button>
            </div>

            <button className="button">
                <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                <span>In Season</span>
            </button>

            </div>
        </div>
    );
}