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
      .from(".position", {
        opacity: 0,
        duration: 0.8,
        y: 20,
      })
      .from(".default", {
        opacity: 0,
        x: -10,
        duration: 0.5,
      })
      .from(
        ".overlap",
        {
          opacity: 0,
          x: -10,
        },
        "-=0.5",
      )
      .from(
        ".gap",
        {
          opacity: 0,
          x: -10,
          duration: 0.5,
        },
        "+=0.5",
      )
      .from(
        ".align",
        {
          opacity: 0,
          x: -10,
          duration: 0.5,
        },
        "<",
      )
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
      <h2 className="position">Position Values</h2>
      <p className="default">
        "{">"}" - the default : Starts after the previous animation ends.
      </p>
      <p className="overlap">
        "{"-=0.5"}" - overlap : Start 0.5 seconds before the timeline's current
        end.{" "}
      </p>
      <p className="gap">
        {" "}
        "{"+=0.5"}" - add a gap : Start 0.5 seconds after the timeline's current
        end.{" "}
      </p>
      <p className="align">
        "{"<"}" - align with the previous animation : Start when the most
        recently inserted animation starts.
      </p>
      <button className="button">Practice</button>
    </main>
  );
}
