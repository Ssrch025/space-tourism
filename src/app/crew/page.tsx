import React from 'react'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

type Props = {}

const Crew = (props: Props) => {
  return (
    <Stack
      spacing={3}
    >
      <Typography variant='heading4' color='space.white' sx={{ opacity: '50%' }} >
        Commander
      </Typography>
      <Typography variant='heading3' color='space.white' >
        Douglas Hurley
      </Typography>
      <Typography variant='bodytext' color='space.purple' >
        {`Douglas Gerald Hurley is an American engineer, 
        former Marine Corps pilot and former NASA astronaut. 
        He launched into space for the third time as commander of Crew Dragon Demo-2.`}
      </Typography>
    </Stack>
  )
}

export default Crew