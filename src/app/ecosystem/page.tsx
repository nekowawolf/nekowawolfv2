'use client';

import React, { useState, useEffect } from 'react';

const LANGUAGES = [
  "Ecosystem",
  "エコシステム",
  "生态系统", 
  "생태계", 
  "Ekosistem", 
  "Hệ sinh thái", 
  "पारिस्थितिकी तंत्र", 
];

export const ecosystemsData = [
  {
    name: "Airdrop",
    url: "https://airdrop.nekowawolf.xyz",
    description: "Curated list of verified crypto airdrops, bounties, and earning opportunities."
  },
  {
    name: "Crypto Community",
    url: "https://cc.nekowawolf.xyz",
    description: "A comprehensive directory of active crypto communities, forums, and groups."
  },
  {
    name: "Web3 Tools",
    url: "https://web3.nekowawolf.xyz",
    description: "Essential Web3 utilities including wallets, DEXs, CEXs, trackers, and trading bots."
  },
  {
    name: "AI Tools",
    url: "https://ai.nekowawolf.xyz",
    description: "A hand-picked collection of powerful Artificial Intelligence tools and resources."
  },
  {
    name: "GitHub Repos",
    url: "https://github.nekowawolf.xyz",
    description: "Open-source repositories, developer projects, and coding resources."
  }
];

export default function EcosystemPage() {

  const [badgeText, setBadgeText] = useState(LANGUAGES[0]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIndex = 0;

    const cycleLanguage = () => {
      const nextIndex = (currentIndex + 1) % LANGUAGES.length;
      const targetText = LANGUAGES[nextIndex];
      const currentText = LANGUAGES[currentIndex];

      let scrambleIterations = 0;
      const maxIterations = 15;

      const scrambleInterval = setInterval(() => {
        scrambleIterations++;

        if (scrambleIterations >= maxIterations) {
          clearInterval(scrambleInterval);
          setBadgeText(targetText);
          currentIndex = nextIndex;
        } else {
          const progress = scrambleIterations / maxIterations;
          const length = Math.floor(
            currentText.length +
            (targetText.length - currentText.length) * progress
          );

          let scrambled = '';
          const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

          for (let i = 0; i < length; i++) {
            if (Math.random() < progress) {
              scrambled += targetText[i] || '';
            } else {
              scrambled += chars[Math.floor(Math.random() * chars.length)];
            }
          }

          setBadgeText(scrambled);
        }
      }, 60);
    };

    interval = setInterval(cycleLanguage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body-color p-4 sm:p-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-[800px] w-full flex flex-col items-center gap-10 sm:gap-14 my-10 sm:my-16 z-10 relative">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Animated Floating Badge */}
          <div className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-bold tracking-wide sm:tracking-widest uppercase mb-2">
            <span className="absolute inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-blue-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-blue-500" />
            <span>{ecosystemsData.length} {badgeText}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-fill-color tracking-tighter drop-shadow-sm">
            /nww ecosystem
          </h1>

          {/* Description */}
          <p className="text-fill-color opacity-75 text-sm sm:text-base max-w-2xl leading-relaxed mt-4 font-medium">
            Welcome to the Nww Ecosystem. Below is a curated directory of platforms,
            tools, and resources designed to help you navigate, discover, and build in
            the ever-evolving digital landscape.
          </p>
        </div>

        {/* List Grid */}
        <div className="flex flex-col w-full max-w-4xl mt-6 ml-6 sm:ml-8 space-y-8 sm:space-y-10">
          {ecosystemsData.map((item, index) => {
            const pathName = `/${item.name.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 relative transition-transform duration-300 hover:translate-x-2"
              >
                <div className="flex items-center gap-4 sm:w-1/3 shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-fill-color group-hover:text-blue-500 transition-colors duration-300 tracking-tight">
                    {pathName}
                  </span>
                  <span className="hidden sm:block flex-1 h-[1px] bg-border-divider group-hover:bg-blue-500/30 transition-colors duration-300"></span>
                </div>
                
                {/* Description */}
                <div className="flex flex-col sm:w-2/3 mt-1 sm:mt-0">
                  <p className="pr-4 sm:pr-0 text-sm sm:text-base text-fill-color opacity-60 leading-relaxed group-hover:opacity-90 transition-opacity duration-300">
                    {item.description}
                  </p>
                  
                  {/* Subtle link text */}
                  <div className="mt-3 overflow-hidden">
                    <span className="text-xs text-blue-500 font-mono opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 block">
                      {item.url} →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}