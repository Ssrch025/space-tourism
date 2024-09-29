'use client'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { usePathname } from 'next/navigation'
import React from 'react'
import Box from '@mui/material/Box'

const TitleLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname().replace('/', '')

    const topic = [
        {
            id: 'destination',
            name: 'pick your destination'
        },
        {
            id: 'crew',
            name: 'meet your crew',
        },
        {
            id: 'technology',
            name: 'space launch 101',
        },
    ]
        .map((item, index) => ({ order: index + 1, ...item }))
        .find((item) => item.id === pathname)

    return (
        <Stack
            spacing={4}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: { xs: 'center', sm: 'flex-start' },
                mt: 9,
                mb: { xs: 7.25, sm: 0 },
                px: { xs: 2, md: 20 }
            }}
        >
            <Stack
                direction='row'
                spacing={2}
                pl={{ xs: 0, sm: 6, md: 7.75 }}
            >
                <Typography variant='heading5' fontWeight='bold' color='grey'>
                    {`0${topic?.order}`}
                </Typography>
                <Typography variant='heading5' color='space.white'>
                    {topic?.name.toUpperCase()}
                </Typography>
            </Stack>
            <Box sx={{ width: '100%' }}>
                {children}
            </Box>
        </Stack>
    )
}

export default TitleLayout