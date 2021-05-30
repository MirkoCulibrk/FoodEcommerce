import React from 'react';
import {useNavigationContext} from '../../../context/useNavigationContext';
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu';
import {Link} from 'react-router-dom';
import './nav.scss';
const Nav = () => {
    const {isBurgerMenu}=useNavigationContext();
    return (
        <div className={`navigation__navcontainer ${isBurgerMenu?'navigation__navcontainer--rigth':''}`}>
            {isBurgerMenu?
                <BurgerMenu></BurgerMenu>
            :
                <nav className="nav" role="navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
            }
            
        </div>
    )
}

export default Nav
