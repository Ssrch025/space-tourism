'use client'
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

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
    const [selectedItem, setSelectedItem] = useState<string>('')

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
            <Box paddingX='55px'>
                <Image
                    alt='navbar-icon'
                    src={'/assets/shared/logo.svg'}
                    width={48}
                    height={48}
                />
            </Box>
            <Box sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                paddingLeft: '120px',
                paddingRight: '170px',
            }}
            >
                <Stack direction='row' spacing={6} >
                    {menus.map((item, index) => {
                        const menuId = `0${index}`
                        return (
                            <Button
                                key={item.id}
                                variant='text'
                                value={item.id}
                                sx={{
                                    color: 'space.white',
                                    paddingY: '25px',
                                    borderRadius: '0px',
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
                                    spacing={2}
                                    sx={{ pointerEvents: 'none' }}
                                >
                                    <Typography variant='subheading2' fontWeight='bold'>
                                        {menuId}
                                    </Typography>
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