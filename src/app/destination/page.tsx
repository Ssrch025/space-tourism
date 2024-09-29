'use client'
import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import StyledImage from '@/components/StyledImage'
import Typography from '@mui/material/Typography'
import StyledTab from '@/components/StyledTab'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useMediaQuery, useTheme } from '@mui/material'

const stars = [
  {
    name: 'moon',
    description: `See our planet as you’ve never seen it before. 
      A perfect relaxing trip away to help regain perspective and come back refreshed. 
      While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    avgDistance: '384000 km',
    travelTime: '3 days',
  },
  {
    name: 'mars',
    description: `Don’t forget to pack your hiking boots. 
      You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. 
      It’s two and a half times the size of Everest!`,
    avgDistance: '225 mil. km',
    travelTime: '9 months',
  },
  {
    name: 'europa',
    description: `The smallest of the four Galilean moons orbiting Jupiter, 
      Europa is a winter lover’s dream. With an icy surface, 
      it’s perfect for a bit of ice skating, curling, hockey, 
      or simple relaxation in your snug wintery cabin.`,
    avgDistance: '628 mil. km',
    travelTime: '3 years',
  },
  {
    name: 'titan',
    description: `The only moon known to have a dense atmosphere other than Earth, 
      Titan is a home away from home (just a few hundred degrees colder!). 
      As a bonus, you get striking views of the Rings of Saturn.`,
    avgDistance: '1.6 bil. km',
    travelTime: '7 years',
  },
]

const getResponsiveSize = (isMd: boolean, isSm: boolean) => {
  if (isMd) return 450
  if (isSm) return 300
  return 170
}

const Destination = () => {
  const [star, setStar] = useState<string>('moon')

  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isMd = useMediaQuery(theme.breakpoints.up('md'))

  const selectedStar = stars.find((item) => item.name === star)
  const responsiveSize = getResponsiveSize(isMd, isSm)

  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up(1024)]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          textAlign: 'left',
        },
      }}
    >
      <StyledImage
        idName={`${selectedStar?.name}-image`}
        src={`/assets/destination/image-${selectedStar?.name}.png`}
        width={responsiveSize}
        sx={{ mx: 5 }}
      />
      <Stack
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.up(1024)]: {
            alignItems: 'flex-start',
            width: '50%',
          },
        }}
      >
        <StyledTab
          type='tab'
          tabs={stars.map((item) => item.name)}
          selectedMenu={star}
          handleClick={(e) => setStar(e.currentTarget.value)}
          sx={{
            paddingX: { xs: 0.5, sm: 1, md: 2 },
            paddingY: 1,
            mt: 4,
          }}
        />
        <Typography variant='heading3' color='space.white'>
          {selectedStar?.name.toUpperCase()}
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
            [theme.breakpoints.up(768)]: {
              width: '70%',
            },
            [theme.breakpoints.up(1024)]: {
              textAlign: 'start',
              width: '80%',
            },
          }}
        >
          <Typography variant='bodytext' color='space.purple'>
            {selectedStar?.description}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            [theme.breakpoints.up(768)]: {
              width: '70%',
            },
            [theme.breakpoints.up(1024)]: {
              width: '80%',
            },
          }}
        >
          <Divider sx={{ borderColor: 'space.border' }} />
        </Box>
        <StarDetail
          avgDistance={selectedStar?.avgDistance ?? ''}
          travelTime={selectedStar?.travelTime ?? ''}
        />
      </Stack>
    </Stack>
  )
}

export default Destination

const StarDetail = ({ avgDistance, travelTime }: { avgDistance: string; travelTime: string }) => {
  const details = [
    { topic: 'avg. distance', value: avgDistance },
    { topic: 'est. travel time', value: travelTime },
  ]

  return (
    <Stack spacing={{ xs: 4, sm: 10 }} direction={{ sm: 'row' }} textAlign='center'>
      {details.map((detail) => (
        <Stack key={detail.topic} spacing={1.5}>
          <Typography variant='navtext' color='space.purple'>
            {detail.topic.toUpperCase()}
          </Typography>
          <Typography variant='subheading1' color='space.white'>
            {detail.value.toUpperCase()}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}