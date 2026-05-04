import React from 'react';
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

function FeatureCard({ data, index }: { data: typeof FEATURES[0], index: number }) {
  return (
    <div
      className="group relative flex-shrink-0 w-72 h-[420px] p-6 flex flex-col justify-start rounded-[28px] overflow-hidden shadow-2xl border border-white/40 cursor-pointer origin-center transition-all duration-500 hover:brightness-110"
      style={{ backgroundColor: data.color }}
    >
      <div className="z-10 mt-2">
        <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-80 ${data.isDark ? 'text-white/70' : 'text-brandNavy/60'}`}>Primescore Suite</p>
        <h2 className={`font-display text-3xl font-black tracking-tight leading-tight transition-colors ${data.isDark ? 'text-white' : 'text-brandNavy'}`}>
          {data.title}
        </h2>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[60%] z-0 p-2 pointer-events-none">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover rounded-xl object-bottom transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Dynamic light reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none"></div>
    </div>
  );
}

export default function Carousel3D() {
  const rotationValue = useMotionValue(0);
  const rotation = useSpring(rotationValue, { stiffness: 30, damping: 20 });

  const totalCards = FEATURES.length;
  // Smaller radius brings cards closer together
  const radius = 600;

  const step = 360 / totalCards;

  // Smooth continuous rotation
  useAnimationFrame((_t, delta) => {
    // Rotate by 12 degrees per second (slightly faster smooth spin)
    const moveAmount = (delta / 1000) * 12;
    rotationValue.set(rotationValue.get() - moveAmount);
  });

  return (
    <div className="w-full bg-gray-50 overflow-hidden relative pt-20">
      <div className="text-center relative z-30 px-4">
        <h2 className="font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
          Everything you need,<br />in one place
        </h2>
        <p className="mt-4 text-lg text-textSecondary">
          A premium suite of tools to take back control of your financial future.
        </p>
      </div>

      <div
        className="relative w-full h-[500px] overflow-hidden flex items-center justify-center mt-10"
        style={{ perspective: "800px" }}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{ rotateY: rotation, transformStyle: "preserve-3d" }}
        >
          {FEATURES.map((lang, i) => {
            const angle = (i * step);
            return (
              <div
                key={lang.id}
                className="absolute"
                style={{
                  // Position cards on a large ring that surrounds the camera
                  transform: `rotateY(${angle}deg) translateZ(${radius}px) rotateY(180deg)`,
                  backfaceVisibility: 'hidden',
                  transformStyle: "preserve-3d"
                }}
              >
                <FeatureCard data={lang} index={i} />
              </div>
            );
          })}
        </motion.div>

        {/* Decorative center point / environment depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.7)_100%)] pointer-events-none z-10"></div>

        {/* Side fades */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-gray-50 via-gray-50/40 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-gray-50 via-gray-50/40 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}
