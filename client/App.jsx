import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pizza from "./pages/Pizza.jsx";
import Haylee from "./pages/Haylee.jsx";
import Haylee from './pages/Haylee';
import Hayleetwo from './pages/Hayleetwo';

const App = () => {
    return (
        <BrowserRouter>
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