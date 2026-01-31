import { ApiProvider } from './context/api-context';
import * as React from 'react';
import { CheckBotProvider } from './context/bot-context';
import Router from "./router/routes.jsx";

export default function App() {
    return (
        <CheckBotProvider>
            <ApiProvider>
                <Router></Router>
            </ApiProvider>
        </CheckBotProvider>
    );
}