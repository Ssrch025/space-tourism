'use client'
import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import StyledImage from '@/components/StyledImage'
import { useMediaQuery, useTheme } from '@mui/material'

const crews = [
  {
    position: 'Commander',
    name: 'Douglas Hurley',
    image: '/assets/crew/image-douglas-hurley.png',
    width: { mobile: 170, tablet: 400 },
    description: `Douglas Gerald Hurley is an American engineer, 
    former Marine Corps pilot and former NASA astronaut. 
    He launched into space for the third time as commander of Crew Dragon Demo-2.`
  },
  {
    position: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    image: '/assets/crew/image-mark-shuttleworth.png',
    width: { mobile: 190, tablet: 400 },
    description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, 
    the company behind the Linux-based Ubuntu operating system. 
    Shuttleworth became the first South African to travel to space as a space tourist.`
  },
  {
    position: 'Pilot',
    name: 'Victor Glover',
    image: '/assets/crew/image-victor-glover.png',
    width: { mobile: 200, tablet: 450 },
    description: `Pilot on the first operational flight of the SpaceX 
    Crew Dragon to the International Space Station. 
    Glover is a commander in the U.S. Navy where he pilots an F/A-18.
    He was a crew member of Expedition 64, and served as a station systems flight engineer.`
  },
  {
    position: 'Flight Engineer',
    name: 'Anousheh Ansari',
    image: '/assets/crew/image-anousheh-ansari.png',
    width: { mobile: 200, tablet: 450 },
    description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, 
    and the first Iranian in space. `
  },
]

const Crew = () => {
  const theme = useTheme()
  const [crew, setCrew] = useState<string>('Commander')
  const steps = crews.map((crew) => crew.position)
  const selectedCrew = crews.find((item) => item.position === crew)

  const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'))
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isTabletDown = useMediaQuery(theme.breakpoints.down(1024))
  const desktopSize = theme.breakpoints.up(1024)
  const isDesktop = useMediaQuery(desktopSize)

  return (
    <Stack
      spacing={3}
      sx={{
        textAlign: 'center',
        [desktopSize]: {
          textAlign: 'start',
          flexDirection: 'row',
        }
      }}
    >
      <Stack
        spacing={1}
        sx={{
          [desktopSize]: {
            pt: 10,
            width: '70%'
          }
        }}
      >
        {isMobileSize &&
          <Stack spacing={2} pb={1}>
            <StyledImage
              idName={selectedCrew?.image as string}
              src={selectedCrew?.image as string}
              width={selectedCrew?.width.mobile ?? 220}
              height={220}
            />
            <AutoImageStepper steps={steps} setCrew={setCrew} />
          </Stack>}
        <Typography variant='heading4' color='space.white' sx={{ opacity: '50%' }} >
          {selectedCrew?.position.toUpperCase()}
        </Typography>
        <Typography variant='heading3' color='space.white' >
          {selectedCrew?.name.toUpperCase()}
        </Typography>
        <Typography
          variant='bodytext'
          color='space.purple'
          sx={{
            px: { xs: 0, sm: 10 },
            [desktopSize]: {
              px: 0,
              width: '80%'
            }
          }}
        >
          {selectedCrew?.description}
        </Typography>
        {(isSm && isTabletDown) &&
          <Stack spacing={5}>
            <AutoImageStepper steps={steps} setCrew={setCrew} />
            <StyledImage
              idName={selectedCrew?.image as string}
              src={selectedCrew?.image as string}
              width={selectedCrew?.width.tablet ?? 220}
              height={500}
            />
          </Stack>}
        {isDesktop &&
          <Box pt={10}>
            <AutoImageStepper steps={steps} setCrew={setCrew} />
          </Box>
        }
      </Stack>
      {isDesktop &&
        <StyledImage
          idName={selectedCrew?.image as string}
          src={selectedCrew?.image as string}
          width={selectedCrew?.width.tablet ?? 220}
          height={500}
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        />}
    </Stack>
  )
}

export default Crew

interface IAutoImageStepper {
  steps: string[]
  setCrew: (state: string) => void
}

const AutoImageStepper = (props: IAutoImageStepper) => {
  const { steps, setCrew } = props
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState<number>(0)
  const totalSteps = steps.length
  const desktopSize = theme.breakpoints.up(1024)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % totalSteps)
    }, 10000)

    return () => {
      clearInterval(timer)
    }
  }, [totalSteps])

  useEffect(() => {
    setCrew(steps[activeStep])
  }, [activeStep])

  return (
    <Box sx={{ width: '100%' }}>
      <MobileStepper
        variant='dots'
        steps={4}
        activeStep={activeStep}
        position="static"
        nextButton={null}
        backButton={null}
        sx={{
          pl: 2,
          justifyContent: 'center',
          color: 'space.white',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          '& .MuiMobileStepper-dot': {
            mr: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: 'space.white'
          },
          [desktopSize]: {
            pl: 0,
            justifyContent: 'start',
          }
        }}
      />
    </Box>
  )
}
