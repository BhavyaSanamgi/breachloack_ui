import React from 'react'

import { Container, Box } from '@mui/material'

import NavBar from '../navbar'

const Wrapper = ({ children }) => {
    const accessToken = localStorage.getItem('accessToken')
    const isAuthenticated = !!accessToken
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ padding: '0', width: '100%', height: '100%' }}
        >
            <Box
                sx={{
                    fontFamily: 'Poppins',
                    backgroundColor: isAuthenticated ? '#f2f2f8' : 'white',
                }}
            >
                <NavBar isLoggedIn={isAuthenticated} />
                <Box sx={{ paddingTop: '80px' }}>{children}</Box>
            </Box>
        </Container>
    )
}

export default Wrapper
