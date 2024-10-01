'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import { Theme, useMediaQuery, useTheme } from '@mui/material'

import StyledTab from './StyledTab'
import StyledImage from './StyledImage'
import StyledDrawer from './StyledDrawer'

import { IOptions } from '@/models/utility'

const menus = [
    {
        key: 'home',
        path: '/home',
    },
    {
        key: 'destination',
        path: '/destination',
    },
    {
        key: 'crew',
        path: '/crew'
    },
    {
        key: 'technology',
        path: '/technology'
    },
]

const options: IOptions[] = menus.map((item) => ({
    key: item.key.toUpperCase(),
    value: item.key,
    path: item.path,
}))

const Navbar = () => {
    const theme = useTheme()
    const router = useRouter()
    const pathname = usePathname().replace('/', '')
    const validatePathname = !pathname ? 'home' : pathname
    const xs = theme.breakpoints.down('xs')
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

    const [selectedMenu, setSelectedMenu] = useState<string>(validatePathname)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (e: any) => {
        const value = e.currentTarget.value
        e.stopPropagation()
        setSelectedMenu(value)
        value === 'home'
            ? router.push('/')
            : router.push(`/${value}`)
    }

    useEffect(() => {
        setSelectedMenu(validatePathname)
    }, [validatePathname])

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
                        paddingLeft: 5,
                        paddingRight: 5,
                        [theme.breakpoints.up(1024)]: {
                            paddingLeft: 15,
                            paddingRight: 22,
                        },
                    }}
                >
                    <StyledTab
                        hasId
                        type='navbar'
                        tabs={menus.map((item) => item.key)}
                        selectedMenu={selectedMenu}
                        handleClick={handleClick}
                    />
                </Box>
                : <IconButton
                    onClick={() => setIsOpen(true)}
                    sx={{
                        marginRight: 3,
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
                    }}
                >
                    <StyledImage
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