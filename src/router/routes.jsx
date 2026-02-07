import { Routes, Route } from 'react-router-dom';
import Home from "../views/home";
import League from "../views/league";
import Tournament from "../views/tournament";
import Contact from "../views/contact";
import Decklist from "../views/decklist";
import NotFound from "../views/notfound";

const Router = () => (  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="leagues/:id" element={<League />} />
        <Route path="tournaments/:id" element={<Tournament />} />
        <Route path="contact" element={<Contact />} />
        <Route path="decklist" element={<Decklist />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default Router;