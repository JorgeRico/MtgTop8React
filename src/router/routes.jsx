import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../views/home";
import League from "../views/league";
import Tournament from "../views/tournament";
import Contact from "../views/contact";

const Router = () => (
    <BrowserRouter
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}
    >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="leagues/:id" element={<League />} />
            <Route path="tournaments/:id" element={<Tournament />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
);

export default Router;