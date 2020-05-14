import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Categories } from '../NavBar/Categories/Categories';
import { SearchResults } from './SearchResults/SearchResults';
export function Search(){
    return (
        <div>
            <NavBar/>
            <Categories/>
            <SearchResults/>
        </div>
    );
}