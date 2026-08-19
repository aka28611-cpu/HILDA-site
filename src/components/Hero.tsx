'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-hilda-cream via-hilda-blush/20 to-hilda-lavender/30" />

        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-hilda-blush/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-hilda-wine/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-hilda-gold/10 rounded-full blur-3xl animate-pulse-soft" />

        {/* Decorative Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1440 900">
          <path d="M0 450 Q360 350 720 450 Q1080 550 1440 450" stroke="#8B2252" strokeWidth="1" fill="none" />
          <path d="M0 350 Q360 250 720 350 Q1080 450 1440 350" stroke="#C9787C" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-right order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-hilda-wine/10 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles size={16} className="text-hilda-wine" />
                <span className="text-sm font-medium text-hilda-wine">
                  مجموعه جدید ۲۰۲۵
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] mb-6"
              >
                <span className="text-hilda-charcoal">زیبایی در</span>
                <br />
                <span className="text-gradient-rose font-medium italic">
                  جزئیات
                </span>
                <br />
                <span className="text-hilda-charcoal">پنهان است</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-hilda-charcoal/60 text-lg font-light leading-8 max-w-lg mb-8"
              >
                لباس زیری که نه تنها زیباست، بلکه حس راحتی و اعتماد به نفس
                را به شما هدیه می‌دهد. طراحی‌های منحصربه‌فرد Hilda برای
                زنانی که خودشان را دوست دارند.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/products"
                  className="btn-luxury bg-hilda-burgundy text-white rounded-full flex items-center gap-2 group"
                >
                  مشاهده محصولات
                  <ArrowLeft
                    size={18}
                    className="group-hover:-translate-x-1 transition-transform duration-300"
                  />
                </Link>
                <Link
                  href="/products?filter=new"
                  className="btn-luxury border-2 border-hilda-burgundy/30 text-hilda-burgundy rounded-full"
                >
                  مجموعه جدید
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex gap-8 mt-12"
              >
                {[
                  { value: '+۱۰K', label: 'مشتری راضی' },
                  { value: '+۵۰۰', label: 'محصول متنوع' },
                  { value: '۴.۹', label: 'امتیاز ⭐' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-display font-semibold text-hilda-wine">
                      {stat.value}
                    </div>
                    <div className="text-xs text-hilda-charcoal/40 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Left Side - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="relative order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-80 h-96 lg:w-[450px] lg:h-[550px]">
                {/* Main Shape */}
                <div className="absolute inset-0 rounded-[40%_40%_50%_50%] bg-gradient-to-br from-hilda-blush via-hilda-rose to-hilda-wine overflow-hidden shadow-2xl shadow-hilda-rose/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-hilda-burgundy/30 to-transparent" />

                  {/* Abstract Pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500">
                    <circle cx="200" cy="150" r="80" fill="white" opacity="0.1" />
                    <circle cx="200" cy="150" r="50" fill="white" opacity="0.15" />
                    <path d="M120 300 Q200 250 280 300 Q200 350 120 300Z" fill="white" opacity="0.1" />
                    <text x="200" y="200" textAnchor="middle" fill="white" fontFamily="Cormorant Garamond" fontSize="120" fontStyle="italic" opacity="0.3">H</text>
                  </svg>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl shadow-hilda-blush/20 flex items-center justify-center rotate-12"
                >
                  <div className="text-center">
                    <div className="text-2xl">🌸</div>
                    <div className="text-[8px] text-hilda-charcoal/50 mt-1">نرم و راحت</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-28 h-28 bg-white rounded-2xl shadow-xl shadow-hilda-blush/20 flex items-center justify-center -rotate-6"
                >
                  <div className="text-center">
                    <div className="text-2xl">💎</div>
                    <div className="text-[8px] text-hilda-charcoal/50 mt-1">لوکس و خاص</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-1/2 -right-10 w-20 h-20 bg-hilda-gold/10 rounded-full backdrop-blur-sm border border-hilda-gold/30 flex items-center justify-center"
                >
                  <div className="text-xl">✨</div>
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-hilda-charcoal/30 tracking-widest uppercase">
            اسکرول کنید
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-hilda-charcoal/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-hilda-wine"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
