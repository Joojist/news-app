import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, token }));
    };

    return (
        <Container maxWidth="xs" className="login-container">
            <Box component="form" onSubmit={handleSubmit} className="login-form">
                <Typography variant="h4" component="h1" gutterBottom className="login-title">
                    Login
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="token"
                    label="API Token"
                    type="text"
                    id="token"
                    autoComplete="current-token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className="login-button"
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;