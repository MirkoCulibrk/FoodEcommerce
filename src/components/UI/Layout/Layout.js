import React from 'react'
import Navigation from '../../Navigation/Navigation';
import {NavigationContextProvider} from '../../../context/useNavigationContext';
import MenuMobile from '../MenuMobile/MenuMobile';
import SearchModal from '../SearchModal/SearchModal';
const Layout = (props) => {

    return (
        <>
            {/* navigation */}
            <NavigationContextProvider>
                <MenuMobile></MenuMobile>
                <SearchModal></SearchModal>
                <Navigation></Navigation>
            </NavigationContextProvider>
            {/* main content of the page */}
            <main>
                {props.children}
            </main>
            {/* footer */}
        </>
    )
}

export default Layout
