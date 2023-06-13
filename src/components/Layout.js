import React from 'react';
import {Link, Outlet} from "react-router-dom";


export function Layout(){
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Outlet />
        </>
    );
}
export default Layout;