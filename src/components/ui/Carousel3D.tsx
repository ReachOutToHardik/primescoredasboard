
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'framer-motion';

const FEATURES = [
  { id: 1, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000' },
  { id: 2, image: 'https://images.unsplash.com/photo-1618005192329-0a823f4ec06e?q=80&w=1000' },
  { id: 3, image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000' },
  { id: 4, image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000' },
  { id: 5, image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000' },
  { id: 6, image: 'https://images.unsplash.com/photo-1614850523598-811484ff407f?q=80&w=1000' },
  { id: 7, image: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?q=80&w=1000' },
  { id: 8, image: 'https://images.unsplash.com/photo-1614851012101-7151f13a20bf?q=80&w=1000' },
  { id: 9, image: 'https://images.unsplash.com/photo-1614851012117-985827361a6c?q=80&w=1000' }
];

function FeatureCard({ image }: { image: string }) {
  return (
    <div
      className="group relative flex-shrink-0 w-96 h-[540px] rounded-[1rem] overflow-hidden shadow-2xl border border-white/10 cursor-pointer origin-center transition-all duration-500 hover:scale-[1.02] hover:brightness-110"
    >
      <img
        src={image}
        alt="Poster Placeholder"
        className="w-full h-full object-cover"
      />

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 border border-white/20 rounded-[1rem] pointer-events-none"></div>
    </div>
  );
}

export default function Carousel3D() {
  const rotationValue = useMotionValue(0);
  const rotation = useSpring(rotationValue, { stiffness: 30, damping: 20 });

  const displayFeatures = [...FEATURES, ...FEATURES].slice(0, -4);
  const totalCards = displayFeatures.length;
  // Larger radius makes the circle bigger
  const radius = 950;

  const step = 360 / totalCards;

  // Smooth continuous rotation
  useAnimationFrame((_t, delta) => {
    // Rotate by 12 degrees per second (slightly faster smooth spin)
    const moveAmount = (delta / 1000) * 12;
    rotationValue.set(rotationValue.get() - moveAmount);
  });

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gray-50 overflow-hidden pt-20">
      <div className="text-center relative z-30 px-4">
        <h2 className="font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
          Everything you need,<br />in one place
        </h2>
        <p className="mt-4 text-lg text-textSecondary">
          A premium suite of tools to take back control of your financial future.
        </p>
      </div>

      <div
        className="relative w-full h-[650px] overflow-hidden flex items-center justify-center mt-10"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{ rotateY: rotation, transformStyle: "preserve-3d" }}
        >
          {displayFeatures.map((lang, i) => {
            const angle = (i * step);
            return (
              <div
                key={`${lang.id}-${i}`}
                className="absolute"
                style={{
                  // Position cards on a large ring that surrounds the camera
                  transform: `rotateY(${angle}deg) translateZ(${radius}px) rotateY(180deg)`,
                  backfaceVisibility: 'hidden',
                  transformStyle: "preserve-3d"
                }}
              >
                <FeatureCard image={lang.image} />
              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
