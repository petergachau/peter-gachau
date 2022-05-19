import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Project from '../routes/Project'

const Home = () => {
  return <div id="/"><Navbar/>
  <HeroImg/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
  </div>;
};

export default Home;
