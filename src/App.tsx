
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import GlobalLayout from './components/GlobalLayout';
import Title from './components/Title';

// Lazy & Suspense Here Works Like Code Spiliting As Performance Techniques
const Dashbored = lazy(() => import('./pages/Dashbored'));
const ReduxHome = lazy(() => import('./pages/redux/ReduxHome'));
const ReduxToolKitHome = lazy(() => import('./pages/redux-toolkit/ReduxToolkitHome'));

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<GlobalLayout />}>
                    <Route index element={<><Title title='Dashbored'/><Dashbored /></>} />
                    <Route path='redux-learning' element={<><Title title='Customer App Redux' /><ReduxHome /></>} />
                    <Route path='redux-toolkit-learning' element={<><Title title='Redux Toolkit' /><ReduxToolKitHome /></>} />
                </Route>
            </Routes>
        </>
    )
};

export default AppRoutes;