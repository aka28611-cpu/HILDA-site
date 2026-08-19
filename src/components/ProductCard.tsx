'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  colors?: string[];
}

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: index * 0.06 }} className="product-card group">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden bg-h-muted/30">
          <Image src={product.image} alt={product.name} fill className="product-image object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 flex flex-col gap-1 z-10">
            {product.isNew && <span className="bg-h-gold text-white text-[8px] sm:text-[9px] px-2 py-0.5 rounded-sm font-medium tracking-wider">جدید</span>}
            {product.isSale && <span className="bg-red-500 text-white text-[8px] sm:text-[9px] px-2 py-0.5 rounded-sm font-medium tracking-wider">حراج</span>}
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-h-gold hover:text-white z-10">
            <Heart size={13} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-10">
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
              className="w-full bg-white/90 backdrop-blur-sm text-h-charcoal text-[10px] sm:text-xs py-2 sm:py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-h-gold hover:text-white transition-colors cursor-pointer">
              <ShoppingBag size={12} /> افزودن به سبد
            </button>
          </div>
          <div className="product-overlay" />
        </div>
      </Link>
      <div className="mt-2 sm:mt-2.5 px-0.5">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-[11px] sm:text-xs font-medium text-h-charcoal group-hover:text-h-gold transition-colors line-clamp-1 cursor-pointer">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'fill-h-gold text-h-gold' : 'text-h-charcoal/10'} />
          ))}
          <span className="text-[8px] text-h-charcoal/30 ml-0.5">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-[13px] sm:text-sm font-semibold text-h-gold">{product.price.toLocaleString('fa-IR')}</span>
          {product.originalPrice && <span className="text-[9px] sm:text-[10px] text-h-charcoal/25 line-through">{product.originalPrice.toLocaleString('fa-IR')}</span>}
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1 mt-1.5">
            {product.colors.slice(0, 3).map((c, i) => (
              <button key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white shadow-sm hover:scale-125 transition-transform cursor-pointer" style={{ backgroundColor: c }} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
