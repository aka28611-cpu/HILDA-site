'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

function Petal({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: '-5%' }}
      animate={{ y: ['0vh', '105vh'], x: [0, Math.sin(x) * 35, Math.cos(x) * -20, 0], rotate: [0, 360], opacity: [0, 0.5, 0.5, 0] }}
      transition={{ duration: 12 + Math.random() * 5, delay, repeat: Infinity, ease: 'linear' }}
    >
      <div className="rounded-full" style={{ width: size, height: size, background: `radial-gradient(circle, rgba(201, 120, 124, 0.3), rgba(232, 180, 184, 0.1))`, filter: 'blur(1px)' }} />
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  useEffect(() => setMounted(true), []);

  const petals = Array.from({ length: 10 }, (_, i) => ({ delay: i * 2, x: 5 + i * 9, size: 5 + Math.random() * 8 }));

  return (
    <section ref={ref} className="relative h-[100dvh] min-h-[600px] max-h-[1100px] overflow-hidden">
      {/* Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hilda-cream via-hilda-blush/15 to-hilda-lavender/20 hero-gradient-animated" />
        <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-[8%] right-[5%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-hilda-blush/15 rounded-full blur-[80px]" />
        <motion.div animate={{ x: [0, -20, 0], y: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-hilda-wine/8 rounded-full blur-[60px]" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-[40%] left-[30%] w-[150px] h-[150px] bg-hilda-gold/8 rounded-full blur-[50px]" />
        {mounted && petals.map((p, i) => <Petal key={i} {...p} />)}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 1440 900">
          <path d="M0 450 Q360 350 720 450 Q1080 550 1440 450" stroke="#8B2252" strokeWidth="1" fill="none" />
          <path d="M0 300 Q720 200 1440 300" stroke="#C9787C" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: opacity, opacity }} className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text */}
            <motion.div ref={textRef} style={{ y: textY }} className="text-right order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-hilda-wine/8 backdrop-blur-sm border border-hilda-wine/10 px-4 py-1.5 rounded-full mb-6 sm:mb-8">
                <Sparkles size={13} className="text-hilda-wine" />
                <span className="text-[10px] sm:text-[11px] font-medium text-hilda-wine tracking-[0.12em]">مجموعه جدید ۲۰۲۵</span>
              </motion.div>

              <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                {[
                  { text: 'زیبایی در', cls: 'text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] text-hilda-charcoal/85' },
                  { text: 'جزئیات', cls: 'text-[44px] sm:text-[58px] md:text-[72px] lg:text-[80px] font-semibold italic text-gradient-rose' },
                  { text: 'پنهان است', cls: 'text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] text-hilda-charcoal/85' },
                ].map((item, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1 initial={{ y: '110%', opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.35 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className={`font-display font-light leading-[1.05] ${item.cls}`}>{item.text}</motion.h1>
                  </div>
                ))}
              </div>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.85, duration: 0.6 }}
                className="text-hilda-charcoal/45 text-[13px] sm:text-sm font-light leading-8 max-w-md mb-8 sm:mb-10">
                لباس زیری که نه تنها زیباست، بلکه حس راحتی و اعتماد به نفس را به شما هدیه می‌دهد.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-3 sm:gap-4">
                <Link href="/products" className="btn-luxury bg-hilda-burgundy text-white rounded-full flex items-center gap-2 magnetic-btn text-xs sm:text-sm">
                  مشاهده محصولات <ArrowLeft size={16} />
                </Link>
                <Link href="/products?filter=new" className="btn-luxury border-2 border-hilda-burgundy/20 text-hilda-burgundy rounded-full magnetic-btn text-xs sm:text-sm hover:bg-hilda-burgundy/5">
                  مجموعه جدید
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }}
                className="flex gap-8 sm:gap-10 mt-12 sm:mt-14">
                {[{ v: '+۱۰K', l: 'مشتری راضی' }, { v: '+۵۰۰', l: 'محصول' }, { v: '۴.۹', l: 'امتیاز' }].map((s, i) => (
                  <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.3 + i * 0.1 }}>
                    <div className="text-lg sm:text-xl font-display font-semibold text-hilda-wine">{s.v}</div>
                    <div className="text-[9px] sm:text-[10px] text-hilda-charcoal/30 tracking-wider uppercase mt-0.5">{s.l}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.88, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[380px] lg:w-[400px] lg:h-[500px]">
                <motion.div animate={{ rotate: [0, 0.8, -0.8, 0] }} transition={{ duration: 10, repeat: Infinity }}
                  className="absolute inset-0 rounded-[30%_30%_42%_42%] overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #C9787C, #E8B4B8, #8B2252)', boxShadow: '0 25px 60px rgba(139, 34, 82, 0.2)' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-hilda-burgundy/30 via-transparent to-white/10" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
                    <text x="200" y="220" textAnchor="middle" fill="white" fontFamily="Cormorant" fontSize="160" fontStyle="italic" opacity="0.12">H</text>
                    <circle cx="200" cy="140" r="80" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
                    <circle cx="200" cy="140" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" />
                    <path d="M80 360 Q200 330 320 360" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  </svg>
                  <motion.div animate={{ x: ['-120%', '220%'] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 w-1/4 skew-x-[-20deg]" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
                </motion.div>

                {/* Floating Cards */}
                <motion.div animate={{ y: [-6, 6, -6], rotate: [1, 3, 1] }} transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 glass rounded-xl p-3 sm:p-4 shadow-lg z-10 cursor-default">
                  <div className="text-xl sm:text-2xl mb-1">🌸</div>
                  <div className="text-[9px] sm:text-[10px] font-medium text-hilda-charcoal">نرم و راحت</div>
                  <div className="text-[7px] text-hilda-charcoal/40 mt-0.5">۱۰۰٪ ابریشم</div>
                </motion.div>

                <motion.div animate={{ y: [6, -6, 6], rotate: [-2, 0, -2] }} transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -bottom-2 -left-3 sm:-bottom-3 sm:-left-5 glass rounded-xl p-3 sm:p-4 shadow-lg z-10 cursor-default">
                  <div className="text-xl sm:text-2xl mb-1">💎</div>
                  <div className="text-[9px] sm:text-[10px] font-medium text-hilda-charcoal">لوکس و خاص</div>
                  <div className="text-[7px] text-hilda-charcoal/40 mt-0.5">طراحی اختصاصی</div>
                </motion.div>

                <motion.div animate={{ y: [-4, 10, -4], scale: [1, 1.05, 1] }} transition={{ duration: 7, repeat: Infinity }}
                  className="absolute top-[40%] -right-6 sm:-right-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10"
                  style={{ background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.15), rgba(232, 201, 160, 0.1))', border: '1px solid rgba(212, 165, 116, 0.2)', backdropFilter: 'blur(8px)' }}>
                  <span className="text-base sm:text-lg">✨</span>
                </motion.div>

                <motion.div animate={{ y: [4, -8, 4] }} transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute top-[25%] -left-6 sm:-left-10 glass rounded-lg px-2.5 py-1.5 shadow-lg z-10 cursor-default">
                  <div className="flex gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => <svg key={i} className="w-2 h-2 fill-hilda-gold text-hilda-gold" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <div className="text-[7px] text-hilda-charcoal/40">۴.۹ از ۵</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-1.5">
          <span className="text-[8px] sm:text-[9px] text-hilda-charcoal/20 tracking-[0.2em] uppercase font-light">اسکرول</span>
          <div className="w-4 h-7 rounded-full border border-hilda-charcoal/15 flex items-start justify-center p-1">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-1 rounded-full bg-hilda-wine/50" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
