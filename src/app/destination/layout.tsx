'use client'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { usePathname } from 'next/navigation'
import React from 'react'

const TitleLayout = () => {
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
            spacing={8}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 9,
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
        </Stack>
    )
}

export default TitleLayout