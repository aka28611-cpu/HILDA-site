'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ scale: imgScale, opacity: imgOpacity }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=1200&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-h-cream/70 via-h-cream/40 to-h-cream" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: textY }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div ref={textRef} className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-textLight font-medium">
              Lingerie · Collection 2025
            </span>
          </motion.div>

          <div className="mt-6 sm:mt-8 space-y-0">
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: '120%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                className="font-display text-[52px] sm:text-[76px] md:text-[100px] lg:text-[130px] font-light leading-[0.9] tracking-[-0.02em] text-h-charcoal">
                HILDA
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: '120%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.65 }}
                className="font-display text-[22px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-light italic text-h-wine tracking-[0.02em]">
                زیبایی پنهان
              </motion.h2>
            </div>
          </div>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 sm:mt-10 text-[12px] sm:text-[13px] text-h-textLight font-light leading-8 max-w-lg mx-auto">
            لباس زیری که حس اعتماد به نفس و زیبایی را به شما هدیه می‌دهد.
            طراحی‌های منحصربه‌فرد، پارچه‌های درجه یک، و جزئیات بی‌نقص.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-primary">مشاهده مجموعه</Link>
            <Link href="/about" className="btn-outline">داستان ما</Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-[8px] tracking-[0.3em] uppercase text-h-textMuted">اسکرول</span>
          <div className="w-px h-8 bg-h-charcoal/10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
