import React, { useRef } from "react";
import { chipImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Chip Image */}
        <div id="chip" className="w-full flex-center">
          <img src={chipImg} alt="chip" width={600} height={600} />
        </div>

        {/* Title and Description */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">Livestream</h2>
          <p className="mt-12 text-lg text-gray-500">
            Watch Playas play live at your fav casino property.
          </p>
        </div>

        {/* Rebuilt Video Section */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="flex justify-center">
            <video
              className="h-auto max-w-full pointer-events-none"
              playsInline
              preload="none"
              muted
              autoPlay
              ref={videoRef}
            >
              <source src="/assets/videos/frame.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text Section */}
        <div className="hiw-text-container">
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="text-center hiw-text g_fadeIn">
              Watch Casino W3W livestream events mapped to
              What3Word locations near you. Watch to see
              <br /> what hot spots
              <span className="font-bold text-white">
                slots, poker and crap tables, dice and roulette games
                <br /> are hitting.
              </span>
              .Share, chat and network with other Playas <br />
              everyone Playa wins when you meet a new friend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
