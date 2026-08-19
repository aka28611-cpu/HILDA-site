'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';

function FloatingPetal({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: '-10%' }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, Math.sin(x) * 50, Math.cos(x) * -30, 0],
        rotate: [0, 360],
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, rgba(201, 120, 124, 0.4), rgba(232, 180, 184, 0.2))`,
          filter: 'blur(1px)',
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  useEffect(() => { setMounted(true); }, []);

  const petals = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 1.5,
    x: 5 + (i * 8),
    size: 6 + Math.random() * 10,
  }));

  return (
    <section ref={containerRef} className="relative h-[100dvh] min-h-[600px] max-h-[1200px] overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hilda-cream via-hilda-blush/15 to-hilda-lavender/20 hero-gradient-animated" />

        {/* Large Decorative Blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-hilda-blush/15 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-hilda-wine/8 rounded-full blur-[60px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[40%] left-[30%] w-[200px] h-[200px] bg-hilda-gold/8 rounded-full blur-[50px]"
        />

        {/* Floating Petals */}
        {mounted && petals.map((p, i) => (
          <FloatingPetal key={i} {...p} />
        ))}

        {/* Elegant Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1440 900">
          <path d="M0 450 Q360 350 720 450 Q1080 550 1440 450" stroke="#8B2252" strokeWidth="1" fill="none" />
          <path d="M0 350 Q360 250 720 350 Q1080 450 1440 350" stroke="#C9787C" strokeWidth="0.5" fill="none" />
          <path d="M0 550 Q360 450 720 550 Q1080 650 1440 550" stroke="#D4A574" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: opacity, opacity }} className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Right Side - Text */}
            <motion.div ref={textRef} style={{ y: textY }} className="text-right order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-hilda-wine/8 backdrop-blur-sm border border-hilda-wine/10 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles size={14} className="text-hilda-wine animate-pulse" />
                <span className="text-xs font-medium text-hilda-wine tracking-wide">
                  مجموعه جدید ۲۰۲۵
                </span>
              </motion.div>

              {/* Heading */}
              <div className="overflow-hidden mb-4">
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-light leading-[1.1] text-hilda-charcoal"
                >
                  زیبایی در
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-4">
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.55, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium italic text-gradient-rose leading-[1.1]"
                >
                  جزئیات
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-light leading-[1.1] text-hilda-charcoal"
                >
                  پنهان است
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="text-hilda-charcoal/55 text-[15px] md:text-base font-light leading-8 md:leading-9 max-w-md mb-10"
              >
                لباس زیری که نه تنها زیباست، بلکه حس راحتی و اعتماد به نفس
                را به شما هدیه می‌دهد. طراحی‌های منحصربه‌فرد Hilda برای
                زنانی که خودشان را دوست دارند.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.05, duration: 0.7 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <Link
                  href="/products"
                  className="btn-luxury bg-hilda-burgundy text-white rounded-full flex items-center gap-2.5 magnetic-btn text-sm sm:text-base"
                >
                  مشاهده محصولات
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/products?filter=new"
                  className="btn-luxury border-2 border-hilda-burgundy/20 text-hilda-burgundy rounded-full magnetic-btn text-sm sm:text-base hover:bg-hilda-burgundy/5"
                >
                  مجموعه جدید
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.3 }}
                className="flex gap-8 sm:gap-10 mt-12 sm:mt-14"
              >
                {[
                  { value: '+۱۰K', label: 'مشتری راضی' },
                  { value: '+۵۰۰', label: 'محصول متنوع' },
                  { value: '۴.۹', label: 'امتیاز ⭐' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4 + i * 0.15 }}
                  >
                    <div className="text-xl sm:text-2xl font-display font-semibold text-hilda-wine">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-hilda-charcoal/35 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Left Side - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[420px] lg:h-[520px]">
                {/* Main Visual Card */}
                <motion.div
                  animate={{ rotate: [0, 1, -1, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-[35%_35%_45%_45%] bg-gradient-to-br from-hilda-blush via-hilda-rose to-hilda-wine overflow-hidden shadow-2xl shadow-hilda-rose/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-hilda-burgundy/30 via-transparent to-white/10" />

                  {/* Abstract Luxury Pattern */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 520">
                    {/* Large H letter */}
                    <text x="210" y="240" textAnchor="middle" fill="white" fontFamily="Cormorant Garamond" fontSize="180" fontStyle="italic" opacity="0.15">H</text>
                    {/* Decorative circles */}
                    <circle cx="210" cy="160" r="90" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15" />
                    <circle cx="210" cy="160" r="60" fill="none" stroke="white" strokeWidth="0.3" opacity="0.1" />
                    <circle cx="210" cy="160" r="120" fill="none" stroke="white" strokeWidth="0.3" opacity="0.08" />
                    {/* Decorative lines */}
                    <path d="M100 380 Q210 350 320 380" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15" />
                    <path d="M130 400 Q210 375 290 400" fill="none" stroke="white" strokeWidth="0.3" opacity="0.1" />
                    {/* Small decorative elements */}
                    <circle cx="210" cy="80" r="3" fill="white" opacity="0.3" />
                    <circle cx="150" cy="420" r="2" fill="white" opacity="0.2" />
                    <circle cx="270" cy="420" r="2" fill="white" opacity="0.2" />
                  </svg>

                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/3 skew-x-[-20deg]"
                  />
                </motion.div>

                {/* Floating Card 1 - Top Right */}
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [2, 5, 2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass rounded-2xl p-3 sm:p-4 shadow-lg shadow-hilda-blush/10 z-10"
                >
                  <div className="text-2xl sm:text-3xl mb-1">🌸</div>
                  <div className="text-[10px] sm:text-xs font-medium text-hilda-charcoal">نرم و راحت</div>
                  <div className="text-[8px] text-hilda-charcoal/40 mt-0.5">۱۰۰٪ ابریشم</div>
                </motion.div>

                {/* Floating Card 2 - Bottom Left */}
                <motion.div
                  animate={{ y: [8, -8, 8], rotate: [-3, -1, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 -left-4 sm:-bottom-4 sm:-left-6 glass rounded-2xl p-3 sm:p-4 shadow-lg shadow-hilda-blush/10 z-10"
                >
                  <div className="text-2xl sm:text-3xl mb-1">💎</div>
                  <div className="text-[10px] sm:text-xs font-medium text-hilda-charcoal">لوکس و خاص</div>
                  <div className="text-[8px] text-hilda-charcoal/40 mt-0.5">طراحی اختصاصی</div>
                </motion.div>

                {/* Floating Badge - Right Middle */}
                <motion.div
                  animate={{ y: [-5, 12, -5], scale: [1, 1.05, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 -right-6 sm:-right-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-hilda-gold/15 to-hilda-goldLight/10 rounded-full backdrop-blur-sm border border-hilda-gold/20 flex items-center justify-center z-10"
                >
                  <span className="text-lg sm:text-xl">✨</span>
                </motion.div>

                {/* Floating Rating - Left */}
                <motion.div
                  animate={{ y: [5, -10, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-[30%] -left-8 sm:-left-12 glass rounded-xl px-3 py-2 shadow-lg z-10"
                >
                  <div className="flex gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 text-hilda-gold fill-hilda-gold" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <div className="text-[8px] text-hilda-charcoal/50">۴.۹ از ۵</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] sm:text-[10px] text-hilda-charcoal/25 tracking-[0.2em] uppercase font-light">
            اسکرول
          </span>
          <div className="w-[18px] sm:w-5 h-[28px] sm:h-8 rounded-full border border-hilda-charcoal/15 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-hilda-wine/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
