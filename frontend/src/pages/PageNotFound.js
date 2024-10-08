// src/pages/PageNotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const PageNotFound = () => {
    const navigate = useNavigate();

    // Redirect after a short delay
    React.useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                textAlign: 'center'
            }}
        >
            <Typography variant="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h6" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" paragraph>
                Sorry, the page you are looking for does not exist. You will be redirected to the dashboard shortly.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go to Dashboard Now
            </Button>
        </Box>
    );
};

export default PageNotFound;
