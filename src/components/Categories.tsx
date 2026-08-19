'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const categories = [
  { id: 'bras', name: 'سوتین', tagline: 'طراحی بی‌نقص', num: '01' },
  { id: 'panties', name: 'شورت', tagline: 'راحتی مطلق', num: '02' },
  { id: 'sets', name: 'ست لانژری', tagline: 'هماهنگی کامل', num: '03' },
  { id: 'nightwear', name: 'نایت‌ور', tagline: 'شب‌های زیبا', num: '04' },
  { id: 'bodysuits', name: 'بادی', tagline: 'ظرافت مدرن', num: '05' },
];

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="mb-16 sm:mb-20">
          <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-muted font-light">مجموعه‌ها</span>
          <div className="overflow-hidden mt-3">
            <motion.h2 initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-h-charcoal">
              کشف کنید
            </motion.h2>
          </div>
        </motion.div>

        {/* Categories List - Editorial Style */}
        <div className="space-y-0 border-t border-h-charcoal/8">
          {categories.map((cat, i) => (
            <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.08 }}>
              <Link href={`/products?category=${cat.id}`}>
                <div className="group flex items-center justify-between py-6 sm:py-8 border-b border-h-charcoal/8 cursor-pointer transition-all duration-500 hover:pl-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-[10px] text-h-muted/40 font-light">{cat.num}</span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-h-charcoal group-hover:text-h-wine transition-colors duration-500">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-h-muted/50 mt-1 tracking-wider font-light">{cat.tagline}</p>
                    </div>
                  </div>
                  <div className="text-h-muted/30 group-hover:text-h-wine group-hover:translate-x-[-4px] transition-all duration-500 text-lg">
                    ←
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
