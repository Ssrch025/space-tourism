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
                alignItems: {xs: 'center', sm: 'flex-start'},
                mt: 9,
                mb: 7.25,
            }}
        >
            <Stack direction='row' spacing={2}>
                <Typography variant='heading5' fontWeight='bold' color='grey'>
                    {`0${topic?.order}`}
                </Typography>
                <Typography variant='heading5' color='space.white'>
                    {topic?.name.toUpperCase()}
                </Typography>
            </Stack>
            <Box>
                {children}
            </Box>
        </Stack>
    )
}

export default TitleLayout