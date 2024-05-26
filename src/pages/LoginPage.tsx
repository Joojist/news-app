import React from 'react';
import Login from '../components/LoginComponent/Login';
import { Container, Box, Typography, Link } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import '../components/LoginComponent/Login.css';

const LoginPage: React.FC = () => {
    return (
        <Container component="main" maxWidth="lg" className="login-container">
            <Box className="login-box">
                <Login />
                <Typography variant="body2" color="textSecondary" className="login-link">
                    Don't have an API token? Get one{' '}
                    <Link href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer">
                        here
                    </Link>.
                </Typography>
            </Box>
            <Box className="news-logo">
                <NewspaperIcon style={{ fontSize: '100%', color: '#007BFF', width: '100%', height: '100%' }} />
            </Box>
        </Container>
    );
};

export default LoginPage;
