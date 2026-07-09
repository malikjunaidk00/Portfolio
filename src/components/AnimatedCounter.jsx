import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return undefined;
    }

    if (isInView) {
      setShouldAnimate(true);
    }

    const fallback = window.setTimeout(() => setShouldAnimate(true), 500);
    return () => window.clearTimeout(fallback);
  }, [isInView, shouldReduceMotion, value]);

  useEffect(() => {
    if (shouldReduceMotion || !shouldAnimate) {
      return undefined;
    }

    let frame = 0;
    let startTime = 0;
    const duration = value > 100 ? 1400 : 1000;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldAnimate, shouldReduceMotion, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
