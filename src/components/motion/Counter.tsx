"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
