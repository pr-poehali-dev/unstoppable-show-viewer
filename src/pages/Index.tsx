import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SeriesInfo from "@/components/SeriesInfo";
import EpisodesList from "@/components/EpisodesList";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SeriesInfo />
      <EpisodesList />
    </div>
  );
};

export default Index;
