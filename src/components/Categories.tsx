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
    emoji: '🌸',
    gradient: 'from-hilda-rose/8 to-hilda-blush/5',
    borderColor: 'border-hilda-rose/10',
  },
  {
    id: 'panties',
    name: 'شورت',
    description: 'راحتی در هر حرکت',
    emoji: '🎀',
    gradient: 'from-hilda-blush/8 to-hilda-cream/5',
    borderColor: 'border-hilda-blush/10',
  },
  {
    id: 'sets',
    name: 'ست لانژری',
    description: 'ست‌های شیک و خاص',
    emoji: '✨',
    gradient: 'from-hilda-gold/8 to-hilda-goldLight/5',
    borderColor: 'border-hilda-gold/10',
  },
  {
    id: 'nightwear',
    name: 'نایت‌ور',
    description: 'شب‌های راحت و زیبا',
    emoji: '🌙',
    gradient: 'from-hilda-wine/8 to-hilda-rose/5',
    borderColor: 'border-hilda-wine/10',
  },
  {
    id: 'bodysuits',
    name: 'بادی',
    description: 'ظاهری خاص و مدرن',
    emoji: '💫',
    gradient: 'from-hilda-lavender/10 to-hilda-mauve/5',
    borderColor: 'border-hilda-lavender/15',
  },
  {
    id: 'hosiery',
    name: 'جوراب',
    description: 'کامل‌کننده استایل',
    emoji: '🦢',
    gradient: 'from-hilda-charcoal/5 to-hilda-dark/3',
    borderColor: 'border-hilda-charcoal/10',
  },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <span className="text-[11px] sm:text-xs text-hilda-rose tracking-[0.25em] uppercase font-light">
          مجموعه‌ها
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-hilda-charcoal mt-3">
          دسته‌بندی{' '}
          <span className="text-gradient-rose italic font-medium">
            محصولات
          </span>
        </h2>
        <p className="text-hilda-charcoal/45 mt-3 sm:mt-4 max-w-sm mx-auto font-light text-sm sm:text-base">
          هر سلیقه‌ای که دارید، مجموعه‌ای مناسب شما داریم
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <Link href={`/products?category=${cat.id}`}>
              <div
                className={`category-card bg-gradient-to-br ${cat.gradient} border ${cat.borderColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 min-h-[160px] sm:min-h-[200px] lg:min-h-[250px] flex flex-col justify-between group transition-all duration-500 hover:shadow-xl hover:shadow-hilda-blush/8 hover:-translate-y-1`}
              >
                <div>
                  <span className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 origin-right">
                    {cat.emoji}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-medium text-hilda-charcoal group-hover:text-hilda-wine transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-hilda-charcoal/45 mt-1.5 font-light hidden sm:block">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-hilda-wine text-xs sm:text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>مشاهده</span>
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
