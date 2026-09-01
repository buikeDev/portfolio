import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  PanInfo,
} from "framer-motion";
import { useEffect, useRef } from "react";

const DEFAULT_SPEED = 40;
const MIN_SPEED = 20;
const MAX_SPEED = 120;

const techStack = [
  { id: "react", name: "React", logo: "/logo/react.png" },
  { id: "nextjs", name: "Next.js", logo: "/logo/nextjs.png" },
  { id: "typescript", name: "TypeScript", logo: "/logo/ts.png" },
  { id: "javascript", name: "JavaScript", logo: "/logo/javascript.png" },
  { id: "nodejs", name: "Node.js", logo: "/logo/nodejs.png" },
  { id: "css", name: "CSS", logo: "/logo/css.png" },
  { id: "react-native", name: "React Native", logo: "/logo/react.png" },
  { id: "aws", name: "AWS", logo: "/logo/aws.png" },
  { id: "tailwind", name: "Tailwind CSS", logo: "/logo/tailwind.png" },
];

export default function TechMarquee() {
  const x = useMotionValue(0);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);
  const speedRef = useRef(DEFAULT_SPEED);
  const isDraggingRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const firstSet = firstSetRef.current;
    if (!firstSet) return;

    const updateWidth = () => {
      setWidthRef.current = firstSet.getBoundingClientRect().width;
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(firstSet);

    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    const setWidth = setWidthRef.current;
    if (shouldReduceMotion || isDraggingRef.current || setWidth === 0) return;

    speedRef.current +=
      (DEFAULT_SPEED - speedRef.current) * Math.min(delta / 1000, 1);

    let nextX = x.get() - (speedRef.current * delta) / 1000;

    while (nextX <= -setWidth) nextX += setWidth;
    while (nextX > 0) nextX -= setWidth;
    x.set(nextX);
  });

  const renderTechSet = (copy: "first" | "second") => (
    <div
      ref={copy === "first" ? firstSetRef : undefined}
      className="flex shrink-0 gap-12 pr-12"
      aria-hidden={copy === "second"}
    >
      {techStack.map((item) => (
        <div
          key={`${copy}-${item.id}`}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-transparent/5 backdrop-blur"
        >
          <img src={item.logo} alt="" className="w-6 h-6" />
          <span className="text-sm text-white">{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="w-full py-6 overflow-hidden bg-black border-y border-color-3"
      aria-label="Technologies I use"
    >
      <motion.div
        drag={shouldReduceMotion ? false : "x"}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={(_event: PointerEvent, info: PanInfo) => {
          speedRef.current = Math.min(
            MAX_SPEED,
            Math.max(MIN_SPEED, Math.abs(info.velocity.x) * 0.25),
          );
          isDraggingRef.current = false;
        }}
        style={{ x }}
        className="flex w-max cursor-grab active:cursor-grabbing"
      >
        {renderTechSet("first")}
        {renderTechSet("second")}
      </motion.div>
    </div>
  );
}
