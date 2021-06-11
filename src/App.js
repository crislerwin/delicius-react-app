import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Section from "./components/section";
import About from "./components/about";
import Menu from "./components/menu";
import Gallery from "./components/gallery";
import Team from "./components/team";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <About />
      <Menu />
      <Gallery />
      <Team />
    </>
  );
}
