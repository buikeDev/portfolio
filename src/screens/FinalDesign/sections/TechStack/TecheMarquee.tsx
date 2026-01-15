import {
  motion,
  useAnimationFrame,
  useMotionValue,
  PanInfo,
} from "framer-motion";
import { useState } from "react";

export default function TechMarquee() {
  const techStack = [
    { name: "React", logo: "/logo/react.png" },
    { name: "Next.js", logo: "/logo/nextjs.png" },
    { name: "TypeScript", logo: "/logo/ts.png" },
    { name: "JavaScript", logo: "/logo/javascript.png" },
    { name: "Node.js", logo: "/logo/nodejs.png" },
    { name: "CSS", logo: "/logo/css.png" },
    { name: "React Native", logo: "/logo/react.png" },
    { name: "AWS", logo: "/logo/aws.png" },
    { name: "Tailwind CSS", logo: "/logo/tailwind.png" },
  ];

  const x = useMotionValue(0);
  const [velocity, setVelocity] = useState(40);

  useAnimationFrame((_, delta) => {
    const moveBy = (velocity * delta) / 1000;
    x.set(x.get() - moveBy);

    // Loop reset
    if (x.get() <= -window.innerWidth / 2) {
      x.set(0);
    }
  });

  return (
    <div className="w-full py-6 overflow-hidden bg-black border-y border-color-3">
      <motion.div
        drag="x"
        dragElastic={0.1}
        dragMomentum={true}
        onDragEnd={(_event: PointerEvent, info: PanInfo) => {
          setVelocity(info.velocity.x * -0.5);
        }}
        style={{ x }}
        className="flex gap-12 w-max cursor-grab active:cursor-grabbing"
      >
        {[...techStack, ...techStack].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-transparent/5 backdrop-blur"
          >
            <img src={item.logo} alt={item.name} className="w-6 h-6" />
            <span className="text-sm text-white">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
