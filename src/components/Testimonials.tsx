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
        <span className="text-[10px] sm:text-[11px] text-h-gold tracking-[0.3em] uppercase font-medium">نظرات مشتریان</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-h-charcoal mt-2">
          آنچه <span className="text-gradient-gold italic font-semibold">مشتریان</span> می‌گویند
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-xl p-4 sm:p-5 hover:shadow-lg hover:shadow-h-gold/5 transition-all duration-500 group cursor-default">
            <Quote size={20} className="text-h-gold/15 mb-2.5 sm:mb-3 group-hover:text-h-gold/30 transition-colors" />
            <div className="flex mb-2">
              {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={10} className="fill-h-gold text-h-gold" />)}
            </div>
            <p className="text-[11px] sm:text-xs text-h-charcoal/55 font-light leading-6 sm:leading-6.5 mb-3 sm:mb-4">{t.text}</p>
            <div className="border-t border-h-border/40 pt-2.5 sm:pt-3 flex items-center gap-2">
              <span className="text-lg sm:text-xl">{t.avatar}</span>
              <div>
                <div className="text-[11px] sm:text-xs font-medium text-h-charcoal">{t.name}</div>
                <div className="text-[8px] sm:text-[9px] text-h-charcoal/30">{t.product}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
