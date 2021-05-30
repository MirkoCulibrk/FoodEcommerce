import React from 'react'
import {useNavigationContext} from '../../../context/useNavigationContext';
import './burgerMenu.scss';
const BurgerMenu = () => {
    const {handleMobileMenu}=useNavigationContext();
    return (
        <button className="burgermenu" onClick={handleMobileMenu} aria-label="open the menu">
            <span className="burgermenu__line burgermenu__line--top"></span>
            <span className="burgermenu__line"></span>
            <span className="burgermenu__line burgermenu__line--bottom"></span>
        </button>
    )
}

export default BurgerMenu
