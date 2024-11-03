import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import Header from "../Components/Header";

function add(){
    return 50;
}
test("It renders without Crashing", () => {
    render(<App/>)
})

test("It's adds!", () =>{
    expect(add()).toBe(50);
})

test("It renders without Crashing", () =>{
    render(<Header/>)
})