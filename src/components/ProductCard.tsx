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

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="product-card group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-hilda-blush/8">
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="product-image object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1.5 z-10">
            {product.isNew && (
              <span className="bg-hilda-wine text-white text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium">
                جدید
              </span>
            )}
            {product.isSale && (
              <span className="bg-red-500 text-white text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium">
                حراج
              </span>
            )}
          </div>

          {/* Wishlist Button - Hidden on mobile, shown on hover desktop */}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="absolute top-2 left-2 sm:top-3 sm:left-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-hilda-wine hover:text-white z-10"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart size={14} />
          </button>

          {/* Quick Add - Better on mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-10">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
              className="w-full bg-white/90 backdrop-blur-sm text-hilda-charcoal text-xs sm:text-sm py-2 sm:py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-hilda-burgundy hover:text-white transition-colors"
            >
              <ShoppingBag size={14} />
              افزودن به سبد
            </button>
          </div>

          {/* Hover Overlay */}
          <div className="product-overlay" />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-2.5 sm:mt-3 px-0.5">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xs sm:text-sm font-medium text-hilda-charcoal group-hover:text-hilda-wine transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < Math.floor(product.rating)
                    ? 'fill-hilda-gold text-hilda-gold'
                    : 'text-hilda-charcoal/15'
                }
              />
            ))}
          </div>
          <span className="text-[9px] text-hilda-charcoal/35">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mt-1.5">
          <span className="text-sm sm:text-base font-semibold text-hilda-wine">
            {product.price.toLocaleString('fa-IR')}
          </span>
          {product.originalPrice && (
            <span className="text-[10px] sm:text-xs text-hilda-charcoal/30 line-through">
              {product.originalPrice.toLocaleString('fa-IR')}
            </span>
          )}
        </div>

        {/* Color Dots */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1 mt-2">
            {product.colors.slice(0, 3).map((color, i) => (
              <button
                key={i}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-white shadow-sm hover:scale-125 transition-transform"
                style={{ backgroundColor: color }}
                aria-label={`رنگ ${i + 1}`}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[9px] text-hilda-charcoal/30 self-center">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
