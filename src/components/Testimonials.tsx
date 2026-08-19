'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'مریم احمدی',
    avatar: '👩',
    rating: 5,
    text: 'کیفیت محصولات Hilda واقعاً بی‌نظیره. از اولین خریدم عاشقش شدم و هر بار با اشتیاق سفارش میدم.',
    product: 'ست لانژری رز گلد',
  },
  {
    name: 'سارا محمدی',
    avatar: '👩‍🦰',
    rating: 5,
    text: 'راحت‌ترین لباس زیریه که تا حالا پوشیدم. طراحی‌هاش خیلی شیک و خاصه.',
    product: 'سوتین بی‌نیاز ابریشمی',
  },
  {
    name: 'نیلوفر رضایی',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'ارسال سریع، بسته‌بندی شیک، و محصول عالی! تجربه خرید از Hilda واقعاً لذت‌بخشه.',
    product: 'نایت‌ور ساتن مشکی',
  },
  {
    name: 'النا کریمی',
    avatar: '👱‍♀️',
    rating: 5,
    text: 'طراحی‌های Hilda با هیچ برند دیگه‌ای قابل مقایسه نیست. واقعاً حس لوکس بودن بهت میده.',
    product: 'بادی توری کلاسیک',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="text-[11px] sm:text-xs text-hilda-rose tracking-[0.25em] uppercase font-light">
          نظرات مشتریان
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-hilda-charcoal mt-3">
          آنچه{' '}
          <span className="text-gradient-rose italic font-medium">
            مشتریان
          </span>{' '}
          می‌گویند
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:shadow-xl hover:shadow-hilda-blush/8 transition-all duration-500 group"
          >
            <Quote size={24} className="text-hilda-blush/25 mb-3 sm:mb-4 group-hover:text-hilda-rose/40 transition-colors" />

            <div className="flex mb-2.5 sm:mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={12} className="fill-hilda-gold text-hilda-gold" />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-hilda-charcoal/60 font-light leading-6 sm:leading-7 mb-4 sm:mb-5">
              {t.text}
            </p>

            <div className="border-t border-hilda-blush/15 pt-3 sm:pt-4 flex items-center gap-2.5 sm:gap-3">
              <span className="text-xl sm:text-2xl">{t.avatar}</span>
              <div>
                <div className="text-xs sm:text-sm font-medium text-hilda-charcoal">{t.name}</div>
                <div className="text-[10px] sm:text-xs text-hilda-charcoal/35">{t.product}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
