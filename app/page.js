import { Navbar } from "@/components/navbar";
import "./globals.css";
import Image from "next/image";
import { Hero } from "@/components/Background";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Team />
    </>
  );
}
