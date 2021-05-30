import React from 'react'
import {useNavigationContext} from '../../../context/useNavigationContext';
import SearchForm from '../Search/SearchForm/SearchForm';
import './searchModal.scss';
const SearchModal = () => {
    const {isSearchMenuOpen,handleSearchMobile}=useNavigationContext();
    return (
        <div className={`overlay ${isSearchMenuOpen?'active':''}`} >
            <div className={`searchmodal ${isSearchMenuOpen?'active':''}`}>
                <div className="searchmodal__body">
                    <SearchForm isMobile></SearchForm>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={handleSearchMobile}><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path></svg>
                </div>
            </div> 
        </div>
    )
}

export default SearchModal
