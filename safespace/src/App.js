import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Profile from './Components/Profile/Profile.tsx'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/home" element={<HomePage />} />
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </Router>
    );
}

export default App;
