"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { StaticPrefetchDisabled } from "next/dist/shared/lib/app-router-types";

export default function BoxAnimation() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  useGSAP(() => {
    gsap.to(box1Ref.current, {
      x: 700,
      duration: 1.5,
      ease: "bounce.out",
    });
    gsap.from(box2Ref.current, {
      x: 200,
      duration: 1,
      delay: 2,
      ease: "elastic.out(1,0.3)",
    });
    gsap.fromTo(
      box3Ref.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
    );
  }, []);
  return (
    <main className="p-10">
      <h1 className="text-xl font-bold">Learning GSAP</h1>
      <div
        ref={box1Ref}
        className="w-50 h-50 rounded-full bg-amber-500 mt-4"
      ></div>
      <div
        ref={box2Ref}
        className="w-50 h-50 rounded-full bg-green-500 mt-4"
      ></div>
      <div
        ref={box3Ref}
        className="w-50 h-50 rounded-full bg-blue-500 mt-4"
      ></div>
    </main>
  );
}

// Notes
//  gsap.to() = animate to a state
//  gsap.from() = animate from a state
//  gsap.fromTo() = specify both state i.e. kun state bata suru hunxa ra kun state ma ayera end hunxa bhanne represent garinxa
