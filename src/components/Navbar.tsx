import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import '../App.css';
import { FaSearch } from 'react-icons/fa';

interface NavbarProps {
    toggleSearchBar: () => void;
    isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSearchBar, isAuthenticated }) => {
    const dispatch = useDispatch();

    return (
        <nav>
            {isAuthenticated ? (
                <>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                    <FaSearch onClick={toggleSearchBar} className="search-icon" />
                </>
            ) : (
                <button>Login</button>
            )}
        </nav>
    );
};

export default Navbar;
