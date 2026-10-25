"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function CardStagger() {
  useGSAP(() => {
    gsap.from("#card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 2,
    });
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4 p-5">
      <div className="w-100 h-100 bg-blue-200 rounded-xl text-center" id="card">
        Card 1
      </div>
      <div className="w-100 h-100 bg-blue-200 rounded-xl text-center" id="card">
        Card 2
      </div>
      <div className="w-100 h-100 bg-blue-200 rounded-xl text-center" id="card">
        Card 3
      </div>
      <div className="w-100 h-100 bg-blue-200 rounded-xl text-center" id="card">
        Card 4
      </div>
    </div>
  );
}
