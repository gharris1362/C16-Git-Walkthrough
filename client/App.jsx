import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pizza from "./pages/Pizza.jsx";

const App = () => {
    return (
        <BrowserRouter>
        <h1>hi</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Pizza" element={<Pizza/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;