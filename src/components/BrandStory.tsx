'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Feather, Heart, Gem } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const values = [
    {
      icon: Feather,
      title: 'طراحی ظریف',
      desc: 'هر محصول با دقت و ظرافت طراحی شده تا حس زیبایی را به شما هدیه دهد',
    },
    {
      icon: Heart,
      title: 'راحتی بی‌نظیر',
      desc: 'جنس‌های باکیفیت و نرم که تمام روز راحت باشید',
    },
    {
      icon: Gem,
      title: 'کیفیت لوکس',
      desc: 'استفاده از بهترین مواد اولیه برای محصولی که ماندگار باشد',
    },
  ];

  return (
    <section ref={containerRef} className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hilda-cream via-hilda-blush/8 to-hilda-cream" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <motion.div style={{ y: y1 }} className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">
              {/* Main Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-6 sm:inset-8 rounded-full bg-gradient-to-br from-hilda-blush via-hilda-rose to-hilda-wine shadow-2xl shadow-hilda-rose/20"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-white/15 text-[80px] sm:text-[100px] lg:text-[120px] font-light italic">
                    H
                  </span>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-3 rounded-full border border-white/10" />
                <div className="absolute inset-6 rounded-full border border-white/5" />
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                style={{ y: y2 }}
                className="absolute -top-2 -right-2 sm:top-0 sm:right-0 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg z-10"
              >
                <div className="text-xl sm:text-2xl mb-1">🌸</div>
                <div className="text-[10px] sm:text-xs font-medium text-hilda-charcoal">طراحی خاص</div>
                <div className="text-[8px] text-hilda-charcoal/40 mt-0.5">۲۰۲۵</div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-2 -left-2 sm:bottom-6 sm:left-0 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg z-10"
              >
                <div className="text-xl sm:text-2xl mb-1">💎</div>
                <div className="text-[10px] sm:text-xs font-medium text-hilda-charcoal">کیفیت بالا</div>
                <div className="text-[8px] text-hilda-charcoal/40 mt-0.5">تضمین اصالت</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div ref={textRef} className="text-right order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] sm:text-xs text-hilda-rose tracking-[0.25em] uppercase font-light"
            >
              داستان ما
            </motion.span>
            <div className="overflow-hidden mt-3 sm:mt-4 mb-4 sm:mb-6">
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-hilda-charcoal"
              >
                ساخته شده با{' '}
                <span className="text-gradient-rose italic font-medium">عشق</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-hilda-charcoal/50 font-light leading-8 mb-8 sm:mb-10 text-sm sm:text-base"
            >
              Hilda با الهام از زیبایی طبیعی زنان و با هدف ارائه لباس زیری که
              هم راحت باشد و هم زیبا، متولد شد. ما باور داریم هر زنی لایق
              احساس زیبایی و اعتماد به نفس است.
            </motion.p>

            {/* Values */}
            <div className="space-y-5 sm:space-y-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-hilda-blush/10 flex items-center justify-center text-hilda-wine group-hover:bg-hilda-wine group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <value.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-hilda-charcoal mb-0.5 sm:mb-1">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-hilda-charcoal/45 font-light leading-6">
                      {value.desc}
                    </p>
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
