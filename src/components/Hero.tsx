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
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ scale: imgScale, opacity: imgOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-h-cream via-h-blush/20 to-h-lavender/15" />
        {/* Decorative abstract shapes */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full border border-h-blush/15" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full border border-h-rose/10" />
        {/* Gradient orbs */}
        <div className="absolute top-[15%] right-[15%] w-[350px] h-[350px] bg-h-blush/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-h-wine/8 rounded-full blur-[80px]" />
        <div className="absolute top-[50%] left-[40%] w-[200px] h-[200px] bg-h-gold/8 rounded-full blur-[60px]" />
      </motion.div>

      {/* Overlay */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-h-cream/50 via-transparent to-h-cream" />

      {/* Content */}
      <motion.div style={{ y: textY }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div ref={textRef} className="max-w-4xl">
          {/* Tagline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-muted font-light">
              Lingerie · Est. 2025
            </span>
          </motion.div>

          {/* Main Title - Large Cinematic Typography */}
          <div className="mt-6 sm:mt-8 space-y-0">
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: '120%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
                className="font-display text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-light leading-[0.9] tracking-[-0.02em] text-h-charcoal">
                HILDA
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: '120%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.65 }}
                className="font-display text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-light italic text-h-rose/70 tracking-[0.05em]">
                زیبایی پنهان
              </motion.h2>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 sm:mt-10 text-[11px] sm:text-xs text-h-muted font-light leading-7 max-w-md mx-auto tracking-wide">
            لباس زیری که حس اعتماد به نفس و زیبایی را به شما هدیه می‌دهد.
            طراحی‌های منحصربه‌فرد، پارچه‌های درجه یک، و جزئیات بی‌نقص.
          </motion.p>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-premium">مشاهده مجموعه</Link>
            <Link href="/about" className="btn-outline-light">داستان ما</Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-[8px] tracking-[0.3em] uppercase text-h-muted/50">اسکرول</span>
          <div className="w-px h-8 bg-h-charcoal/10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
