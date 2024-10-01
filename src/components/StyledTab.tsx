import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SxProps, Theme, useMediaQuery } from '@mui/material'

interface IStyledTab {
    tabs: string[]
    type: 'navbar' | 'tab'
    selectedMenu: string
    handleClick: (e: any) => void
    hasId?: boolean
    sx?: SxProps<Theme>
}

const StyledTab = (props: IStyledTab) => {
    const { tabs, type, selectedMenu, sx, hasId, handleClick } = props
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
    const isTab = type === 'tab'

    const setSelectedColor = (selectedMenu: string, menuId: string, type: 'normal' | 'hover') => {
        const isHover = type === 'hover'
        if (selectedMenu === menuId) {
            return 'rgba(255, 255, 255, 1)'
        } else {
            return isHover ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)'
        }
    }

    return (
        <Stack direction='row'>
            {tabs.map((item, index) => {
                const menuId = `0${index}`
                return (
                    <Button
                        key={item}
                        variant='text'
                        value={item}
                        sx={{
                            color: (isTab && selectedMenu === item) || !isTab
                                ? 'space.white'
                                : 'space.purple',
                            paddingX: { sm: 3, md: 4 },
                            paddingY: 4,
                            borderRadius: 0,
                            borderBottom: `3px solid ${setSelectedColor(selectedMenu, item, 'normal')}`,
                            pointerEvents: 'auto',
                            '&:hover': {
                                borderBottom: `3px solid ${setSelectedColor(selectedMenu, item, 'hover')}`,
                            },
                            ...sx,
                        }}
                        onClick={handleClick}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                            sx={{ pointerEvents: 'none' }}
                        >
                            {(isMdUp && hasId) &&
                                <Typography variant='subheading2' fontWeight='bold' >
                                    {menuId}
                                </Typography>}
                            <Typography variant='subheading2'>
                                {item.toUpperCase()}
                            </Typography>
                        </Stack>
                    </Button>
                )
            })}
        </Stack>
    )
}

export default StyledTab