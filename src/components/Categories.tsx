'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const categories = [
  {
    id: 'bras',
    name: 'سوتین',
    description: 'طراحی بی‌نقص برای هر فرم',
    emoji: '内衣',
    gradient: 'from-hilda-wine/80 to-hilda-rose/60',
    bg: 'bg-gradient-to-br from-hilda-wine/10 to-hilda-rose/5',
  },
  {
    id: 'panties',
    name: 'شورت',
    description: 'راحتی در هر حرکت',
    emoji: '🎀',
    gradient: 'from-hilda-rose/80 to-hilda-blush/60',
    bg: 'bg-gradient-to-br from-hilda-rose/10 to-hilda-blush/5',
  },
  {
    id: 'sets',
    name: 'ست لانژری',
    description: 'ست‌های شیک و خاص',
    emoji: '✨',
    gradient: 'from-hilda-gold/80 to-hilda-goldLight/60',
    bg: 'bg-gradient-to-br from-hilda-gold/10 to-hilda-goldLight/5',
  },
  {
    id: 'nightwear',
    name: 'نایت‌ور',
    description: 'شب‌های راحت و زیبا',
    emoji: '🌙',
    gradient: 'from-hilda-burgundy/80 to-hilda-wine/60',
    bg: 'bg-gradient-to-br from-hilda-burgundy/10 to-hilda-wine/5',
  },
  {
    id: 'bodysuits',
    name: 'بادی',
    description: 'ظاهری خاص و مدرن',
    emoji: '💫',
    gradient: 'from-hilda-mauve/80 to-hilda-lavender/60',
    bg: 'bg-gradient-to-br from-hilda-mauve/10 to-hilda-lavender/5',
  },
  {
    id: 'hosiery',
    name: 'جوراب',
    description: 'کامل‌کننده استایل',
    emoji: '🦢',
    gradient: 'from-hilda-charcoal/80 to-hilda-dark/60',
    bg: 'bg-gradient-to-br from-hilda-charcoal/10 to-hilda-dark/5',
  },
];

export default function Categories() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sm text-hilda-rose tracking-widest uppercase font-light">
          مجموعه‌ها
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal mt-3">
          دسته‌بندی{' '}
          <span className="text-gradient-rose italic font-medium">
            محصولات
          </span>
        </h2>
        <p className="text-hilda-charcoal/50 mt-4 max-w-md mx-auto font-light">
          هر سلیقه‌ای که دارید، مجموعه‌ای مناسب شما داریم
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link href={`/products?category=${cat.id}`}>
              <div
                className={`category-card ${cat.bg} rounded-3xl p-6 md:p-8 min-h-[200px] md:min-h-[260px] flex flex-col justify-between group transition-all duration-500 hover:shadow-xl hover:shadow-hilda-blush/10`}
              >
                <div>
                  <span className="text-4xl md:text-5xl mb-4 block group-hover:scale-110 transition-transform duration-500 origin-right">
                    {cat.emoji}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-hilda-charcoal group-hover:text-hilda-wine transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-hilda-charcoal/50 mt-2 font-light">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-hilda-wine text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>مشاهده</span>
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
