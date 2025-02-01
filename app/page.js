import { Navbar } from "@/components/navbar";
import "./globals.css";
import Image from "next/image";
import { Hero } from "@/components/Background";
import Team from "@/components/Team";
import AboutKMC from "@/components/AboutKMC";
import AboutMahe from "@/components/AboutMAHE";
import { Mangalore } from "@/components/Mangalore";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <AboutKMC></AboutKMC>
      <AboutMahe></AboutMahe>
      <Mangalore></Mangalore>
      <Team />
    </>
  );
}
