import React,{createContext,useContext,useState} from 'react';
import { useMediaQuery } from 'react-responsive';
//context for navigation 
export const NavigationContext=createContext();

export const NavigationContextProvider=(props)=>{
    //state for mobilemenu
    const [isMobileMenuOpen,setIsMobileMenu]=useState(false);

    //state for search modal on mobile
    const [isSearchMenuOpen,setIsSearchMenuOpen]=useState(false);

    //open/close mobile menu
    const handleMobileMenu=()=>{
        setIsMobileMenu(prevState=>!prevState);
    }

    //open search menu for mobile
    const handleSearchMobile=()=>{
        setIsSearchMenuOpen(prevState=>!prevState);
    }

    //small device to check for diffrent navs
    //mobile and tablet-> burger menu, computer regular menu
    const isBurgerMenu=useMediaQuery({
        query: '(max-device-width: 1200px)'
      });

    //check for bigger device for showing search bar on tablet and computer
    //to see full width of search
    const isSearchVisible=useMediaQuery({
        query: '(min-device-width: 786px)'
    });

    //shared state for children
    const sharedState={
        isSearchVisible,
        isBurgerMenu,
        isMobileMenuOpen,
        handleMobileMenu,
        isSearchMenuOpen,
        handleSearchMobile

    };
    return (
        
        <NavigationContext.Provider value={sharedState}>
            {props.children}
        </NavigationContext.Provider>
    )
}
//retured value object 
export const useNavigationContext=()=>{
    return useContext(NavigationContext);
}