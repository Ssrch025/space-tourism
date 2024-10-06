'use client'
import StyledStepper from '@/components/StyledStepper'
import { useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { useState } from 'react'

interface ITechnology {
    key: string
    topic: string
    landscape: string
    portrait: string
    description: string
}

const technologies: ITechnology[] = [
    {
        key: 'launch-vehicle',
        topic: 'Launch Vehicle',
        landscape: '/assets/technology/image-launch-vehicle-landscape.jpg',
        portrait: '/assets/technology/image-launch-vehicle-portrait.jpg',
        description: `A launch vehicle or carrier rocket is a rocket-propelled 
        vehicle used to carry a payload from Earth's surface to space, 
        usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. 
        Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
    },
    {
        key: 'spaceport',
        topic: 'Spaceport',
        landscape: '/assets/technology/image-spaceport-landscape.jpg',
        portrait: '/assets/technology/image-spaceport-portrait.jpg',
        description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
        by analogy to the seaport for ships or airport for aircraft. 
        Based in the famous Cape Canaveral, 
        our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`
    },
    {
        key: 'space-capsule',
        topic: 'Space Capsule',
        landscape: '/assets/technology/image-space-capsule-landscape.jpg',
        portrait: '/assets/technology/image-space-capsule-portrait.jpg',
        description: `A space capsule is an often-crewed spacecraft that uses a blunt-body 
        reentry capsule to reenter the Earth's atmosphere without wings. 
        Our capsule is where you'll spend your time during the flight. 
        It includes a space gym, cinema, and plenty of other activities to keep you entertained.`
    },
]

const Technology = () => {
    const [technology, setTechnology] = useState<string>('launch-vehicle')
    const theme = useTheme()
    const selectedTech = technologies.find((item) => item.key === technology) as ITechnology
    const isDesktopSize = useMediaQuery(theme.breakpoints.up(1024))

    return (
        <Box width='100%'>
            {!isDesktopSize
                ? <TechnologyMobileSize
                    technology={technology}
                    selectedTech={selectedTech}
                    setTechnology={setTechnology}
                />
                : <TechnologyDesktopSize
                    technology={technology}
                    selectedTech={selectedTech}
                    setTechnology={setTechnology}
                />
            }
        </Box>

    )
}

export default Technology

interface ITechnologyMobileSize {
    selectedTech: ITechnology
    technology: string
    setTechnology: (state: string) => void
}

const TechnologyMobileSize = (props: ITechnologyMobileSize) => {
    const { selectedTech, technology, setTechnology } = props
    const theme = useTheme()
    const tabletSize = theme.breakpoints.up(768)

    return (
        <Stack spacing={4}>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '170px',
                    [tabletSize]: {
                        minHeight: '300px',
                    }
                }}>
                <Image
                    src={selectedTech?.landscape}
                    alt={`svg-icon-${selectedTech?.key}`}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Box>
            <StyledStepper
                steps={technologies.map((tech) => tech.key)}
                direction='row'
                technology={technology}
                setTechnology={setTechnology}
            />
            <Stack
                spacing={2}
                sx={{
                    textAlign: 'center',
                    px: 3,
                    [tabletSize]: {
                        px: 18,
                    }
                }}
            >
                <Stack spacing={1}>
                    <Typography variant='subheading2' color='space.purple'>
                        {'the terminology'.toUpperCase()}
                    </Typography>
                    <Typography variant='heading3' color='space.white'>
                        {selectedTech?.topic.toUpperCase()}
                    </Typography>
                </Stack>
                <Typography variant='bodytext' color='space.purple'>
                    {selectedTech?.description}
                </Typography>
            </Stack>
        </Stack>
    )
}

interface ITechnologyDesktopSize {
    selectedTech: ITechnology
    technology: string
    setTechnology: (state: string) => void
}

const TechnologyDesktopSize = (props: ITechnologyDesktopSize) => {
    const { selectedTech, technology, setTechnology } = props

    return (
        <Stack
            spacing={4}
            direction='row'
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 4
            }}
        >
            <Stack
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}
            >
                <StyledStepper
                    steps={technologies.map((tech) => tech.key)}
                    direction='column'
                    technology={technology}
                    setTechnology={setTechnology}
                />
                <Stack spacing={1}>
                    <Typography variant='navtext' color='space.purple'>
                        {'the terminology'.toUpperCase()}
                    </Typography>
                    <Typography variant='heading3' color='space.white'>
                        {selectedTech?.topic.toUpperCase()}
                    </Typography>
                    <Typography variant='bodytext' color='space.purple' sx={{ width: '70%' }}>
                        {selectedTech?.description}
                    </Typography>
                </Stack>
            </Stack>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '170px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                <Image
                    src={selectedTech?.portrait}
                    alt={`svg-icon-${selectedTech?.key}`}
                    width={500}
                    height={500}
                />
            </Box>
        </Stack>
    )
}