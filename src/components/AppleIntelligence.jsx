import React, { useState } from "react";
import {
  card1Img1,
  card2Img1,
  card3Img1,
  img2card1,
  img2card2,
  img2card3,
  img3card1,
  img3card2,
  img3card3,
} from "../utils";

const AppleIntelligence = () => {
  const [selected, setSelected] = useState(0);
  const Items = [
    {
      cardHeading1: "Boost your winnings",
      cardHeading2:
        "Win twice—once in the casino and again on Casino W3W!",
      card1: {
        img: card1Img1,
        text: "",
        StrongText: "🏆 WINNING",
        text2:
          "is as easy as 1️⃣-2️⃣-3️⃣, win 2x in one play.",
      },
      card2: {
        img: img2card1,
        text: "1️⃣ Pin a 🏆 WINNING highlight 🎦 reel to a 📍 ///CASINO.W3W.ADDY with your 👻 Phantom username using the hashtag #CasinoW3W on TikTok, LUV NFT FUN, Instagram or Facebook to enter to",
        StrongText: "🏆 WIN",
        text2:
          "",
      },
      card3: {
        img: img3card1,
        text: "2️⃣ The most viral 🏆 WINNING highlight 🎦 reels that check the box of 📍👻, have the highest probability of winning.",
        StrongText: "All Solana Casino W3W Comp winnings are airdropped",
        text2:
          "securely to your 👻 Phantom wallet making it easy to show and redeem in our partner Casinos.",
      },
    },
    {
      cardHeading1: "Express yourself visually",
      cardHeading2:
        "Casinos using live-streaming increase their user 🎰🃏🎲 engagement up to 300%",
      card1: {
        img: card2Img1,
        text: "Go",
        StrongText: "Live",
        text2:
          "to increase your odds of winning on Casino W3W and to receive Comp airdrops from other Playas living through you.",
      },
      card2: {
        img: img2card2,
        text: "Casino",
        StrongText: "Live video-streamed",
        text2:
          "events featuring Playas, hosts, celebrities and random people walking in the background.",
      },
      card3: {
        img: img3card2,
        text: "Chat",
        StrongText: "with other Playas",
        text2:
          "in a all voice room to hear what's happening play by play from your fav casino W3W locations.",
      },
    },
    {
      cardHeading1: "A new era for Siri",
      cardHeading2:
        "With all-new superpowers, Siri will be able to assist you like never before.",
      card1: {
        img: card3Img1,
        text: "LUV NFT FUN",
        StrongText: "is our social media partner",
        text2:
          "that allows our Playas to contribute Casino W3W content in the official group, network and meet up IRL.",
      },
      card2: {
        img: img2card3,
        text: "Share with other",
        StrongText: "Playas",
        text2:
          "the Casino hot spots in real time and earn Casino W3W Comp tips for helping others. All Playas win united as a team.",
      },
      card3: {
        img: img3card3,
        text: "Not sure how to do something on iPhone, like adjust the background blur on a portrait? With expansive product knowledge, Siri can give you",
        StrongText: "step-by-step instructions",
        text2: " in a snap.",
      },
    },
  ];
  return (
    <section className="w-full flex flex-col justify-center items-center lg:px-32 bg-gradient-to-t  from-[#1c1b1b] via-[#222121] to-[#00000055] ">
      <div className="hidden min-[1075px]:flex  justify-center w-[80%] xl:w-3/5">
        <ul className="text-lg flex gap-6 text-[#86868b] h-9 w-full font-semibold ">
          <li
            className={` border-b-1 border-[#424245] w-full  hover:text-white flex justify-center ${
              selected === 0 && "text-white border-b-white"
            }   `}
            onClick={(e) => setSelected(0)}
          >
            <div>Boost your winnings</div>
          </li>
          <li
            className={`  border-b-1 border-[#424245] w-full  hover:text-white flex justify-center ${
              selected === 1 && "text-white border-b-white  "
            }  `}
            onClick={(e) => setSelected(1)}
          >
            <div>Casino Livestream</div>
          </li>
          <li
            className={` border-b-1 border-[#424245] w-full  hover:text-white flex justify-center ${
              selected === 2 && "text-white border-b-white "
            }  `}
            onClick={(e) => setSelected(2)}
          >
            <div>Casino Social Media </div>
          </li>
        </ul>
      </div>

      {Items &&
        Items.map((item, i) => (
          <div
            key={i}
            className={`w-[87%]  h-[80%]  pt-10 items-center text-[14px]  duration-500 transition-opacity ease-in-out delay-0 lg:  ${
              i !== selected && "min-[1075px]:hidden"
            }`}
          >
            <div className="flex flex-col items-center font-semibold">
              <div className="min-[1075px]:hidden text-md text-white pt-5 ">
                {item.cardHeading1}
              </div>
              <p className="text-center w-[36rem]  text-xl mb-10 animate-fade ">
                {item.cardHeading2}
              </p>
            </div>
            <div className="flex flex-col min-[1075px]:flex-row gap-7 text-sm text-gold-700 ">
              <div className="flex flex-col justify-around items-center min-[1075px]:w-1/2 md:px-14 pt-7 py-5 bg-black rounded-3xl">
                <div className="flex justify-center w-80 animate-fade">
                  <img src={item.card1.img} alt="" />
                </div>
                <div className="text-center w-[73%]  animate-fade ">
                  {item.card1.text}{" "}
                  <span className="font-bold text-white">
                    {item.card1.StrongText}
                  </span>{" "}
                  {item.card1.text2}
                </div>
              </div>
              <div className="min-[1075px]:w-1/2 flex flex-col gap-7">
                <div className="flex flex-col py-10 leading-5 bg-black text-gold-700 gap-14 rounded-xl">
                  <div className="text-center px-28 min-[1075px]:px-24 animate-fade">
                    {item.card2.text}{" "}
                    <strong className="font-bold text-white">
                      {item.card2.StrongText}
                    </strong>{" "}
                    {item.card2.text2}
                  </div>

                  <div className="flex justify-center w-full overflow-hidden animate-fade ">
                    <img src={item.card2.img} alt="" className="rounded-xl " />
                  </div>
                </div>
                <div className="w-full h-full overflow-hidden bg-black rounded-xl">
                  <p className="text-center px-[22%] py-14 animate-fade">
                    {item.card3.text}{" "}
                    <strong className="text-white">
                      {item.card3.StrongText}
                    </strong>{" "}
                    {item.card3.text2}
                  </p>
                  <div className="overflow-hidden flex justify-center -mb-64 min-[1075px]:-mb-52 animate-fade ">
                    <img src={item.card3.img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default AppleIntelligence;
