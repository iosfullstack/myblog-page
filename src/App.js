import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Politics from './Pages/Politics';
import Sports from './Pages/Sports';
import Business from './Pages/Business';
import Entertainment from './Pages/Entertainment';
import Science from './Pages/Science';
import Health from './Pages/Health';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/politics" element={<Politics/>} />
                <Route path="/sports" element={<Sports/>} />
                <Route path="/business" element={<Business/>} />
                <Route path="/entertainment" element={<Entertainment/>} />
                <Route path="/science" element={<Science/>} />
                <Route path="/health" element={<Health/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
    }
export default App;