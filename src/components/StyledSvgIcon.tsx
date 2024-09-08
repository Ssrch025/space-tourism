import React from 'react' 
import Image from 'next/image'

interface IStyledSvgIcon {
    idName: string
    src: string
    width: number
    height?: number
}

const StyledSvgIcon = (props: IStyledSvgIcon) => {
    const { idName, src, width, height } = props
    return (
        <Image
            src={src}
            alt={`svg-icon-${idName}`}
            width={width}
            height={height || width}
        />
    )
}

export default StyledSvgIcon