import React from "react";
import {CategoryItem} from "./CategoryItem/CategoryItem";
import styles from "./Categories.module.css";
export function Categories(){
    return(
        <div className={styles['container']}>
            <div className={styles['categories']}>
                <div>
                    <CategoryItem label='Villagers' icon="fa-home"/>
                    <CategoryItem label='Collectibles' icon="fa-briefcase"/>
                    <CategoryItem label='Monthly Catalogue' icon="fa-calendar-alt"/>
                    <CategoryItem label='More' icon="fa-plus-circle" showRightBorder/>
                </div>
                <div>    
                    {/* <button className={`button ${styles['category-button']} ${styles['omit-right-border']}`}>
                        <span class="icon"><i className="fas fa-pen"></i></span>
                        <span>Login</span>
                    </button>
                    <button className={`button ${styles['category-button']}`}>
                            <span class="icon"><i className="fas fa-plus"></i></span>
                            <span>Sign Up</span>
                    </button> */}
                </div>
            </div>
        </div>
    );
}