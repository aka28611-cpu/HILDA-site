'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'مریم احمدی', text: 'Hilda حس واقعی لوکس بودن را به من می‌دهد. هر بار که محصولی دریافت می‌کنم، شگفت‌زده می‌شوم.', role: 'مشتری دائمی' },
  { name: 'سارا محمدی', text: 'کیفیت و طراحی محصولات در سطح برندهای بین‌المللی است. Hilda را به همه دوستانم معرفی کرده‌ام.', role: 'طراح مد' },
  { name: 'نیلوفر رضایی', text: 'تجربه خرید از Hilda متفاوت از هر فروشگاه دیگری است. از بسته‌بندی تا کیفیت محصول، همه چیز عالیه.', role: 'مشتری جدید' },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 bg-h-charcoal text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 sm:mb-20">
          <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-white/30 font-light">نظرات</span>
          <div className="overflow-hidden mt-3">
            <motion.h2 initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              صدای مشتریان
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: i * 0.12 }}
              className="border-t border-white/10 pt-8">
              <p className="font-display text-lg sm:text-xl font-light leading-8 text-white/80 mb-8">"{t.text}"</p>
              <div>
                <div className="text-[11px] font-medium tracking-wider">{t.name}</div>
                <div className="text-[9px] text-white/30 mt-1 tracking-wider uppercase">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
