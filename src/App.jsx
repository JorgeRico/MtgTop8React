import { ApiProvider } from './context/api-context';
import * as React from 'react';
import { CheckBotProvider } from './context/bot-context';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Router from "./router/routes.jsx";

export default function App() {
    return (
        <CheckBotProvider>
            <ApiProvider>
                <HelmetProvider>
                    <Router></Router>
                </HelmetProvider>
            </ApiProvider>
        </CheckBotProvider>
    );
}