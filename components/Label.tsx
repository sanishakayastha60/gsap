"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Label() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".heading", {
      y: 20,
      opacity: 0,
      duration: 2,
    });
    tl.addLabel("info");
    tl.addLabel("button", 10);
    tl.from(
      ".subheading",
      {
        y: 20,
        opacity: 0,
        duration: 2,
      },
      "info",
    ).from(
      ".more",
      {
        y: 20,
        duration: 2,
        opacity: 0,
      },
      "button",
    );
  });
  return (
    <div className="container w-full min-h-screen bg-blue-50">
      <div className="info w-full min-h-screen pb-16 flex flex-col items-center justify-end">
        <h1 className="heading font-bold uppercase text-2xl p-10">Label</h1>
        <p className="subheading text-xl italic w-[50%] text-center ">
          GSAP label is a named position that is attached to a GSAP timeline
          with `addLabel()`, then referenced by name. The syntax is{" "}
          <span>timeline.addLabel("labelName",position);</span>{" "}
        </p>
        <button className="more mt-8 px-4 py-2 bg-pink-800 text-white rounded-xl">
          <Link href="https://annnimate.com/learn/timeline/timeline-labels">
            Learn More
          </Link>
        </button>
      </div>
    </div>
  );
}
