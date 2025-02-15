import React, { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { exploreVideo } from "../utils";
import ImageCarousel from "./Slider";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => {
          if (!hasPlayed) {
            videoRef.current.play();
            setHasPlayed(true);
          }
        },
        onLeave: () => videoRef.current.pause(),
      },
    });

    gsap.fromTo(
      "#features_title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: "#features_title",
      }
    );
    gsap.fromTo(
      ".g_text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: ".g_text",
      }
    );
  }, [hasPlayed]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="relative z-30 pt-20 text-center">
        <h1
          id="features_title"
          className="mb-0 text-6xl font-bold text-white opacity-0 md:text-7xl"
        >
          👻 Phantom Username
        </h1>
        <h1 className="mb-24 text-6xl font-bold opacity-0 md:text-7xl glow-effect g_text blend-text">
          ///PIN.POST.WIN.
        </h1>
      </div>

      <div className="mt-24 video-container">
        <video
          playsInline
          id="exploreVideo"
          className="opacity-100"
          preload="none"
          muted
          autoPlay
          ref={videoRef}
        >
          <source src={exploreVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative bottom-0 left-0 right-0 z-30 p-8 mt-12 gradient-bg">
        <div className="flex flex-col items-start justify-center max-w-4xl gap-6 mx-auto md:flex-row">
          <div className="flex-1 w-full p-6 rounded-lg md:w-auto">
            <p className="leading-relaxed text-gray-400 feature-text g_text custom-font-size">
              Casino W3W map game Playas receive
              <br />
              Solana Comps airdropped to their 👻
              <br />
              Phantom wallet account daily, weekly
              <br />
              and monthly for mapping their fav 
              <br />
              casino spots highlight reels and
              <br />
              sharing{" "}
              <span className="font-medium text-white">
              🔥🪑🎰🃏🎲
              </span>{" "}
              <br />
              with other Playas.
            </p>
          </div>

          <div className="flex-1 w-full p-6 mb-24 rounded-lg md:w-auto">
            <p className="leading-relaxed text-gray-400 feature-text g_text custom-font-size">
              1️⃣ Download the Phantom wallet app
              <br />
              2️⃣ Create a 👻 Username 
              <br />
              3️⃣ Share your 👻 Username with W3W addy to win
              <br />
              material that’s{" "}
              <span className="font-medium text-white">
                two times tougher
                <br />
                than any smartphone glass.
              </span>{" "}
              Talk
              <br />
              about durable.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <ImageCarousel />
        </div>

        <div className="flex flex-col items-start justify-center max-w-4xl gap-6 mx-auto mt-48 md:flex-row">
          <div className="flex-1 w-full p-6 rounded-lg md:w-auto">
            <p className="leading-relaxed text-gray-400 feature-text g_text custom-font-size">
              New display technology allows us
              <br />
              to route display data under active
              <br />
              pixels with no distortion, resulting
              <br />
              in thinner borders for larger
              <br />
              15.93 cm (6.3”) and 17.43 cm
              <br />
              (6.9”){" "}
              <span className="font-medium text-white">
                Super Retina XDR displays
              </span>{" "}
              <br />
              that feel great in the hand.
            </p>
          </div>

          <div className="flex-1 w-full p-6 mb-24 rounded-lg md:w-auto">
            <p className="leading-relaxed text-gray-400 feature-text g_text custom-font-size">
              iPhone 16 Pro is splash, water and
              <br />
              dust resistant. It also has our
              <br />
              latest-generation Ceramic Shield
              <br />
              material that's{" "}
              <span className="font-medium text-white">
                two times tougher
                <br />
                than any smartphone glass.
              </span>{" "}
              Talk
              <br />
              about durable.
            </p>
          </div>
        </div>
      </div>

      <style jsx='true'>{`
        .gradient-bg {
          background-image: radial-gradient(
            ellipse 80% 50% at center,
            rgba(255, 200, 150, 0.2) 0%,
            rgba(60, 44, 38, 0.4) 25%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.7) 80%,
            rgba(0, 0, 0, 1) 100%
          );
          border-radius: 10px;
        }

        .glow-effect {
          color: #fffaf6;
          text-shadow: 0 0 10px #ebdcd2, 0 0 20px #ae8569,
            0 0 40px #8f6245, 0 0 40px #8f6245, 0 0 40px #8f6245, 0 0 40px #5b351c, 0 0 40px #5b351c, 0 0 80px #5b351c;
        }

        .blend-text {
          mix-blend-mode: screen;
          position: relative;
          z-index: 30;
        }

        #features_title {
          margin-bottom: 10px;
          position: relative;
          z-index: 30;
        }

        .mb-24 {
          margin-bottom: 120px;
        }

        .custom-font-size {
          font-size: 1.325rem;
        }
      `}</style>
    </section>
  );
};

export default Features;
