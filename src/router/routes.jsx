import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingLayout from "../views/layout/loading";

const Home       = lazy(() => import("../views/home"));
const League     = lazy(() => import("../views/league"));
const Tournament = lazy(() => import("../views/tournament"));
const Contact    = lazy(() => import("../views/contact"));
const Decklist   = lazy(() => import("../views/decklist"));
const NotFound   = lazy(() => import("../views/notfound"));

const Router = () => (  
    <Suspense fallback={<LoadingLayout name="loading"><p>Loading data . . .</p></LoadingLayout>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="leagues/:id" element={<League />} />
            <Route path="tournaments/:id" element={<Tournament />} />
            <Route path="contact" element={<Contact />} />
            <Route path="decklist" element={<Decklist />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default Router;