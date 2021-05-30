import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react';
import BurgerMenu from '../BurgerMenu';
const open=false;
describe('testing burger menu',()=>{
   it('should render correcly on screen',()=>{
       render(<BurgerMenu></BurgerMenu>);
       const burgerMenu=screen.getByRole('button',{label:"open the menu"});
       expect(burgerMenu).toBeInTheDocument();
   });
   it('change state when is clicked on burger menu',()=>{
        render(<BurgerMenu></BurgerMenu>);
        const burgerMenu=screen.getByRole('button',{label:"open the menu"});
        expect(open).toBeFalsy();
        fireEvent.click(burgerMenu);
        expect(open).toBeTruthy();
        
   })
})