import React from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/material'

const StyledLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <Box
                sx={{
                    position: 'absolute',
                    // all direction is 0 to set background image cover all viewport
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: {
                        xs: "url('/assets/home/background-home-mobile.jpg')",
                        sm: "url('/assets/home/background-home-tablet.jpg')",
                        md: "url('/assets/home/background-home-desktop.jpg')",
                    },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '100%',
                    minHeight: '100%',
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Navbar />
                </Box>
                <Box>{children}</Box>
            </Box>
        </Box>
    )
}

export default StyledLayout