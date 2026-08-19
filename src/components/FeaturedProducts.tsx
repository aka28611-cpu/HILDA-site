'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  { id: '1', name: 'ست لانژری رز گلد', price: '۸۹۰,۰۰۰', img: 'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=800&h=1000&fit=crop&q=80', tag: 'جدید' },
  { id: '2', name: 'سوتین بی‌نیاز ابریشمی', price: '۴۵۰,۰۰۰', img: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&h=1000&fit=crop&q=80', tag: '' },
  { id: '3', name: 'نایت‌ور ساتن مشکی', price: '۶۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop&q=80', tag: 'فروش ویژه' },
  { id: '4', name: 'بادی توری کلاسیک', price: '۷۵۰,۰۰۰', img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=1000&fit=crop&q=80', tag: '' },
];

function ProductItem({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group ${index % 2 === 0 ? '' : 'mt-12 sm:mt-20'}`}>
      <Link href={`/product/${product.id}`}>
        <div className="product-item relative aspect-[3/4] rounded-sm overflow-hidden bg-h-blush/5">
          <Image src={product.img} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          {product.tag && (
            <span className="absolute top-4 left-4 text-[8px] tracking-[0.2em] uppercase bg-h-charcoal text-white px-3 py-1.5 rounded-sm z-10">
              {product.tag}
            </span>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-h-charcoal/0 group-hover:bg-h-charcoal/10 transition-all duration-700" />
          {/* Bottom info on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.15em] uppercase text-white/80">مشاهده</span>
              <span className="text-[10px] tracking-[0.15em] text-white/50">←</span>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-5 flex items-start justify-between">
          <div>
            <h3 className="font-display text-base sm:text-lg font-light text-h-charcoal group-hover:text-h-wine transition-colors">{product.name}</h3>
            <p className="text-[10px] sm:text-[11px] text-h-muted mt-1 font-light">{product.price} تومان</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20">
          <div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-muted font-light">مجموعه</span>
            <div className="overflow-hidden mt-3">
              <motion.h2 initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-h-charcoal">
                انتخاب ویژه
              </motion.h2>
            </div>
          </div>
          <Link href="/products" className="mt-6 sm:mt-0 text-[10px] tracking-[0.2em] uppercase text-h-muted hover:text-h-charcoal transition-colors border-b border-h-charcoal/10 pb-1">
            مشاهده همه ←
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {products.map((p, i) => <ProductItem key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
