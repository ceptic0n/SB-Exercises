import React from "react";
import { render } from "@testing-library/react";
import Dog from "../Components/Dog";

it("should render", () => {
    expect(<Dog name="Rusty" isAdopted={true}/>);
})

it("Should match snapshop", () =>{
    const { asFragment } = render(<Dog name="Rusty" isAdopted={true}/>);
    expect(asFragment()).toMatchSnapshot();
})