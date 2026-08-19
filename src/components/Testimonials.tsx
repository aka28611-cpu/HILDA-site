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
    text: 'راحت‌ترین لباس زیریه که تا حالا پوشیدم. طراحی‌هاش خیلی شیک و خاصه. به همه دوستام معرفی کردم.',
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-hilda-rose tracking-widest uppercase font-light">
          نظرات مشتریان
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal mt-3">
          آنچه{' '}
          <span className="text-gradient-rose italic font-medium">
            مشتریان
          </span>{' '}
          می‌گویند
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass rounded-3xl p-6 hover:shadow-xl hover:shadow-hilda-blush/10 transition-all duration-500 group"
          >
            <Quote size={28} className="text-hilda-blush/30 mb-4 group-hover:text-hilda-rose/50 transition-colors" />

            <div className="flex mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-hilda-gold text-hilda-gold" />
              ))}
            </div>

            <p className="text-sm text-hilda-charcoal/70 font-light leading-7 mb-4">
              {t.text}
            </p>

            <div className="border-t border-hilda-blush/20 pt-4 flex items-center gap-3">
              <span className="text-2xl">{t.avatar}</span>
              <div>
                <div className="text-sm font-medium text-hilda-charcoal">{t.name}</div>
                <div className="text-xs text-hilda-charcoal/40">{t.product}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
