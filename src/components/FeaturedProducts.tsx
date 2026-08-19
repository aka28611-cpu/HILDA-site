'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    id: '1',
    name: 'ست لانژری رز گلد',
    price: '۸۹۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=800&h=1100&fit=crop&q=80',
    tag: 'جدید',
    color: 'صورتی طلایی',
  },
  {
    id: '2',
    name: 'سوتین ابریشمی کلاسیک',
    price: '۴۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=1100&fit=crop&q=80',
    tag: '',
    color: 'کرمی',
  },
  {
    id: '3',
    name: 'نایت‌ور ساتن مشکی',
    price: '۶۸۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&h=1100&fit=crop&q=80',
    tag: 'فروش ویژه',
    color: 'مشکی',
  },
  {
    id: '4',
    name: 'بادی توری ظریف',
    price: '۷۵۰,۰۰۰ تومان',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1100&fit=crop&q=80',
    tag: '',
    color: 'رز',
  },
];

function ProductItem({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: index * 0.12 }}
      className={`group ${index % 2 === 1 ? 'sm:mt-16' : ''}`}>
      <Link href={`/product/${product.id}`}>
        <div className="product-item relative aspect-[3/4] rounded-sm overflow-hidden bg-h-blush/10">
          <Image src={product.img} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          {product.tag && (
            <span className="absolute top-4 left-4 text-[8px] tracking-[0.2em] uppercase bg-h-wine text-white px-3 py-1.5 rounded-sm z-10 font-medium">
              {product.tag}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
        <div className="mt-5 flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-light text-h-text group-hover:text-h-wine transition-colors">{product.name}</h3>
            <p className="text-[11px] text-h-textMuted mt-1">{product.color}</p>
          </div>
          <span className="text-[12px] text-h-text font-medium mt-1">{product.price}</span>
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
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-textMuted font-medium">مجموعه</span>
            <div className="overflow-hidden mt-3">
              <motion.h2 initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-h-charcoal">
                انتخاب ویژه
              </motion.h2>
            </div>
          </div>
          <Link href="/products" className="mt-6 sm:mt-0 text-[10px] tracking-[0.15em] uppercase text-h-textLight hover:text-h-wine transition-colors border-b border-h-charcoal/10 pb-1 inline-block">
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
