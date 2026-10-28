"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.to(sectionRef.current, {
      scale: 1,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".heading",
        start: "top 70%", //this means start a the top of the card and a position 60% down the viewport, measured from its top.
        end: "top 40%",
        // scrub: true, // default false hunxa and if false rakim bhane trigger ko rup ma kam garxa that means once start ma pugxa it shows ani next time until page refresh the animation does not happen.
        toggleActions: "play restart none none", // scrub false huda if we want effects ....... onEnter onLeave onEnterback onLeaveBack
        markers: true,
      },
    });
  });
  return (
    <main ref={containerRef} className="bg-gray-800 text-white">
      <section className="min-h-screen w-full flex items-end justify-center p-6 ">
        <h1 className="heading text-3xl bg-linear-to-r from-blue-200 to-pink-200 bg-clip-text text-transparent">
          Scroll Down to learn more
        </h1>
      </section>
      <section
        ref={sectionRef}
        className="min-h-screen w-full mt-4 p-2 opacity-0"
      >
        <h2 className="text-2xl text-center uppercase font-bold p-4">
          Scroll Trigger
        </h2>
        <p className="text-gray-200">
          ScrollTrigger is a powerful GSAP plugin that binds animations to
          scroll position. Instead of animation playing when the page loads,
          they trigger when elements enter the viewport or at specific scroll
          positions.
        </p>
        <h2 className="text-center text-xl my-4">
          Core Concepts of ScrollTrigger
        </h2>
        <ol className="space-y-4">
          <li>
            <b>trigger:</b>{" "}
            <span>
              The DOM element that acts as an anchor. When this specific element
              hits a certain point in the viewport, your animation reacts.
            </span>
          </li>
          <li>
            <b>start and end:</b>{" "}
            <span>
              The "markers" that define when the animation begins and ends.
            </span>
          </li>
          <li>
            <b>scrub:</b>{" "}
            <span>
              This links the animation's progress directly to the
              scrollbar.Instead of playing automatically when triggered, the
              animation scrubs forwards and backward as the user scrolls up and
              down. Without scrub, ScrollTrigger typically starts the tween when
              the start position is reached and the tween plays according to its
              own duration. Numeric scrub is a smoothing duration in seconds.
            </span>
          </li>
          <li>
            <b>pin:</b>{" "}
            <span>
              This temporarily locks an element in place on the screen while
              animations happen around or inside it, creating "sticky" stacking
              effect.
            </span>
          </li>
        </ol>
      </section>
    </main>
  );
}
