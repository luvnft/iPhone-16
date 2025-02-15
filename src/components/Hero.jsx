import React, { useEffect, useState } from "react";
import gsap from "gsap";
import {
  heroVideo,
  smallHeroVideo,
  appleImg,
  bagImg,
  searchImg,
} from "../utils";
import { navLists } from "../constants";
import appleIntelligenceImage from "./1.png";
import FloatingNavbar from "./FloatingNavbar";
import { Link } from "react-router-dom";

const HeroWithNavbar = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useEffect(() => {
    gsap.to("#hero", { opacity: 1, delay: 4.7 });
    gsap.fromTo(
      "#image",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 4.8 }
    );
    gsap.fromTo(
      "#cta",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 4.8 }
    );
  }, []);

  return (
    <>
      <section className="relative w-full h-screen bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="object-cover w-full h-95"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <header className="relative z-20 flex flex-col items-center justify-between w-full">
          <nav className="flex items-center w-full px-5 py-3 bg-transparent screen-max-width sm:px-10">
            <Link to="/" ><img src={appleImg} alt="Apple" width={12} height={12} /></Link>
            <div className="flex justify-center max-sm:hidden">
              {navLists.map((nav) => (
                <Link to={`/${nav}`} >
                <div
                  key={nav}
                  className="px-6 text-sm text-gray-200 transition-all cursor-pointer hover:text-white"
                >
                  {nav}
                </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-9">
              <img
                src={searchImg}
                alt="search"
                width={14}
                height={14}
                className="cursor-pointer"
              />
              <img
                src={bagImg}
                alt="bag"
                width={14}
                height={14}
                className="cursor-pointer"
              />
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-col w-full h-full flex-center">
          <div className="flex flex-col items-center">
            <p
              id="hero"
              className="mb-4 text-5xl font-semibold hero-title"
              style={{ color: "white" }}
            >
              CASINO W3W
            </p>
            <img
              id="image"
              src={appleIntelligenceImage}
              alt="Livestream casino Tokenopoly 🪑 game"
              className="w-full max-w-4xl -mt-48 opacity-100"
            />
          </div>
          <div
            id="cta"
            className="flex flex-col items-center opacity-0 translate-y-80"
          >
            <a
              href="https://what3words.com"
              className="mb-4 font-thin text-white bg-white rounded-full btn buy-btn text-md "
            >
              Download What3Words App
            </a>
            <p className="text-xl text-white">Post a reel on TikTok tagging @casinow3w with your W3W What3Words 🔥🪑🎰🃏🎲 address to enter to win.</p>
            <p className="text-xl text-gray">
            </p>
          </div>
        </div>
      </section>

      <FloatingNavbar />
    </>
  );
};

export default HeroWithNavbar;
