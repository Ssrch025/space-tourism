import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { SxProps, Theme } from '@mui/material'

interface IStyledImage {
    idName: string
    src: string
    width: number
    height?: number
    sx?: SxProps<Theme>
}

const StyledImage = (props: IStyledImage) => {
    const { idName, src, width, height, sx } = props
    return (
        <Box sx={sx} >
            <Image
                src={src}
                alt={`svg-icon-${idName}`}
                width={width}
                height={height ?? width}
            />
        </Box>
    )
}

export default StyledImage