"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function CardStagger() {
  useGSAP(() => {
    gsap.from("#card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: {
        amount: 0.8, //total time for all the cards to reveal
        from: "center", //kata bata suru hunxa reveal hunna
        ease: "power2.in",
        // each:0.2, //each card reveal bicha ma interval time
      },
    });
  }, []);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5">
      <div className="w-50 h-50 bg-blue-200 rounded-xl text-center" id="card">
        Card 1
      </div>
      <div className="w-50 h-50 bg-blue-200 rounded-xl text-center" id="card">
        Card 2
      </div>
      <div className="w-50 h-50 bg-blue-200 rounded-xl text-center" id="card">
        Card 3
      </div>
      <div className="w-50 h-50 bg-blue-200 rounded-xl text-center" id="card">
        Card 4
      </div>
      <div className="w-50 h-50 bg-blue-200 rounded-xl text-center" id="card">
        Card 5
      </div>
      <div className="w-50 h-50 bg-blue-200 rounded-xl text-center" id="card">
        Card 6
      </div>
    </div>
  );
}
