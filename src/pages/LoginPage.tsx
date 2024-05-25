import React from 'react';
import Login from '../components/Login';
import '../App.css';

const LoginPage: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login/>
            <p>Don't have an API token? Get one <a href="https://newsapi.org/register" target="_blank"
                                                   rel="noopener noreferrer">here</a>.</p>
        </div>
    );
};

export default LoginPage;
