'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

/* ── Floating Petals ──────────────────────────────── */
function Petal({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: '-5%' }}
      animate={{
        y: ['0vh', '105vh'],
        x: [0, Math.sin(x) * 40, Math.cos(x) * -25, 0],
        rotate: [0, 360],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{ duration: 10 + Math.random() * 5, delay, repeat: Infinity, ease: 'linear' }}
    >
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, rgba(161, 98, 7, 0.25), rgba(212, 165, 116, 0.1))`,
          filter: 'blur(1px)',
        }}
      />
    </motion.div>
  );
}

/* ── Hero Component ───────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  useEffect(() => setMounted(true), []);

  const petals = Array.from({ length: 10 }, (_, i) => ({
    delay: i * 2,
    x: 5 + i * 9,
    size: 5 + Math.random() * 8,
  }));

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[600px] max-h-[1100px] overflow-hidden">
      {/* ── Animated Background ── */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-h-charcoal via-h-primary to-h-dark hero-gradient-animated" style={{ backgroundSize: '400% 400%' }} />

        {/* Accent blobs */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[8%] right-[8%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(161, 98, 7, 0.15), transparent)' }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[12%] left-[5%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(201, 120, 124, 0.1), transparent)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[45%] left-[25%] w-[150px] h-[150px] rounded-full blur-[60px]"
          style={{ background: 'radial-gradient(circle, rgba(161, 98, 7, 0.08), transparent)' }}
        />

        {/* Petals */}
        {mounted && petals.map((p, i) => <Petal key={i} {...p} />)}

        {/* Subtle grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 1440 900">
          <path d="M0 450 Q360 350 720 450 Q1080 550 1440 450" stroke="#A16207" strokeWidth="1" fill="none" />
          <path d="M0 300 Q720 200 1440 300" stroke="#D4A574" strokeWidth="0.5" fill="none" />
        </svg>

        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      {/* ── Content ── */}
      <motion.div style={{ y: opacity, opacity }} className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* ── Text (Right in RTL) ── */}
            <motion.div ref={textRef} style={{ y: textY }} className="text-right order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 sm:mb-8"
                style={{ background: 'rgba(161, 98, 7, 0.1)', border: '1px solid rgba(161, 98, 7, 0.15)' }}
              >
                <Sparkles size={13} className="text-h-accent" />
                <span className="text-[10px] sm:text-[11px] font-medium text-h-accent tracking-[0.15em] uppercase">
                  مجموعه جدید ۲۰۲۵
                </span>
              </motion.div>

              {/* Heading — Exaggerated Minimalism style */}
              <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                {['زیبایی در', 'جزئیات', 'پنهان است'].map((text, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ y: '110%', opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.35 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className={`font-display font-light leading-[1.05] ${
                        i === 1
                          ? 'text-[44px] sm:text-[58px] md:text-[72px] lg:text-[80px] font-semibold italic text-gradient-gold'
                          : 'text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] text-white/90'
                      }`}
                    >
                      {text}
                    </motion.h1>
                  </div>
                ))}
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="text-white/40 text-[13px] sm:text-sm font-light leading-8 max-w-md mb-8 sm:mb-10"
              >
                لباس زیری که نه تنها زیباست، بلکه حس راحتی و اعتماد به نفس
                را به شما هدیه می‌دهد. طراحی‌های منحصربه‌فرد Hilda برای
                زنانی که خودشان را دوست دارند.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <Link
                  href="/products"
                  className="btn-luxury bg-h-gold text-white rounded-sm flex items-center gap-2 magnetic-btn text-xs sm:text-sm hover:shadow-lg hover:shadow-h-gold/20"
                >
                  مشاهده محصولات
                  <ArrowLeft size={16} />
                </Link>
                <Link
                  href="/products?filter=new"
                  className="btn-luxury border border-white/15 text-white/70 rounded-sm magnetic-btn text-xs sm:text-sm hover:bg-white/5 hover:text-white"
                >
                  مجموعه جدید
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="flex gap-8 sm:gap-10 mt-12 sm:mt-14"
              >
                {[
                  { value: '+۱۰K', label: 'مشتری راضی' },
                  { value: '+۵۰۰', label: 'محصول' },
                  { value: '۴.۹', label: 'امتیاز' },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.3 + i * 0.1 }}
                  >
                    <div className="text-lg sm:text-xl font-display font-semibold text-h-gold">{s.value}</div>
                    <div className="text-[9px] sm:text-[10px] text-white/25 tracking-wider uppercase mt-0.5">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Visual (Left in RTL) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[380px] lg:w-[400px] lg:h-[500px]">
                {/* Main Visual Card — Glassmorphism */}
                <motion.div
                  animate={{ rotate: [0, 0.8, -0.8, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-[30%_30%_42%_42%] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(161, 98, 7, 0.3), rgba(201, 120, 124, 0.2), rgba(139, 34, 82, 0.3))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Inner H pattern */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
                    <text x="200" y="220" textAnchor="middle" fill="white" fontFamily="Cormorant" fontSize="160" fontStyle="italic" opacity="0.12">H</text>
                    <circle cx="200" cy="140" r="80" fill="none" stroke="rgba(161, 98, 7, 0.2)" strokeWidth="0.5" />
                    <circle cx="200" cy="140" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" />
                    <circle cx="200" cy="140" r="110" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
                    <path d="M80 360 Q200 330 320 360" fill="none" stroke="rgba(161, 98, 7, 0.15)" strokeWidth="0.5" />
                    <circle cx="200" cy="60" r="2.5" fill="rgba(161, 98, 7, 0.4)" />
                  </svg>

                  {/* Shimmer */}
                  <motion.div
                    animate={{ x: ['-120%', '220%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                    className="absolute inset-0 w-1/4 skew-x-[-20deg]"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
                  />
                </motion.div>

                {/* Floating Glass Card 1 */}
                <motion.div
                  animate={{ y: [-6, 6, -6], rotate: [1, 3, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 glass rounded-xl p-3 sm:p-4 shadow-lg z-10"
                >
                  <div className="text-xl sm:text-2xl mb-1">🌸</div>
                  <div className="text-[9px] sm:text-[10px] font-medium text-h-charcoal">نرم و راحت</div>
                  <div className="text-[7px] text-h-charcoal/40 mt-0.5">۱۰۰٪ ابریشم</div>
                </motion.div>

                {/* Floating Glass Card 2 */}
                <motion.div
                  animate={{ y: [6, -6, 6], rotate: [-2, 0, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 -left-3 sm:-bottom-3 sm:-left-5 glass rounded-xl p-3 sm:p-4 shadow-lg z-10"
                >
                  <div className="text-xl sm:text-2xl mb-1">💎</div>
                  <div className="text-[9px] sm:text-[10px] font-medium text-h-charcoal">لوکس و خاص</div>
                  <div className="text-[7px] text-h-charcoal/40 mt-0.5">طراحی اختصاصی</div>
                </motion.div>

                {/* Gold Badge */}
                <motion.div
                  animate={{ y: [-4, 10, -4], scale: [1, 1.05, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-[40%] -right-6 sm:-right-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10 animate-pulse-gold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(161, 98, 7, 0.2), rgba(212, 165, 116, 0.15))',
                    border: '1px solid rgba(161, 98, 7, 0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-base sm:text-lg">✨</span>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  animate={{ y: [4, -8, 4] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-[25%] -left-6 sm:-left-10 glass rounded-lg px-2.5 py-1.5 shadow-lg z-10"
                >
                  <div className="flex gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-2 h-2 fill-h-gold text-h-gold" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <div className="text-[7px] text-h-charcoal/40">۴.۹ از ۵</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-1.5">
          <span className="text-[8px] sm:text-[9px] text-white/20 tracking-[0.25em] uppercase font-light">اسکرول</span>
          <div className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center p-1">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-1 rounded-full bg-h-gold/50" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
