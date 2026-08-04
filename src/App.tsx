
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import GlobalLayout from './components/GlobalLayout';
import Title from './components/Title';
import Users from './pages/User';

// Lazy & Suspense Here Works Like Code Spiliting As Performance Techniques
const Dashbored = lazy(() => import('./pages/Dashbored'));
const ReduxHome = lazy(() => import('./pages/redux/ReduxHome'));

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<GlobalLayout />}>
                    <Route index element={<><Title title='Dashbored' /><Dashbored /></>} />
                    <Route path='redux-learning' element={<><Title title='Customer App Redux' /><ReduxHome /></>} />
                    <Route path='redux-thunk' element={<><Title title='Redux Thunk' /><Users /></>} />
                </Route>
            </Routes>
        </>
    )
};

export default AppRoutes;