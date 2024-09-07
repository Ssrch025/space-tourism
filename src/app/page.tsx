import Copyright from "@/components/Copyright";
import ProTip from "@/components/ProTip";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


export default function Home() {
  return (
    <Container maxWidth="lg" >
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'space.purple'
        }}
      >
        <Typography
          variant="heading1"
          sx={{ mb: 2 }}
        >
          Material UI
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
