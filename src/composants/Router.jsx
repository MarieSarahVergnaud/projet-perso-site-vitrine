import React from 'react';
import { Routes, Route } from "react-router-dom"
import Acceuil from '../pages/Acceuil';
import Boutique from '../pages/Boutique';

const Router = () => {
    return (
       <Routes>
            <Route path="/" element={<Acceuil/>} />
            <Route path="/boutique" element={<Boutique/>} />
            {/* <Route path="/stopmotion" element={<StopMotion/>} /> */}
       </Routes>
    );
};

export default Router;