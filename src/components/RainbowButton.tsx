import { useState } from "react";

export default function RainbowButton({
  item,
  ...props
}: any) {
  const [showRainbow, setShowRainbow] = useState(false);
  const [moveRainbow, setMoveRainbow] = useState(false);

  const handleMouseEnter = () => {
    setShowRainbow(true);
    setMoveRainbow(false);

    // Start transition after the element is mounted
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMoveRainbow(true);
      });
    });
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setShowRainbow(false);
        setMoveRainbow(false);
      }}
      className={`hover:text-green-400 ${item.slug === location.pathname ? "text-blue-400" : "text-white"} relative duration-200 overflow-hidden cursor-pointer rounded-md px-4 py-2 `}
      {...props}
    >
      {showRainbow && item.slug === location.pathname && (
        <span
          className={`
             absolute inset-0
            ${moveRainbow ? "translate-x-full" : "-translate-x-full"}
            bg-[linear-gradient(120deg,transparent,rgba(255,0,0,.30),rgba(255,165,0,.30),rgba(255,255,0,.30),rgba(0,255,0,.30),rgba(0,150,255,.30),rgba(75,0,255,.30),rgba(148,0,211,.30),transparent)]
            blur-md
            transition-transform
            duration-1000
            ease-linear
          `}
        />
      )}

      <span className="relative z-10">
        {item.name || "click"}
      </span>
    </button>
  );
}