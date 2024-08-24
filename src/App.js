import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar'; // Make sure the path is correct based on your file structure

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/navbar" element={<Navbar />} />
                {/* Add other routes here if necessary */}
            </Routes>
        </Router>
    );
};

export default App;
