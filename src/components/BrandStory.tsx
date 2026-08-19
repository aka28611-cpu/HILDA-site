'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Feather, Heart, Gem } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

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
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hilda-cream via-hilda-blush/10 to-hilda-cream" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div style={{ y: y1 }} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-8 rounded-full bg-gradient-to-br from-hilda-blush via-hilda-rose to-hilda-wine shadow-2xl shadow-hilda-rose/20"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-white/20 text-[120px] font-light italic">
                    H
                  </span>
                </div>
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                style={{ y: y2 }}
                className="absolute top-0 right-0 glass rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl mb-1">🌸</div>
                <div className="text-xs font-medium text-hilda-charcoal">طراحی خاص</div>
                <div className="text-[10px] text-hilda-charcoal/50">۲۰۲۵</div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                style={{ y: y2 }}
                className="absolute bottom-8 left-0 glass rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl mb-1">💎</div>
                <div className="text-xs font-medium text-hilda-charcoal">کیفیت بالا</div>
                <div className="text-[10px] text-hilda-charcoal/50">تضمین اصالت</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div style={{ opacity }} className="text-right">
            <span className="text-sm text-hilda-rose tracking-widest uppercase font-light">
              داستان ما
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal mt-4 mb-6">
              ساخته شده با{' '}
              <span className="text-gradient-rose italic font-medium">عشق</span>
            </h2>
            <p className="text-hilda-charcoal/60 font-light leading-8 mb-8">
              Hilda با الهام از زیبایی طبیعی زنان و با هدف ارائه لباس زیری که
              هم راحت باشد و هم زیبا، متولد شد. ما باور داریم هر زنی لایق
              احساس زیبایی و اعتماد به نفس است.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-hilda-blush/15 flex items-center justify-center text-hilda-wine group-hover:bg-hilda-wine group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <value.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-medium text-hilda-charcoal mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-hilda-charcoal/50 font-light leading-6">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
