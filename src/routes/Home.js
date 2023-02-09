import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <MyCard />
      <Footer />
    </div>
  );
};

export default Home;
