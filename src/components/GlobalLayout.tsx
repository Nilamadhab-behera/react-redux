import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const GlobalLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default GlobalLayout;