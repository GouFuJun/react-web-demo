import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@routes/index";
import Banner from '@components/Banner/Banner'
const App = () => {
    return (
        <Router basename='/'>
            <Banner />
            <Routes />
        </Router>
    );
};
export default App;

