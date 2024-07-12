"use client";
// Homepage
// could have used gsap but morphing is for gsab club members only

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

export default function Home() {
  const [morph, setMorph] = useState(true);

  const { d } = useSpring({
    d: morph
      ? "M774,616Q776,732,679.5,850Q583,968,482,836.5Q381,705,227,680Q73,655,120.5,517Q168,379,218.5,239Q269,99,417,116.5Q565,134,696.5,179.5Q828,225,800,362.5Q772,500,774,616Z" // Path for Svg2
      : "M867,602Q743,704,642.5,719.5Q542,735,402,823.5Q262,912,194,774Q126,636,239.5,541Q353,446,318,285.5Q283,125,429,99Q575,73,684.5,163.5Q794,254,892.5,377Q991,500,867,602Z", // Path for Svg1
    config: { duration: 1000 },
  });
  useEffect(() => {
    setMorph(!morph);
    return () => {};
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <svg
        onClick={() => setMorph(!morph)}
        id="blobsvg"
        key="0"
        width={"100vw"}
        className="w-screen md:w-2/5 cursor-pointer"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="imageId"
            patternUnits="userSpaceOnUse"
            width="1000"
            height="1000"
          >
            <image
              href="https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D"
              x="0"
              y="0"
              width="1000"
              height="1000"
            />
          </pattern>
        </defs>
        <g clipPath="url(#shape)" className="w-screen">
          <animated.path d={d} fill="url(#imageId)" />
        </g>
      </svg>
      <code>npm i @react-spring/web</code>
      <h1 className="text-2xl mt-8">will add the code in the website later for now look at the repo for code</h1>
    </main>
  );
}
