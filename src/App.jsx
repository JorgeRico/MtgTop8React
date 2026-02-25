// import { CheckBotProvider } from './context/bot-context';
import Router from "./router/routes.jsx";
import { BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Router></Router>
        </BrowserRouter>
    );
}