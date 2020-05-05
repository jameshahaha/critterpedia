import React from 'react';
import styles from './SearchBar.module.css';

export function SearchBar() {
    return(
        <div>
            <div className="field has-addons">
                <div className="control">
                    <div className="select is-medium">
                    <select name="category">
                        <option value="Villagers">Villagers</option>
                        <option value="Fish">Fish</option>
                        <option value="Bugs">Bugs</option>
                        <option value="Fossils">Fossils</option>
                    </select>
                    </div>
                </div>
                <p className="control">
                    <button className="button is-static is-medium">Name</button>
                </p>
                <p className="control">
                    <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Marshal, Peacock Butterfly, Stego Skull..."/>
                </p>
                <div className="button is-medium">
                    <span className="icon"><i className="fas fa-search"></i></span>
                </div>
            </div>
        </div>
    );
}