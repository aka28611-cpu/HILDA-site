'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: '1', name: 'ست لانژری رز گلد', price: 890000, originalPrice: 1200000, image: 'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=600&h=800&fit=crop&q=80', rating: 4.9, reviews: 128, isNew: true, colors: ['#E8B4B8', '#D4A574', '#1A1A1A'] },
  { id: '2', name: 'سوتین بی‌نیاز ابریشمی', price: 450000, image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=800&fit=crop&q=80', rating: 4.8, reviews: 95, colors: ['#FDF6F0', '#C9787C', '#6B1D3A'] },
  { id: '3', name: 'نایت‌ور ساتن مشکی', price: 680000, originalPrice: 900000, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80', rating: 4.7, reviews: 76, isSale: true, colors: ['#1A1A1A', '#8B2252'] },
  { id: '4', name: 'بادی توری کلاسیک', price: 750000, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop&q=80', rating: 4.9, reviews: 203, isNew: true, colors: ['#C9787C', '#E8B4B8'] },
  { id: '5', name: 'شورت فانتزی پرنسسی', price: 280000, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop&q=80', rating: 4.6, reviews: 142, colors: ['#E8B4B8', '#FDF6F0', '#D4A574'] },
  { id: '6', name: 'ست میمون و کاپ‌دار', price: 560000, originalPrice: 750000, image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&h=800&fit=crop&q=80', rating: 4.8, reviews: 89, isSale: true, colors: ['#C4A1B4', '#8B2252'] },
];

export default function FeaturedProducts() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }} className="text-center mb-10 sm:mb-14">
        <span className="text-[10px] sm:text-[11px] text-hilda-rose tracking-[0.25em] uppercase font-light">انتخاب ویژه</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-hilda-charcoal mt-2">
          محصولات <span className="text-gradient-rose italic font-semibold">پرفروش</span>
        </h2>
        <p className="text-hilda-charcoal/35 mt-2 sm:mt-3 max-w-xs mx-auto font-light text-[11px] sm:text-xs">محبوب‌ترین محصولات ما</p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
        {sampleProducts.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8 sm:mt-10">
        <a href="/products" className="inline-flex items-center gap-2 btn-luxury border-2 border-hilda-burgundy/20 text-hilda-burgundy rounded-full magnetic-btn text-[10px] sm:text-xs hover:bg-hilda-burgundy/5">
          مشاهده همه محصولات
        </a>
      </motion.div>
    </section>
  );
}
