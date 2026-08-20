'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ShoppingBag,
  Star,
  Minus,
  Plus,
  Truck,
  Shield,
  RefreshCw,
  ChevronLeft,
  Share2,
  MessageCircle,
} from 'lucide-react';

const productData: Record<string, any> = {
  '1': {
    name: 'ست لانژری رز گلد',
    price: 890000,
    originalPrice: 1200000,
    images: [
      'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop',
    ],
    description: 'ست لانژری رز گلد Hilda با پارچه ابریشم مصنیعی درجه یک و طراحی منحصربه‌فرد ساخته شده. این ست شامل سوتین و شورت با جزئیات ظریف تور و روبان است.',
    rating: 4.9,
    reviews: 128,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'رز گلد', hex: '#E8B4B8' },
      { name: 'مشکی', hex: '#1A1A1A' },
      { name: 'شکری', hex: '#D4A574' },
      { name: 'بنفش', hex: '#8B2252' },
    ],
    features: ['پارچه ابریشمی نرم', 'طراحی توری ظریف', 'قابل شستشو با ماشین', 'سایزبندی استاندارد'],
    isNew: true,
  },
};

const defaultProduct = {
  name: 'محصول Hilda',
  price: 590000,
  images: ['https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=800&h=1000&fit=crop'],
  description: 'محصول زیبا و باکیفیت Hilda با طراحی منحصربه‌فرد.',
  rating: 4.8,
  reviews: 89,
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: [
    { name: 'صورتی', hex: '#E8B4B8' },
    { name: 'مشکی', hex: '#1A1A1A' },
  ],
  features: ['کیفیت بالا', 'طراحی شیک', 'راحت و نرم'],
  isNew: false,
};

const productReviews = [
  { name: 'مریم', rating: 5, date: '۳ روز پیش', text: 'واقعاً عالیه! کیفیت پارچه فوق‌العاده‌ست.', avatar: '👩' },
  { name: 'سارا', rating: 5, date: '۱ هفته پیش', text: 'خیلی شیک و زیباست. بسته‌بندی هم خیلی خاص بود.', avatar: '👩‍🦰' },
  { name: 'نیلوفر', rating: 4, date: '۲ هفته پیش', text: 'محصول خوبیه فقط رنگش یکم با عکس فرق داشت.', avatar: '👩‍🦱' },
];

export default function ProductDetailClient({ id }: { id: string }) {
  const product = productData[id] || defaultProduct;
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-h-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <div className="flex items-center gap-2 text-xs text-h-textMuted">
          <Link href="/" className="hover:text-h-wine transition-colors">خانه</Link>
          <ChevronLeft size={12} />
          <Link href="/products" className="hover:text-h-wine transition-colors">محصولات</Link>
          <ChevronLeft size={12} />
          <span className="text-h-text">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-h-blush/10 mb-4">
              <Image src={product.images[activeImage]} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              {product.isNew && (
                <span className="absolute top-4 right-4 bg-h-wine text-white text-xs px-3 py-1.5 rounded-full font-medium z-10">جدید</span>
              )}
              {product.originalPrice && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-medium z-10">
                  %{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)} تخفیف
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img: string, i: number) => (
                  <button key={i} onClick={() => setActiveImage(i)} className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${activeImage === i ? 'border-h-wine' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
            <h1 className="font-display text-3xl md:text-4xl font-light text-h-charcoal mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-h-gold text-h-gold' : 'text-h-charcoal/15'} />
                ))}
              </div>
              <span className="text-sm text-h-textLight">{product.rating} ({product.reviews} نظر)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-semibold text-h-wine">{product.price.toLocaleString('fa-IR')} تومان</span>
              {product.originalPrice && <span className="text-lg text-h-textMuted line-through">{product.originalPrice.toLocaleString('fa-IR')}</span>}
            </div>

            <p className="text-h-textLight text-sm font-light leading-8 mb-8">{product.description}</p>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-h-charcoal mb-3">رنگ: <span className="text-h-textLight font-normal">{product.colors[selectedColor].name}</span></h3>
              <div className="flex gap-3">
                {product.colors.map((color: any, i: number) => (
                  <button key={i} onClick={() => setSelectedColor(i)} className={`w-10 h-10 rounded-full border-2 transition-all duration-300 cursor-pointer ${selectedColor === i ? 'border-h-wine scale-110 shadow-lg shadow-h-wine/15' : 'border-h-blush/30 hover:scale-105'}`} style={{ backgroundColor: color.hex }} aria-label={color.name} />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-h-charcoal mb-3">سایز:</h3>
              <div className="flex gap-2">
                {product.sizes.map((size: string) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`w-12 h-12 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${selectedSize === size ? 'bg-h-wine text-white shadow-lg shadow-h-wine/15' : 'bg-h-blush/8 text-h-text hover:bg-h-blush/15 border border-h-blush/10'}`}>{size}</button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-h-charcoal mb-3">تعداد:</h3>
              <div className="flex items-center bg-h-blush/8 rounded-xl w-fit border border-h-blush/10">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-h-blush/15 rounded-r-xl transition-colors cursor-pointer"><Minus size={16} className="text-h-text" /></button>
                <span className="w-12 text-center font-medium text-h-charcoal">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-h-blush/15 rounded-l-xl transition-colors cursor-pointer"><Plus size={16} className="text-h-text" /></button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button onClick={handleAddToCart} className={`flex-1 btn-luxury rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${addedToCart ? 'bg-green-500 text-white' : 'bg-h-burgundy text-white hover:shadow-xl hover:shadow-h-burgundy/20'}`}>
                <ShoppingBag size={18} />
                {addedToCart ? '✓ اضافه شد!' : 'افزودن به سبد خرید'}
              </button>
              <button onClick={() => setIsWishlisted(!isWishlisted)} className={`p-3.5 rounded-xl border-2 transition-all duration-300 cursor-pointer ${isWishlisted ? 'bg-h-wine text-white border-h-wine' : 'border-h-blush/20 hover:border-h-wine hover:text-h-wine text-h-textLight'}`}>
                <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
              <button className="p-3.5 rounded-xl border-2 border-h-blush/20 hover:border-h-wine hover:text-h-wine transition-all duration-300 cursor-pointer text-h-textLight">
                <Share2 size={20} />
              </button>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[{ icon: Truck, label: 'ارسال رایگان' }, { icon: Shield, label: 'ضمانت اصالت' }, { icon: RefreshCw, label: 'مرجوعی ۷ روزه' }].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center p-3 bg-h-blush/5 rounded-xl border border-h-blush/10">
                  <badge.icon size={18} className="text-h-wine mb-1.5" />
                  <span className="text-[11px] text-h-textLight">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div className="border-t border-h-charcoal/8 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-h-charcoal">نظرات ({productReviews.length})</h3>
                <button className="text-xs text-h-wine hover:underline flex items-center gap-1 cursor-pointer"><MessageCircle size={13} /> نظر دادن</button>
              </div>
              <div className="space-y-4">
                {productReviews.map((review, i) => (
                  <div key={i} className="bg-h-blush/5 rounded-2xl p-4 border border-h-blush/10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{review.avatar}</span>
                      <div>
                        <span className="text-sm font-medium text-h-charcoal">{review.name}</span>
                        <span className="text-xs text-h-textMuted mr-2">{review.date}</span>
                      </div>
                      <div className="mr-auto flex">
                        {Array.from({ length: review.rating }).map((_, j) => (<Star key={j} size={12} className="fill-h-gold text-h-gold" />))}
                      </div>
                    </div>
                    <p className="text-sm text-h-textLight font-light leading-6">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
