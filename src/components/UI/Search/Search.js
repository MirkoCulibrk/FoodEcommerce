import React from 'react'
import {useNavigationContext} from '../../../context/useNavigationContext';
import SearchForm from './SearchForm/SearchForm';
const Search = () => {
    const{isSearchVisible,handleSearchMobile}=useNavigationContext();
    return (
        <div className="search">
            {isSearchVisible?(
                <SearchForm></SearchForm>
            ):(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="search__icon" onClick={handleSearchMobile}><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
            )}
        </div>
    )
}

export default Search
