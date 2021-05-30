import React from "react";
import {render,screen} from "@testing-library/react";
import Logo from "../Logo";
describe("testing logo component",()=>{
    test("It should render logo image",()=>{
        render(<Logo></Logo>);
        const logo=screen.getByAltText(/logo/i);
        expect(logo).toBeInTheDocument();

    });
});
