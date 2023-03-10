import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import {
  Typography,
  Box,
  Grid,
  Paper,
  Stack,
  Button,
  Container,
  AppBar,
  Tabs,
  Tab,
} from "@mui/material";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/NavBar/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>Dev By Nate | Background works</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="xl">
          <AppBar sx={{ background: "Red" }} position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Home" />
              <Tab label="About" />
              <Tab label="Services" />
            </Tabs>
          </AppBar>
          <Hero />
        </Container>
      </main>
    </>
  );
}
