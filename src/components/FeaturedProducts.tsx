'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'ست لانژری رز گلد',
    price: 890000,
    originalPrice: 1200000,
    image: 'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=600&h=800&fit=crop',
    rating: 4.9,
    reviews: 128,
    isNew: true,
    colors: ['#E8B4B8', '#D4A574', '#1A1A1A'],
  },
  {
    id: '2',
    name: 'سوتین بی‌نیاز ابریشمی',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=800&fit=crop',
    rating: 4.8,
    reviews: 95,
    colors: ['#FDF6F0', '#C9787C', '#6B1D3A'],
  },
  {
    id: '3',
    name: 'نایت‌ور ساتن مشکی',
    price: 680000,
    originalPrice: 900000,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop',
    rating: 4.7,
    reviews: 76,
    isSale: true,
    colors: ['#1A1A1A', '#8B2252'],
  },
  {
    id: '4',
    name: 'بادی توری کلاسیک',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop',
    rating: 4.9,
    reviews: 203,
    isNew: true,
    colors: ['#C9787C', '#E8B4B8', '#E6E0F0'],
  },
  {
    id: '5',
    name: 'شورت فانتزی پرنسسی',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop',
    rating: 4.6,
    reviews: 142,
    colors: ['#E8B4B8', '#FDF6F0', '#D4A574'],
  },
  {
    id: '6',
    name: 'ست میمون و کاپ‌دار',
    price: 560000,
    originalPrice: 750000,
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&h=800&fit=crop',
    rating: 4.8,
    reviews: 89,
    isSale: true,
    colors: ['#C4A1B4', '#8B2252'],
  },
];

export default function FeaturedProducts() {
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
          انتخاب ویژه
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal mt-3">
          محصولات{' '}
          <span className="text-gradient-rose italic font-medium">
            پرفروش
          </span>
        </h2>
        <p className="text-hilda-charcoal/50 mt-4 max-w-md mx-auto font-light">
          محبوب‌ترین محصولات ما که مشتریان عاشقشون هستن
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {sampleProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {/* View All */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="/products"
          className="inline-flex items-center gap-2 btn-luxury border-2 border-hilda-burgundy/30 text-hilda-burgundy rounded-full"
        >
          مشاهده همه محصولات
        </a>
      </motion.div>
    </section>
  );
}
