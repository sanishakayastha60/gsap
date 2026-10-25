"use client";

import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

export default function Timeline() {
  const containerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
      .from(".subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      })
      .from(".button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
      });
  }, []);
  return (
    <main ref={containerRef} className="p-10">
      <h1 className="title">Timeline</h1>
      <p className="subtitle">
        A timeline lets us sequence multiple animations, control when they start
        and manage them together instead of writing separate gsap.to()
        calls.While using timeline, the most important thing to understand is
        the position parameter which is used in many various Timeline methods.
      </p>
      <button className="button">Practice</button>
    </main>
  );
}
