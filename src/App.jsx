import RouteLinks from "./router/routes.jsx";
import { BrowserRouter, StaticRouter } from 'react-router-dom';

const Router = typeof window !== 'undefined' ? BrowserRouter : StaticRouter;

export default function App({ url }) {
    return (
        <Router location={url}>
            <RouteLinks></RouteLinks>
        </Router>
    );
}