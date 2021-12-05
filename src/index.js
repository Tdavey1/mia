import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home/Home";
import Gallery from "./gallery/gallery";
import Sidebar from "./navbar/navbar"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="App">
                <h1>Hello World</h1>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);