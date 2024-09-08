'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Theme, useMediaQuery, useTheme } from '@mui/material'

import StyledSvgIcon from './StyledSvgIcon'
import StyledDrawer from './StyledDrawer'

import { IOptions } from '@/models/utility'

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

const options: IOptions[] = menus.map((item) => ({
    key: item.id.toUpperCase(),
    value: item.id,
    path: item.path,
}))

const Navbar = () => {
    const theme = useTheme()
    const xs = theme.breakpoints.down('xs')
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

    const [selectedItem, setSelectedItem] = useState<string>('home')
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
        <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            paddingTop={{ xs: 3, md: 0 }}
        >
            <Box
                sx={{
                    width: '40px',
                    height: '40px',
                    marginLeft: { xs: 3, sm: 5, md: 6.75 },
                }}
            >
                <Image
                    alt='navbar-icon'
                    src={'/assets/shared/logo.svg'}
                    width={xs ? 40 : 48}
                    height={xs ? 40 : 48}
                />
            </Box>
            {isSmUp
                ? <Box
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
                                            {item.id.toUpperCase()}
                                        </Typography>
                                    </Stack>
                                </Button>
                            )
                        })}
                    </Stack>
                </Box>
                : <IconButton
                    onClick={() => setIsOpen(true)}
                    sx={{
                        marginRight: 3,
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
                    }}
                >
                    <StyledSvgIcon
                        idName='hamburger-menu'
                        src='/assets/shared/icon-hamburger.svg'
                        width={24}
                        height={24}
                    />
                </IconButton>
            }
            <StyledDrawer
                isOpen={isOpen}
                options={options}
                onClose={() => setIsOpen(false)}
            />
        </Stack>
    )
}

export default Navbar