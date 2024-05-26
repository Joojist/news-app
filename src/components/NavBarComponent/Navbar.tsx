import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

interface NavbarProps {
    toggleSearchBar: () => void;
    isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSearchBar, isAuthenticated }) => {
    const dispatch = useDispatch();

    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                {isAuthenticated ? (
                    <>
                        <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
                            Logout
                        </Button>
                        <IconButton color="inherit" onClick={toggleSearchBar} className="search-icon">
                            <SearchIcon />
                        </IconButton>
                    </>
                ) : (
                    <Button variant="contained" color="secondary">
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
