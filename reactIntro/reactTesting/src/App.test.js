import React from "react";
import { render } from "@testing-library/react";
import App from "./src/App.jsx";

test("It renders without crashing", () =>{
    render(<App />)
})