import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Image from "next/image";


export default function Home() {
  return (
    <Box style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Image
        src={"/assets/home/background-home-desktop.jpg"}
        alt="home-background"
        layout="fill"
        objectFit="cover"
      />
      <Box style={{ position: 'absolute', width: '100%', marginTop: 38 }}>
        <Navbar />
      </Box>
    </Box>
  );
}
