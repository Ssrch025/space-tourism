'use client'
import { Box, useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const technologies = [
    {
        key: 'launch-vehicle',
        topic: 'Launch Vehicle',
        image: '/assets/technology/image-launch-vehicle-landscape.jpg',
        description: `A launch vehicle or carrier rocket is a rocket-propelled 
        vehicle used to carry a payload from Earth's surface to space, 
        usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. 
        Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
    },
    {
        key: 'spaceport',
        topic: 'Spaceport',
        image: '/assets/technology/image-spaceport-landscape.jpg',
        description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
        by analogy to the seaport for ships or airport for aircraft. 
        Based in the famous Cape Canaveral, 
        our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`
    },
    {
        key: 'space-capsule',
        topic: 'Space Capsule',
        image: '/assets/technology/image-space-capsule-landscape.jpg',
        description: `A space capsule is an often-crewed spacecraft that uses a blunt-body 
        reentry capsule to reenter the Earth's atmosphere without wings. 
        Our capsule is where you'll spend your time during the flight. 
        It includes a space gym, cinema, and plenty of other activities to keep you entertained.`
    },
]

const Technology = () => {
    const [technology, setTechnology] = useState<string>('launch-vehicle')
    const theme = useTheme()
    const selectedTech = technologies.find((item) => item.key === technology)
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
                    src={selectedTech?.image as string}
                    alt={`svg-icon-technology`}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <StyledStepper steps={technologies.map((tech) => tech.key)} setTechnology={setTechnology} />
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

export default Technology

interface IStyledStepper {
    steps: string[]
    setTechnology: (state: string) => void
}

const StyledStepper = (props: IStyledStepper) => {
    const { steps, setTechnology } = props
    const theme = useTheme()
    const [activeStep, setActiveStep] = useState<number>(0)
    const totalSteps = steps.length
    const tabletSize = theme.breakpoints.up(768)

    const handleStep = (step: number) => () => {
        setActiveStep(step)
        setTechnology(steps[step])
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % totalSteps)
        }, 10000)

        return () => clearInterval(timer)
    }, [totalSteps])

    useEffect(() => {
        setTechnology(steps[activeStep])
    }, [activeStep])

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Stepper
                nonLinear
                connector={null}
                activeStep={activeStep}
                sx={{
                    '.MuiSvgIcon-root': {
                        // '& .MuiStepIcon-text': {
                        //     color: 'black',
                        // },
                        '&.MuiStepIcon-root': {
                            width: '40px',
                            [tabletSize]: {
                                width: '60px'
                            }
                            // color: 'rgba(255, 255, 255, 0)',
                            // '&.Mui-active': {
                            //     color: 'space.white',
                            // }
                        },

                    }
                }}
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton color="inherit" onClick={handleStep(index)} />
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}