import React from 'react';
import Navbar from './Navbar';
import '../App.css';

interface LayoutProps {
    children: React.ReactNode;
    toggleSearchBar: () => void;
    isAuthenticated: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleSearchBar, isAuthenticated }) => {
    return (
        <div>
            <Navbar toggleSearchBar={toggleSearchBar} isAuthenticated={isAuthenticated} />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
