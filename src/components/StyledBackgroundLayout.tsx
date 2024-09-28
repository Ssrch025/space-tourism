'use client'
import React from 'react'
import Navbar from './Navbar'
import Box from '@mui/material/Box'
import { usePathname } from 'next/navigation'

const StyledBackgroundLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname().replace('/', '')
    const validatePathname = !pathname ? 'home' : pathname

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
                        xs: `url('/assets/${validatePathname}/background-${validatePathname}-mobile.jpg')`,
                        sm: `url('/assets/${validatePathname}/background-${validatePathname}-tablet.jpg')`,
                        md: `url('/assets/${validatePathname}/background-${validatePathname}-desktop.jpg')`,
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

export default StyledBackgroundLayout