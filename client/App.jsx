import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pizza from "./pages/Pizza.jsx";
import Haylee from "./pages/Haylee.jsx";
import Haylee from './pages/Haylee';
import Hayleetwo from './pages/Hayleetwo';
import Pizza2 from "./pages/Pizza2.jsx";

const App = () => {
    return (
        <BrowserRouter>
        <h1>hi</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Pizza" element={<Pizza />}/>
                <Route path="/Haylee" element={<Haylee />} />
                <Route path="/Hayleetwo" element={<Hayleetwo />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;