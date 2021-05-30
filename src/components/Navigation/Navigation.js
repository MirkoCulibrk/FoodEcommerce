import React,{useStata,useEffect} from 'react'
import Logo from '../UI/Logo/Logo';
import Icon from '../UI/NavbarIcon/NavbarIcon';
import './navigation.scss';
import Nav from './Nav/Nav';
import Search from '../UI/Search/Search';
const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <Logo></Logo>
                <div className="navigation--rigth">
                    <Nav></Nav>
                    <div className="navigation__icons">
                        <Search></Search>
                        <Icon type="user"></Icon>
                        <Icon type="heart"></Icon>  
                        <Icon type="cart"></Icon>  
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navigation
