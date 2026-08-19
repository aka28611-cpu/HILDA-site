'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Feather, Heart, Gem } from 'lucide-react';

const values = [
  { icon: Feather, title: 'طراحی ظریف', desc: 'هر محصول با دقت و ظرافت طراحی شده' },
  { icon: Heart, title: 'راحتی بی‌نظیر', desc: 'جنس‌های باکیفیت و نرم برای تمام روز' },
  { icon: Gem, title: 'کیفیت لوکس', desc: 'بهترین مواد اولیه برای ماندگاری' },
];

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-hilda-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div style={{ y: y1 }} className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="absolute inset-5 sm:inset-7 rounded-full shadow-2xl shadow-hilda-rose/20"
                style={{ background: 'linear-gradient(135deg, #E8B4B8, #C9787C, #8B2252)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-white/15 text-[70px] sm:text-[90px] lg:text-[110px] font-light italic">H</span>
                </div>
                <div className="absolute inset-3 rounded-full border border-white/10" />
              </motion.div>
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-1 -right-1 sm:top-0 sm:right-0 glass rounded-xl p-3 sm:p-3.5 shadow-lg z-10 cursor-default">
                <div className="text-lg sm:text-xl mb-0.5">🌸</div>
                <div className="text-[9px] sm:text-[10px] font-medium text-hilda-charcoal">طراحی خاص</div>
              </motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-1 -left-1 sm:bottom-4 sm:left-0 glass rounded-xl p-3 sm:p-3.5 shadow-lg z-10 cursor-default">
                <div className="text-lg sm:text-xl mb-0.5">💎</div>
                <div className="text-[9px] sm:text-[10px] font-medium text-hilda-charcoal">کیفیت بالا</div>
              </motion.div>
            </div>
          </motion.div>

          <div ref={textRef} className="text-right order-1 lg:order-2">
            <motion.span initial={{ opacity: 0, x: 15 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}
              className="text-[10px] sm:text-[11px] text-hilda-rose tracking-[0.25em] uppercase font-light">داستان ما</motion.span>
            <div className="overflow-hidden mt-2 sm:mt-3 mb-3 sm:mb-5">
              <motion.h2 initial={{ y: '110%', opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-hilda-charcoal">
                ساخته شده با <span className="text-gradient-rose italic font-semibold">عشق</span>
              </motion.h2>
            </div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
              className="text-hilda-charcoal/45 font-light leading-7 sm:leading-8 mb-6 sm:mb-8 text-xs sm:text-sm">
              Hilda با هدف ارائه لباس زیری متولد شد که هم زیبا باشد، هم راحت، و به شما احساس اعتماد به نفس بدهد.
            </motion.p>
            <div className="space-y-4 sm:space-y-5">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }} className="flex items-start gap-3 group cursor-default">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-hilda-wine/8 flex items-center justify-center text-hilda-wine group-hover:bg-hilda-wine group-hover:text-white transition-all duration-400 flex-shrink-0">
                    <v.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-hilda-charcoal">{v.title}</h3>
                    <p className="text-[10px] sm:text-[11px] text-hilda-charcoal/40 font-light mt-0.5">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
