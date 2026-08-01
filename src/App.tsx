
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import GlobalLayout from './components/GlobalLayout';

// Lazy & Suspense Here Works Like Code Spiliting As Performance Techniques
const Dashbored = lazy(() => import('./pages/Dashbored'));
const ReduxHome = lazy(() => import('./pages/ReduxHome'));

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<GlobalLayout />}>
                    <Route index element={<Dashbored />} />
                    <Route path='redux-learning' element={<ReduxHome />} />
                </Route>
            </Routes>
        </>
    )
};

export default AppRoutes;