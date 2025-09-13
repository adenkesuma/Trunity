"use client";
import React, { JSX, useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string; // Tetap pakai thumbnail untuk tampilan kartu
  video: string;     // Video untuk tampilan detail
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="px-4 sm:px-0 w-full md:h-full grid grid-cols-3 container mx-auto gap-6 py-8 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "h-60 md:h-full")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "rounded-xl cursor-pointer absolute inset-0 h-[70vh] w-[65%] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 rounded-xl h-full w-full"
                : "rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ThumbnailComponent card={card} isSelected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 z-10 rounded-xl",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

// Komponen untuk menampilkan thumbnail saat dalam mode kartu
const ThumbnailComponent = ({ 
  card, 
  isSelected 
}: { 
  card: Card; 
  isSelected: boolean;
}) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="1000"
      width="1000"
      className={cn(
        "border-8 border-white/30 object-cover object-top absolute inset-0 h-full rounded-xl w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

// Komponen untuk menampilkan video saat dipilih
const SelectedCard = ({ selected }: { selected: Card | null }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  // Memutar video ketika dipilih
  useEffect(() => {
    if (videoRef.current && selected && !hasError) {
      videoRef.current.play().catch(e => console.error("Video play failed:", e));
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [selected, hasError]);

  const handleError = () => {
    console.error(`Video loading failed: ${selected?.video}`);
    setHasError(true);
  };

  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full z-10"
      />
      
      {/* Tampilkan video jika tidak error */}
      {!hasError ? (
        <video
          ref={videoRef}
          src={selected?.video}
          className="absolute inset-0 h-full w-full object-cover z-0"
          autoPlay
          playsInline
          onError={handleError}
        />
      ) : (
        // Fallback ke thumbnail jika video error
        <motion.img
          src={selected?.thumbnail}
          className="absolute inset-0 h-full w-full object-cover z-0"
          alt="fallback thumbnail"
        />
      )}
      
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
