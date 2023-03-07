import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Clients from './pages/clients/Clients'
import Services from './pages/services/Services';
import Orders from './pages/orders/Orders'
import Results from "./pages/results/Results"


const Routers = (props) => {
    return (
        <Routes>
            <Route to={'/'} element={<Home />} />
            <Route to={'/orders'} element={<Orders />} />
            <Route to={'/services'} element={<Services jobs={props.jobs}/>} />
            <Route to={'/clients'} element={<Clients />} />
            <Route to={'/results'} element={<Results />} />
        </Routes>
    );
};

export default Routers;