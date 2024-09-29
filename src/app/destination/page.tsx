'use client'
import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import StyledImage from '@/components/StyledImage'
import Typography from '@mui/material/Typography'
import StyledTab from '@/components/StyledTab'
import { Box, Divider, useMediaQuery, useTheme } from '@mui/material'

const Destination = () => {
  const [star, setStar] = useState<string>('moon')
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isMd = useMediaQuery(theme.breakpoints.up('md'))

  const stars = [
    {
      name: 'moon',
      description: `See our planet as you’ve never seen it before. 
      A perfect relaxing trip away to help regain perspective and come back refreshed. 
      While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      avgDistance: '384000 km',
      travelTime: '3 days'
    },
    {
      name: 'mars',
      description: `Don’t forget to pack your hiking boots. 
      You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. 
      It’s two and a half times the size of Everest!`,
      avgDistance: '225 mil. km',
      travelTime: '9 months'
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

  const findStar = stars.find((item) => item.name === star)

  const responsiveSize = () => {
    if (isMd) {
      return 450
    } else if (isSm) {
      return 300
    } else {
      return 170
    }
  }

  return (
    <Stack
      direction={{ md: 'row' }}
      sx={{
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'center',
        mx: { sm: 12 }
      }}
    >
      <Box mr={5}>
        <StyledImage
          idName={`${findStar?.name}-image`}
          src={`/assets/destination/image-${findStar?.name}.png`}
          width={170}
          responsiveSize={responsiveSize}
        />
      </Box>
      <Stack
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          width: { md: '50%' },
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
          {findStar?.name.toUpperCase()}
        </Typography>
        <Box textAlign={{ xs: 'center', md: 'start' }} width={{ md: '70%' }} >
          <Typography variant='bodytext' color='space.purple'>
            {findStar?.description}
          </Typography>
        </Box>
        <Box width={{ xs: '100%', md: '70%' }}>
          <Divider sx={{ borderColor: 'space.border' }} />
        </Box>
        <StarDetail
          avgDistance={findStar?.avgDistance ?? ''}
          travelTime={findStar?.travelTime ?? ''}
        />
      </Stack>
    </Stack>
  )
}

export default Destination

interface IStarDetail {
  avgDistance: string
  travelTime: string
}

const StarDetail = (props: IStarDetail) => {
  const { avgDistance, travelTime } = props

  const contents = [
    {
      topic: 'avg. distance',
      value: avgDistance,
    },
    {
      topic: 'est. travel time',
      value: travelTime,
    },
  ]
  return (
    <Stack
      spacing={{ xs: 4, sm: 10 }}
      direction={{ sm: 'row' }}
      textAlign='center'
    >
      {contents.map((item) => {
        return (
          <Stack
            key={item.topic}
            spacing={1.5}
          >
            <Typography variant='navtext' color='space.purple'>
              {item.topic.toUpperCase()}
            </Typography>
            <Typography variant='subheading1' color='space.white'>
              {item.value.toUpperCase()}
            </Typography>
          </Stack>
        )
      })}
    </Stack>
  )
}