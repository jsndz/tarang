import { Navbar } from "@/components/navbar";
import "./globals.css";
import Image from "next/image";
import { Hero } from "@/components/Background";
import Messages from "@/components/Team";
import AboutKMC from "@/components/AboutKMC";
import AboutMahe from "@/components/AboutMAHE";
import { Mangalore } from "@/components/Mangalore";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <AboutKMC></AboutKMC>
      <AboutMahe></AboutMahe>
      <Mangalore></Mangalore>
      <Messages />
      <Events></Events>
      <Footer></Footer>
    </>
  );
}
