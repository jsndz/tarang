import { Navbar } from "@/components/navbar";
import "./globals.css";
import Image from "next/image";
import Messages from "@/components/Team";
import AboutKMC from "@/components/AboutKMC";
import AboutMahe from "@/components/AboutMAHE";
import { Mangalore } from "@/components/Mangalore";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero> </Hero>
      <AboutKMC></AboutKMC>
      <Mangalore></Mangalore>
      <Messages />
      <Events></Events>
      <Footer></Footer>
    </>
  );
}
