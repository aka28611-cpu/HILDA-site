'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <motion.div style={{ y: imgY }} className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-h-blush/30 via-h-rose/20 to-h-wine/15 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[140px] sm:text-[180px] font-light text-h-charcoal/[0.04]">H</span>
              </div>
              {/* Floating elements */}
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass rounded-lg p-4 shadow-lg z-10">
                <div className="text-2xl mb-1">🌸</div>
                <div className="text-[9px] font-medium text-h-charcoal">طراحی ظریف</div>
              </motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass rounded-lg p-4 shadow-lg z-10">
                <div className="text-2xl mb-1">💎</div>
                <div className="text-[9px] font-medium text-h-charcoal">کیفیت بالا</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div style={{ opacity: textOpacity }} className="order-1 lg:order-2">
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-muted font-light">داستان ما</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-h-charcoal mt-4 mb-8 leading-tight">
              ساخته شده با<br />
              <span className="italic text-h-rose/70">عشق و ظرافت</span>
            </h2>
            <div className="space-y-5">
              <p className="text-xs sm:text-[13px] text-h-muted font-light leading-8">
                Hilda با الهام از زیبایی طبیعی زنان متولد شد. ما باور داریم هر زنی
                لایق احساس زیبایی و اعتماد به نفس است.
              </p>
              <p className="text-xs sm:text-[13px] text-h-muted font-light leading-8">
                هر محصول با دقت طراحی و تولید می‌شود تا ترکیبی بی‌نقص از
                راحتی، زیبایی و کیفیت را ارائه دهد.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              {[{ v: '+۱۰K', l: 'مشتری' }, { v: '+۵۰۰', l: 'محصول' }, { v: '۴.۹', l: 'امتیاز' }].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl sm:text-3xl font-light text-h-charcoal">{s.v}</div>
                  <div className="text-[9px] text-h-muted/50 mt-1 tracking-wider uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
