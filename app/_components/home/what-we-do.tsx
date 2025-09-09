"use client";
import React from "react";
import { LayoutGrid } from "./../layout-grid";

export function WhatWeDo() {
  return (
    <div className="h-[1400px] py-20 w-full bg-blue-950/10 mt-18">
      <h2 className="text-2xl md:text-5xl font-sans font-bold text-blue-950 text-center">Kegiatan Trunity</h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Trunity Fast-Track
      </p>
      <p className="font-normal text-base text-white"></p>
      <div className="font-normal flex flex-col text-base my-4 max-w-lg text-neutral-200">
        <span className="text-sm">- Program pelatihan full 2 hari</span>
        <span className="text-sm">- 90 hari pendampingan untuk emnjadi warrior sejati di dunia agency</span>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Master Day
      </p>
      <p className="font-normal text-base text-white"></p>
      <div className="font-normal flex flex-col text-base my-4 max-w-lg text-neutral-200">
        <span className="text-sm">- Mindset</span>
        <span className="text-sm">- Motivasi</span>
        <span className="text-sm">- Handle Objection</span>
        <span className="text-sm">- Selling Idea</span>
        <span className="text-sm">- Talkshow</span>
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Potential Day
      </p>
      <p className="font-normal text-base text-white"></p>
      <div className="font-normal flex flex-col text-base my-4 max-w-lg text-neutral-200">
        <span className="text-sm">- Product Knowledge</span>
        <span className="text-sm">- Sharing & Discussion</span>
        <span className="text-sm">- Problem Solving</span>
      </div>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Unity Day
      </p>
      <p className="font-normal text-base text-white"></p>
      <div className="font-normal flex flex-col text-base my-4 max-w-lg text-neutral-200">
        <span className="text-sm">- BOS</span>
        <span className="text-sm">- Gathering</span>
        <span className="text-sm">- Coffee Talk</span>
        <span className="text-sm">- Morning Run</span>
        <span className="text-sm">- Social</span>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/assets/Frame-1.png",
    video:
      "/assets/fast-track.mp4",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/assets/Frame-2.png",
    video:
      "/assets/masterday.mp4",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/assets/Frame-4.png",
    video:
      "/assets/potentialday.mp4",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/assets/Frame-3.png",
    video:
      "/assets/unityday.mp4",
  },
];
