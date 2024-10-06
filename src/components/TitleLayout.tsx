'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

const topics = [
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
].map((item, index) => ({ order: index + 1, ...item }))


const TitleLayout = ({ children, hasImage }: { children: React.ReactNode; hasImage?: boolean }) => {
    const theme = useTheme()
    const tabletSize = theme.breakpoints.up(768)
    const desktopSize = theme.breakpoints.up(1024)

    const pathname = usePathname().replace('/', '')
    const selectedMenu = topics.find((item) => item.id === pathname)
    const isDestinationPage = pathname === 'destination'

    return (
        <>
            {!pathname
                ? <Box>{children}</Box>
                : <Stack
                    spacing={4}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        mt: 9,
                        mb: { xs: isDestinationPage ? 9 : 0, lg: 0 },
                        px: !hasImage ? { xs: 3, lg: 20 } : 0,
                        [desktopSize]: {
                            pl: { xs: 3, lg: 20 }
                        }
                    }}
                >
                    <Stack
                        direction='row'
                        spacing={2}
                        sx={{
                            [tabletSize]: {
                                pl: 6
                            },
                            [desktopSize]: {
                                pl: 0
                            }
                        }}
                    >
                        <Typography variant='heading5' fontWeight='bold' color='grey'>
                            {`0${selectedMenu?.order}`}
                        </Typography>
                        <Typography variant='heading5' color='space.white'>
                            {selectedMenu?.name.toUpperCase()}
                        </Typography>
                    </Stack>
                    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                        {children}
                    </Box>
                </Stack>}
        </>
    )
}

export default TitleLayout