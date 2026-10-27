"use client";

import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

export default function Timeline() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const tlbox = useRef<gsap.core.Timeline | null>(null);
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
    tlbox.current = gsap.timeline({ paused: true });
    tlbox.current.to(boxRef.current, {
      x: 300,
      duration: 2,
      scale: 0.5,
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
      <div>
        <h2>Timeline Control Methods</h2>
        <table className="border p-2">
          <tr>
            <th>Method</th>
            <th>What it does</th>
          </tr>
          <tr>
            <td>tl.play()</td>
            <td>Plays forward from the current position.</td>
          </tr>
          <tr>
            <td>tl.pause()</td>
            <td>Stops at the current position.</td>
          </tr>
          <tr>
            <td>tl.resume()</td>
            <td>
              Continues playback in the current direction. (means if forward ma
              cha bhane forward or backward ma xa bhane backward ma afno
              animation continue garxa)
            </td>
          </tr>
          <tr>
            <td>tl.reverse()</td>
            <td>Plays backward from the current position.</td>
          </tr>
          <tr>
            <td>tl.restart()</td>
            <td>Starts again from the beginning.</td>
          </tr>
          <tr>
            <td>tl.reverse(0)</td>
            <td>
              Jumps to the start and plays backward; usually finished
              immediately because it's already at the start.
            </td>
          </tr>
        </table>
        <div>
          <div
            ref={boxRef}
            className="box w-50 h-50 bg-green-500 rounded-2xl mt-16"
          ></div>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => tlbox.current?.play()}
              className="px-2 py-4 bg-blue-200 rounded-xl"
            >
              Play
            </button>
            <button
              onClick={() => tlbox.current?.pause()}
              className="pause px-2 py-4 bg-blue-200 rounded-xl"
            >
              Pause
            </button>
            <button
              onClick={() => tlbox.current?.resume()}
              className="resume px-2 py-4 bg-blue-200 rounded-xl"
            >
              Resume
            </button>
            <button
              onClick={() => tlbox.current?.reverse()}
              className="reverse px-2 py-4 bg-blue-200 rounded-xl"
            >
              Reverse
            </button>
            <button
              onClick={() => tlbox.current?.restart()}
              className="restart px-2 py-4 bg-blue-200 rounded-xl"
            >
              Restart
            </button>
            <button
              onClick={() => tlbox.current?.reverse(0)}
              className="reverse px-2 py-4 bg-blue-200 rounded-xl"
            >
              Reverse 0
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
