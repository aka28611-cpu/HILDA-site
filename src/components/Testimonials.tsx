'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'مریم احمدی', avatar: '👩', rating: 5, text: 'کیفیت محصولات Hilda واقعاً بی‌نظیره. از اولین خریدم عاشقش شدم.', product: 'ست لانژری رز گلد' },
  { name: 'سارا محمدی', avatar: '👩‍🦰', rating: 5, text: 'راحت‌ترین لباس زیریه که تا حالا پوشیدم. طراحی‌هاش خیلی شیکه.', product: 'سوتین بی‌نیاز' },
  { name: 'نیلوفر رضایی', avatar: '👩‍🦱', rating: 5, text: 'ارسال سریع، بسته‌بندی شیک، و محصول عالی!', product: 'نایت‌ور ساتن مشکی' },
  { name: 'النا کریمی', avatar: '👱‍♀️', rating: 5, text: 'طراحی‌های Hilda واقعاً حس لوکس بودن بهت میده.', product: 'بادی توری' },
];

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="text-center mb-10 sm:mb-14">
        <span className="text-[10px] sm:text-[11px] text-hilda-rose tracking-[0.25em] uppercase font-light">نظرات مشتریان</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-hilda-charcoal mt-2">
          آنچه <span className="text-gradient-rose italic font-semibold">مشتریان</span> می‌گویند
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:shadow-hilda-blush/10 transition-all duration-500 cursor-default">
            <Quote size={20} className="text-hilda-blush/30 mb-2.5 sm:mb-3" />
            <div className="flex mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={10} className="fill-hilda-gold text-hilda-gold" />)}</div>
            <p className="text-[11px] sm:text-xs text-hilda-charcoal/55 font-light leading-6 mb-3 sm:mb-4">{t.text}</p>
            <div className="border-t border-hilda-blush/15 pt-2.5 sm:pt-3 flex items-center gap-2">
              <span className="text-lg sm:text-xl">{t.avatar}</span>
              <div>
                <div className="text-[11px] sm:text-xs font-medium text-hilda-charcoal">{t.name}</div>
                <div className="text-[8px] sm:text-[9px] text-hilda-charcoal/30">{t.product}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
