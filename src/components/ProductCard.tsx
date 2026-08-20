'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';

interface Product {
  id: string; name: string; price: number; originalPrice?: number; image: string;
  rating: number; reviews: number; isNew?: boolean; isSale?: boolean; colors?: string[];
}

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="product-card group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-hilda-blush/10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="product-image object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
            {product.isNew && (
              <span className="bg-hilda-wine text-white text-[9px] px-2.5 py-1 rounded-full font-medium tracking-wider">
                جدید
              </span>
            )}
            {product.isSale && (
              <span className="bg-red-500 text-white text-[9px] px-2.5 py-1 rounded-full font-medium tracking-wider">
                حراج
              </span>
            )}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-hilda-wine hover:text-white z-10 cursor-pointer"
          >
            <Heart size={14} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 z-10">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
              className="w-full bg-white/90 backdrop-blur-sm text-hilda-charcoal text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-hilda-wine hover:text-white transition-colors duration-300 cursor-pointer font-medium"
            >
              <ShoppingBag size={13} /> افزودن به سبد
            </button>
          </div>
          <div className="product-overlay" />
        </div>
      </Link>
      <div className="mt-3 px-0.5">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xs font-medium text-hilda-charcoal group-hover:text-hilda-wine transition-colors duration-300 line-clamp-1 cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-0.5 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-hilda-gold text-hilda-gold' : 'text-hilda-charcoal/15'} />
          ))}
          <span className="text-[9px] text-hilda-charcoal/35 ml-0.5">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-1.5 mt-1.5">
          <span className="text-sm font-semibold text-hilda-wine">{product.price.toLocaleString('fa-IR')}</span>
          {product.originalPrice && (
            <span className="text-[10px] text-hilda-charcoal/30 line-through">{product.originalPrice.toLocaleString('fa-IR')}</span>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.slice(0, 4).map((c, i) => (
              <button key={i} className="w-3 h-3 rounded-full border border-white shadow-sm hover:scale-125 transition-transform cursor-pointer" style={{ backgroundColor: c }} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
