'use client'
import React, { useState } from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Theme, useMediaQuery, useTheme } from '@mui/material'

const menus = [
    {
        id: 'home',
        path: '/home',
    },
    {
        id: 'destination',
        path: '/destination',
    },
    {
        id: 'crew',
        path: '/crew'
    },
    {
        id: 'technology',
        path: '/technology'
    },
]

const Navbar = () => {
    const theme = useTheme()
    const xs = theme.breakpoints.down('xs')
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

    const [selectedItem, setSelectedItem] = useState<string>('home')

    const handleClick = (e: any) => {
        const value = e.currentTarget.value
        e.stopPropagation()
        setSelectedItem(value)
    }

    const setSelectedColor = (menuId: string, type: 'normal' | 'hover') => {
        const isHover = type === 'hover'
        if (selectedItem === menuId) {
            return 'rgba(255, 255, 255, 1)'
        } else {
            return isHover ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)'
        }
    }

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Box paddingLeft={{ xs: '24px', sm: '39px', md: '55px' }}>
                <Image
                    alt='navbar-icon'
                    src={'/assets/shared/logo.svg'}
                    width={xs ? 40 : 48}
                    height={xs ? 40 : 48}
                />
            </Box>
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    paddingLeft: { xs: 5, md: 15 },
                    paddingRight: { xs: 5, md: 22 },
                }}
            >
                <Stack direction='row' spacing={{ sm: 4, md: 6 }} >
                    {menus.map((item, index) => {
                        const menuId = `0${index}`
                        return (
                            <Button
                                key={item.id}
                                variant='text'
                                value={item.id}
                                sx={{
                                    color: 'space.white',
                                    paddingY: 4,
                                    borderRadius: 0,
                                    borderBottom: `3px solid ${setSelectedColor(item.id, 'normal')}`,
                                    pointerEvents: 'auto',
                                    '&:hover': {
                                        borderBottom: `3px solid ${setSelectedColor(item.id, 'hover')}`,
                                    }
                                }}
                                onClick={handleClick}
                            >
                                <Stack
                                    direction='row'
                                    spacing={1}
                                    sx={{ pointerEvents: 'none' }}
                                >
                                    {isMdUp && <Typography variant='subheading2' fontWeight='bold'>
                                        {menuId}
                                    </Typography>}
                                    <Typography variant='subheading2'>
                                        {item.id}
                                    </Typography>
                                </Stack>
                            </Button>
                        )
                    })}
                </Stack>
            </Box>
        </Stack>
    )
}

export default Navbar