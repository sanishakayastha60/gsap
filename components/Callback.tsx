"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Callback() {
  const containerRef = useRef(null);
  const [introFinished, setIntroFinished] = useState(false);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setIntroFinished(true),
      });
      tl.from(".topic", {
        y: 20,
        opacity: 0,
        duration: 0.4,
      })
        .from(".hero", {
          y: 60,
          opacity: 0,
          duration: 0.7,
          onStart: () => {
            console.log("Heading animation started");
          },
          onComplete: () => {
            console.log("Heading section animation complete");
          },
        })
        .from(".example", {
          y: 20,
          opacity: 0,
          duration: 1,
        })
        .call(() => {
          console.log("Example shown");
        })
        .from(".type", {
          x: 40,
          opacity: 0,
          duration: 0.3,
        })
        .from(".desc", {
          x: 40,
          opacity: 0,
          duration: 0.8,
        });
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef}>
      <h1 className="topic">GSAP Callbacks</h1>
      <p className="hero">
        A callback is a function that GSAP calls when a particular event happens
        during an animation.
      </p>
      <p className="example">
        For example: Imagine a landing page being built in next.js. We animate
        the hero section, reveal the heading and then slide in a CTA button and
        update the UI when the animation finishes. Callbacks let us coordinate
        all of that.
      </p>
      <h2 className="type font-bold uppercase mt-4">Types of Callbacks</h2>
      <div className="desc">
        <ol className="list-decimal">
          <li>
            <b>onStart:</b> runs when an animation begins playing.{" "}
            <i>Real use:</i> Set a loading state, hide an initial overlay or
            disable a button while an entrance animation begins.
          </li>
          <li>
            <b>onComplete: </b>runs when the animation reaches its end.{" "}
            <i>Real use:</i>
            Reveal the next section, remove a temporary header, enable an
            interaction or mark an intro animation as complete.
          </li>
          <li>
            <b>onUpdate:</b> runs repeatedly as the animation's playhead
            updates. <i>Real use:</i> Update a progress indicator, a number
            counter, or a custom visualization as an animation progresses.
          </li>
          <li>
            <b>onRepeat:</b> runs each time an animation completes a repeat
            cycle. <i>Real use:</i> trigger small effects during looping
            animations, track cycles in a visualization, or synchronize repeated
            animation events.
          </li>
          <li>
            <b>onInterrupt: </b> runs when an animation is interrupted before
            completing normally, such as when it is killed. <i>Real use: </i>{" "}
            clean up animation-related state or debg cases where a menu, modal,
            or transition is cancelled.
          </li>
          <li>
            <b>onReverseComplete: </b> runs when a reversed animation reaches
            its beginning. <i> Real use: </i> reset a menu, restore an overlay,
            or clean up UI state after a closing animation finishes.
          </li>
        </ol>
      </div>
      {introFinished && (
        <div className="uppercase text-2xl text-amber-600">
          Animation Finished
        </div>
      )}
    </div>
  );
}
