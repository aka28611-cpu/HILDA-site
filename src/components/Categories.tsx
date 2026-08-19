'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const categories = [
  { id: 'bras', name: 'سوتین', desc: 'طراحی بی‌نقص', emoji: '🌸', bg: 'from-h-rose/8 to-h-blush/5' },
  { id: 'panties', name: 'شورت', desc: 'راحتی در هر حرکت', emoji: '🎀', bg: 'from-h-blush/6 to-transparent' },
  { id: 'sets', name: 'ست لانژری', desc: 'ست‌های شیک', emoji: '✨', bg: 'from-h-gold/6 to-h-gold-light/3' },
  { id: 'nightwear', name: 'نایت‌ور', desc: 'شب‌های زیبا', emoji: '🌙', bg: 'from-h-wine/8 to-h-rose/4' },
  { id: 'bodysuits', name: 'بادی', desc: 'ظاهری مدرن', emoji: '💫', bg: 'from-h-primary/4 to-transparent' },
  { id: 'hosiery', name: 'جوراب', desc: 'کامل‌کننده استایل', emoji: '🦢', bg: 'from-h-secondary/4 to-transparent' },
];

export default function Categories() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="text-center mb-10 sm:mb-14">
        <span className="text-[10px] sm:text-[11px] text-h-gold tracking-[0.3em] uppercase font-medium">مجموعه‌ها</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-h-charcoal mt-2">
          دسته‌بندی <span className="text-gradient-gold italic font-semibold">محصولات</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">
        {categories.map((cat, i) => (
          <motion.div key={cat.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: i * 0.06 }}>
            <Link href={`/products?category=${cat.id}`}>
              <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${cat.bg} border border-h-border/5 p-4 sm:p-6 lg:p-7 min-h-[140px] sm:min-h-[180px] lg:min-h-[220px] flex flex-col justify-between group transition-all duration-500 hover:shadow-lg hover:shadow-h-gold/5 hover:-translate-y-0.5 cursor-pointer`}>
                <div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl mb-2.5 sm:mb-3 block group-hover:scale-110 transition-transform duration-500">{cat.emoji}</span>
                  <h3 className="font-display text-base sm:text-lg lg:text-xl font-medium text-h-charcoal group-hover:text-h-gold transition-colors">{cat.name}</h3>
                  <p className="text-[10px] sm:text-xs text-h-charcoal/40 mt-1 font-light hidden sm:block">{cat.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-h-gold text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-500">
                  مشاهده <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
