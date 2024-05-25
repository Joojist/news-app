import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { logout } from '../redux/slices/authSlice';
import '../App.css';

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <nav>
            {isAuthenticated ? (
                <button onClick={() => dispatch(logout())}>Logout</button>
            ) : (
                <button>Login</button>
            )}
        </nav>
    );
};

export default Navbar;
