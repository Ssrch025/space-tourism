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
          sx={{
            borderRadius: '50%',
            bgcolor: 'space.white',
            width: { xs: 150, sm: 242, md: 274 },
            height: { xs: 150, sm: 242, md: 274 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0px 0px 0px 60px rgba(255, 255, 255, 0.15)',
            },
            [theme.breakpoints.down(1024)]: {
              marginBottom: 10,
            },
          }}
        >
          <Typography variant="heading4" color={'space.darkNavy'}>
            {'EXPLORE'}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}