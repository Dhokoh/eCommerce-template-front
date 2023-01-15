import NavbarHeader from './NavbarHeader.js';
import NavbarFooter from './NavbarFooter.js';
import { Outlet } from 'react-router-dom';

function UniversalContainer() {
    return(
        <>
            <NavbarHeader />
                <Outlet />
            <NavbarFooter />
        </>
    )
};

export default UniversalContainer;

