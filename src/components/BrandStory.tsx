'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div style={{ y: imgY }} className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-lg mx-auto overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&q=80"
                alt="Hilda Brand"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass rounded-lg p-4 shadow-lg z-10">
              <div className="text-xl mb-1">✨</div>
              <div className="text-[10px] font-medium text-h-text">کیفیت تضمینی</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div style={{ opacity: textOpacity }} className="order-1 lg:order-2">
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-textMuted font-medium">داستان ما</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-h-charcoal mt-4 mb-8 leading-tight">
              ساخته شده با<br />
              <span className="italic text-h-wine">عشق و ظرافت</span>
            </h2>
            <div className="space-y-5">
              <p className="text-[13px] text-h-textLight leading-8">
                Hilda با الهام از زیبایی طبیعی زنان متولد شد. ما باور داریم هر زنی
                لایق احساس زیبایی و اعتماد به نفس است.
              </p>
              <p className="text-[13px] text-h-textLight leading-8">
                هر محصول با دقت طراحی و تولید می‌شود تا ترکیبی بی‌نقص از
                راحتی، زیبایی و کیفیت را ارائه دهد.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              {[{ v: '+۱۰K', l: 'مشتری' }, { v: '+۵۰۰', l: 'محصول' }, { v: '۴.۹', l: 'امتیاز' }].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl sm:text-3xl font-light text-h-charcoal">{s.v}</div>
                  <div className="text-[9px] text-h-textMuted mt-1 tracking-wider uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
