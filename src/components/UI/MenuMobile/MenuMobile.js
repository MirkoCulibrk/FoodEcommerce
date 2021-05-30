import React from 'react';
import {useNavigationContext} from '../../../context/useNavigationContext';
import './menumobile.scss';
const MenuMobile = () => {
    const {isMobileMenuOpen,handleMobileMenu}=useNavigationContext();
    return (
        <div className={`overlay ${isMobileMenuOpen?'active':''}`}>
            <div className={`menumobile ${isMobileMenuOpen?'active':''}`}>
                <div className="menumobile__closecontainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={handleMobileMenu}><path d="M19.002,3h-14c-1.103,0-2,0.897-2,2v4h2V5h14v14h-14v-4h-2v4c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5 C21.002,3.897,20.104,3,19.002,3z"></path><path d="M11 16L16 12 11 8 11 11.001 3 11.001 3 13.001 11 13.001z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile
