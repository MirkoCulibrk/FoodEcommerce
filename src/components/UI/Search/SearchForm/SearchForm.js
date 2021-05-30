import React from 'react'
import '../search.scss';
const SearchForm = ({isMobile}) => {
    return (
        <form className="searchform">
            <div className={`searchform__container ${isMobile?'searchform--mobile':''}`}>
                <input type="search" placeholder="Search products"/>
                <button type="submit" className="searchform__container__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
                </button>
            </div>
        </form>
    )
}

export default SearchForm
