"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import GameSection from "@/components/GameSection";
import Toast from "@/components/Toast";

export default function Home() {
  const [prompt, setPrompt] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const gameConfig = [
    {
      name: "Play Arcade Games",
      buttonClass: "btn-green-moon",
      slug: "Arcade",
    },
    {
      name: "Play Action Games",
      buttonClass: "btn-dark-moon",
      slug: "Action",
    },
    {
      name: "Sports and Racing",
      buttonClass: "btn-funky-moon",
      slug: "Sports & Racing",
    },
    {
      name: "Play Strategy Games",
      buttonClass: "btn-purple-moon",
      slug: "Strategy",
    },
    {
      name: "Puzzle and Logic",
      buttonClass: "btn-cool-blues",
      slug: "Puzzle & Logic",
    },
    {
      name: "Play Adventure Games",
      buttonClass: "btn-orange-moon",
      slug: "Adventure",
    },
  ];

  const promptInstallButton = () => {
    if (prompt) {
      prompt.prompt();
      setShowToast(false);
    }
  };

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setPrompt(event);

      if (!window.matchMedia("display-mode: standalone").matches) {
        setTimeout(() => {
          setShowToast(true);
        }, 10000);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <main className="bg-light">
      <Slider />
      {/* {gameConfig.map((d, index) => {
        return <GameSection key={index} data={d}/>
      })}  */}
      <GameSection data={gameConfig[1]} />

      {showToast ? (
        <Toast
          closeToast={() => setShowToast(false)}
          triggerInstall={() => promptInstallButton()}
        />
      ) : null}

      <Footer />
    </main>
  );
}
