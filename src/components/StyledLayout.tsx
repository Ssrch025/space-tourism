import React from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/material'

const StyledLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Box
                sx={{
                    position: 'absolute',
                    backgroundImage: {
                        xs: "url('/assets/home/background-home-mobile.jpg')",
                        sm: "url('/assets/home/background-home-tablet.jpg')",
                        md: "url('/assets/home/background-home-desktop.jpg')",
                    },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                }}
            />
            <Box sx={{ position: 'absolute', width: '100%', marginTop: { xs: 0, md: 4 } }}>
                <Navbar />
                <div>
                    {children}
                </div>
            </Box>
        </Box>
    )
}

export default StyledLayout