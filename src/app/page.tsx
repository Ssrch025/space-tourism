'use client'
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"


export default function Home() {
  const theme = useTheme()
  return (
    <Stack
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '85vh', md: '70vh' },
      }}
    >
      <Stack
        spacing={1}
        sx={{
          [theme.breakpoints.up('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            m: 'auto',
            width: '70%'
          },
          [theme.breakpoints.up('sm')]: {
            width: '50%'
          },
          [theme.breakpoints.up('md')]: {
            position: 'absolute',
            alignItems: 'flex-start',
            textAlign: 'start',
            width: '30%',
            bottom: 0,
            left: 120,
          },
          [theme.breakpoints.up('lg')]: {
            left: 165,
          },
        }}
      >
        <Typography variant="heading5" color='space.purple' >
          {'SO, YOU WANT TO TRAVEL TO'}
        </Typography>
        <Typography variant="heading1" color='space.white' >
          {'SPACE'}
        </Typography>
        <Typography variant="bodytext" color='space.purple' sx={{ wordBreak: 'break-word' }}  >
          {`Let’s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the
        edge of it. Well sit back, and relax because we’ll give you a
        truly out of this world experience!`}
        </Typography>
      </Stack>
      <Stack sx={{ width: '100%', minHeight: '25vh', display: 'flex', alignItems: 'center' }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: '50%',
            bgcolor: 'space.white',
            width: { xs: 150, sm: 242, md: 274 },
            height: { xs: 150, sm: 242, md: 274 },
            position: 'absolute',
            [theme.breakpoints.up('md')]: {
              position: 'absolute',
              bottom: 0,
              right: 120,
            },
            [theme.breakpoints.up('lg')]: {
              right: 165,
              bottom: 35,
            },
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0px 0px 0px 60px rgba(255, 255, 255, 0.15)'
            }
          }}
        >
          <Typography
            variant="heading4"
            color={'space.darkNavy'}
          >
            {'EXPLORE'}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
