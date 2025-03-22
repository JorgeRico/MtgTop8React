import { ApiProvider } from './context/api-context';
import Home from "./views/home"
import League from "./views/league"
import Tournament from "./views/tournament"
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  } from 'react-router-dom';
import { MobileProvider } from 'context/mobile-context';

export default function App() {
    return (
        <MobileProvider>
            <ApiProvider>
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
                    </Routes>
                </BrowserRouter>
            </ApiProvider>
        </MobileProvider>
    );
}