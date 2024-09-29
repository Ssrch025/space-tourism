import React from 'react' 
import Image from 'next/image'

interface IStyledImage {
    idName: string
    src: string
    width: number
    height?: number
    responsiveSize?: () => number
}

const StyledImage = (props: IStyledImage) => {
    const { idName, src, width, height, responsiveSize } = props
    return (
        <Image
            src={src}
            alt={`svg-icon-${idName}`}
            width={width}
            height={height ?? width}
            style={{
              width: !responsiveSize ? width : responsiveSize(),
              height: 'auto',
            }}
        />
    )
}

export default StyledImage