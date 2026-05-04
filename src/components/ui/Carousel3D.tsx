
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'framer-motion';

const FEATURES = [
  { id: 1, title: 'Smart Dispute', color: '#f7f8fc', isDark: false, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Live Tracking', color: '#E41E26', isDark: true, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Coaching', color: '#16a34a', isDark: true, image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Secure Vault', color: '#222A59', isDark: true, image: 'https://images.unsplash.com/photo-1614064641936-3899897fa46b?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: 'Legal Prep', color: '#f3f4f6', isDark: false, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400' },
  { id: 6, title: 'Instant Alerts', color: '#ffedd5', isDark: false, image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=400' },
  { id: 7, title: 'Simulator', color: '#fce7f3', isDark: false, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
  { id: 8, title: '24/7 Support', color: '#e0e7ff', isDark: false, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
  { id: 9, title: 'Expert Review', color: '#dcfce7', isDark: false, image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400' }
];

function FeatureCard() {
  return (
    <div
      className="group relative flex-shrink-0 w-96 h-[540px] rounded-[1rem] overflow-hidden shadow-2xl border border-white/10 cursor-pointer origin-center transition-all duration-500 hover:scale-[1.02] hover:brightness-110"
    >
      <img
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000"
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
                <FeatureCard />
              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
