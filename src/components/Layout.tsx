import React from 'react';
import Navbar from './NavBarComponent/Navbar';
import Box from '@mui/material/Box';
import '../App.css';

interface LayoutProps {
    children: React.ReactNode;
    toggleSearchBar: () => void;
    isAuthenticated: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleSearchBar, isAuthenticated }) => {
    return (
        <Box>
            <Navbar toggleSearchBar={toggleSearchBar} isAuthenticated={isAuthenticated} />
            <Box component="main">{children}</Box>
        </Box>
    );
};

export default Layout;
