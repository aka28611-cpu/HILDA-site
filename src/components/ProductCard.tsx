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
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-hilda-blush/10">
          {/* Product Image */}
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="product-image object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span className="bg-hilda-wine text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
                جدید
              </span>
            )}
            {product.isSale && (
              <span className="bg-red-500 text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
                حراج
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-hilda-wine hover:text-white z-10"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart size={16} />
          </button>

          {/* Quick Add */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-hilda-charcoal text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-hilda-burgundy hover:text-white z-10"
          >
            <ShoppingBag size={16} />
            افزودن به سبد
          </button>

          {/* Hover Overlay */}
          <div className="product-overlay" />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 px-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-hilda-charcoal group-hover:text-hilda-wine transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.floor(product.rating)
                    ? 'fill-hilda-gold text-hilda-gold'
                    : 'text-hilda-charcoal/20'
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-hilda-charcoal/40">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-semibold text-hilda-wine">
            {product.price.toLocaleString('fa-IR')} تومان
          </span>
          {product.originalPrice && (
            <span className="text-xs text-hilda-charcoal/40 line-through">
              {product.originalPrice.toLocaleString('fa-IR')}
            </span>
          )}
        </div>

        {/* Color Dots */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1.5 mt-2.5">
            {product.colors.slice(0, 4).map((color, i) => (
              <button
                key={i}
                className="w-4 h-4 rounded-full border-2 border-white shadow-sm hover:scale-125 transition-transform"
                style={{ backgroundColor: color }}
                aria-label={`رنگ ${i + 1}`}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-hilda-charcoal/40 self-center">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
