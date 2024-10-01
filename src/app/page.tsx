'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"

export default function Home() {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Stack
      spacing={5}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        minHeight: { xs: '85vh', md: '70vh' },
        marginY: 'auto',
        paddingTop: 10,
        [theme.breakpoints.up(1024)]: {
          flexDirection: 'row',
          paddingX: 15,
        },
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: { xs: '70%', sm: '50%' },
          [theme.breakpoints.up(1024)]: {
            alignItems: 'flex-start',
            textAlign: 'left',
          },
        }}
      >
        <Typography variant="heading5" color='space.purple'>
          {'SO, YOU WANT TO TRAVEL TO'}
        </Typography>
        <Typography variant="heading1" color='space.white'>
          {'SPACE'}
        </Typography>
        <Typography variant="bodytext" color='space.purple' sx={{ wordBreak: 'break-word' }}>
          {`Let’s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the
        edge of it. Well sit back, and relax because we’ll give you a
        truly out of this world experience!`}
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '25vh',
          [theme.breakpoints.up(1024)]: {
            alignItems: 'flex-end'
          },
        }}
      >
        <Button
          variant="contained"
          onClick={() => router.push('/destination')}
          sx={{
            borderRadius: '50%',
            bgcolor: 'space.white',
            width: { xs: 150, sm: 220, md: 270 },
            height: { xs: 150, sm: 220, md: 270 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            '&:hover': {
              bgcolor: 'rgba(200, 200, 200, 1)',
            },
            [theme.breakpoints.up(1024)]: {
              marginBottom: 0,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 1)',
                backdropFilter: 'blur(10px)',
                boxShadow: `0px 0px 0px 60px rgba(255, 255, 255, 0.15)`,
              },
            },
          }}
        >
          <Typography variant="button" color={'space.darkNavy'}>
            {'EXPLORE'}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}