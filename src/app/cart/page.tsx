'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, Tag, ArrowLeft, ShieldCheck } from 'lucide-react';

const cartItems = [
  {
    id: '1',
    name: 'ست لانژری رز گلد',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=200&h=250&fit=crop',
    size: 'M',
    color: 'رز گلد',
    qty: 1,
  },
  {
    id: '2',
    name: 'سوتین بی‌نیاز ابریشمی',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=200&h=250&fit=crop',
    size: 'S',
    color: 'کرمی',
    qty: 2,
  },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 500000 ? 0 : 35000;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-hilda-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-light text-hilda-charcoal mb-8"
        >
          سبد خرید{' '}
          <span className="text-hilda-charcoal/30 text-lg">({items.length} کالا)</span>
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-hilda-blush/10">
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="font-display text-xl text-hilda-charcoal mb-2">
                  سبد شما خالی است
                </h3>
                <p className="text-sm text-hilda-charcoal/50 mb-6">
                  محصولات مورد علاقه خود را به سبد اضافه کنید
                </p>
                <Link
                  href="/products"
                  className="btn-luxury bg-hilda-burgundy text-white rounded-xl inline-flex items-center gap-2"
                >
                  مشاهده محصولات
                  <ArrowLeft size={16} />
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-white rounded-2xl border border-hilda-blush/10 p-4 flex gap-4 group"
                >
                  {/* Image */}
                  <div className="relative w-24 h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-hilda-charcoal line-clamp-1">
                          {item.name}
                        </h3>
                        <div className="text-xs text-hilda-charcoal/40 mt-1 space-y-0.5">
                          <div>سایز: {item.size} · رنگ: {item.color}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-hilda-charcoal/30 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center bg-hilda-blush/10 rounded-lg">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="p-2 hover:bg-hilda-blush/20 rounded-r-lg transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="p-2 hover:bg-hilda-blush/20 rounded-l-lg transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-semibold text-hilda-wine">
                        {(item.price * item.qty).toLocaleString('fa-IR')} تومان
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-hilda-blush/10 p-6 sticky top-24">
              <h3 className="font-medium text-hilda-charcoal mb-5">خلاصه سفارش</h3>

              {/* Coupon */}
              <div className="mb-5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="کد تخفیف"
                      className="w-full bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-2.5 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-hilda-rose/20"
                    />
                    <Tag size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-hilda-charcoal/30" />
                  </div>
                  <button
                    onClick={() => coupon && setCouponApplied(true)}
                    className="px-4 py-2.5 bg-hilda-blush/10 rounded-xl text-sm text-hilda-wine hover:bg-hilda-blush/20 transition-colors"
                  >
                    اعمال
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-xs text-green-500 mt-2">✓ کد تخفیف ۱۰٪ اعمال شد</p>
                )}
              </div>

              {/* Summary */}
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-hilda-charcoal/50 font-light">جمع سبد</span>
                  <span>{subtotal.toLocaleString('fa-IR')} تومان</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-500">
                    <span>تخفیف</span>
                    <span>-{discount.toLocaleString('fa-IR')} تومان</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-hilda-charcoal/50 font-light">هزینه ارسال</span>
                  <span className={shipping === 0 ? 'text-green-500' : ''}>
                    {shipping === 0 ? 'رایگان' : `${shipping.toLocaleString('fa-IR')} تومان`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-hilda-charcoal/30">
                    ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
                  </p>
                )}
              </div>

              <div className="border-t border-hilda-blush/20 pt-4 mb-5 flex justify-between">
                <span className="font-medium">مبلغ قابل پرداخت</span>
                <span className="text-lg font-semibold text-hilda-wine">
                  {total.toLocaleString('fa-IR')} تومان
                </span>
              </div>

              <Link
                href="/checkout"
                className="w-full btn-luxury bg-hilda-burgundy text-white rounded-xl text-center block"
              >
                تکمیل خرید
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-hilda-charcoal/30">
                <ShieldCheck size={14} />
                پرداخت امن و رمزنگاری شده
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
