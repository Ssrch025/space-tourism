import React from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ListItemButton from '@mui/material/ListItemButton'

import StyledSvgIcon from './StyledSvgIcon'

import { IOptions } from '@/models/utility'
import { useRouter } from 'next/navigation'

interface IStyledDrawer {
    isOpen: boolean
    options: IOptions[]
    onClose: () => void
}

const StyledDrawer = (props: IStyledDrawer) => {
    const { isOpen, options, onClose } = props
    const router = useRouter()

    const handleClick = (menu: string) => {
        menu === 'home'
            ? router.push('/')
            : router.push(`/${menu}`)
    }

    return (
        <Drawer
            anchor='right'
            open={isOpen}
            onClose={onClose}
            sx={{
                '.MuiDrawer-paper': {
                    color: 'space.white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                },
                '.MuiModal-backdrop': {
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                },
            }}
        >
            <Box onClick={onClose} sx={{ width: 250 }} >
                <Box
                    display='flex'
                    justifyContent='flex-end'
                    marginTop={2}
                    marginX={2}
                >
                    <IconButton
                        onClick={onClose}
                        sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
                    >
                        <StyledSvgIcon
                            idName='close'
                            src='/assets/shared/icon-close.svg'
                            width={19}
                            height={19}
                        />
                    </IconButton>
                </Box>
                <List>
                    {options.map((item, index) => {
                        const menuId = `0${index}`
                        return (
                            <ListItem key={item.key} disablePadding>
                                <ListItemButton
                                    onClick={() => handleClick(item.value)}
                                    sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
                                >
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                        sx={{ pointerEvents: 'none', paddingY: 2 }}
                                    >
                                        <Typography variant='subheading2' fontWeight='bold'>
                                            {menuId}
                                        </Typography>
                                        <Typography variant='subheading2'>
                                            {item.key}
                                        </Typography>
                                    </Stack>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Drawer >
    )
}

export default StyledDrawer