'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Trash2,
  ChevronLeft,
} from 'lucide-react';
import Logo from '@/components/Logo';

const tabs = [
  { id: 'orders', name: 'سفارشات', icon: Package },
  { id: 'tracking', name: 'پیگیری', icon: Truck },
  { id: 'wishlist', name: 'علاقه‌مندی‌ها', icon: Heart },
  { id: 'addresses', name: 'آدرس‌ها', icon: MapPin },
  { id: 'settings', name: 'تنظیمات', icon: Settings },
];

const sampleOrders = [
  {
    id: 'ORD-1234',
    date: '۱۴۰۳/۰۵/۱۵',
    status: 'delivered',
    statusText: 'تحویل شده',
    items: [
      { name: 'ست لانژری رز گلد', qty: 1, price: 890000 },
      { name: 'شورت فانتزی', qty: 2, price: 280000 },
    ],
    total: 1450000,
  },
  {
    id: 'ORD-1235',
    date: '۱۴۰۳/۰۵/۱۸',
    status: 'shipped',
    statusText: 'ارسال شده',
    items: [{ name: 'سوتین بی‌نیاز ابریشمی', qty: 1, price: 450000 }],
    total: 450000,
    trackingNumber: 'POST-IR-789456',
  },
  {
    id: 'ORD-1236',
    date: '۱۴۰۳/۰۵/۲۰',
    status: 'pending',
    statusText: 'در انتظار تایید',
    items: [
      { name: 'نایت‌ور ساتن مشکی', qty: 1, price: 680000 },
    ],
    total: 680000,
  },
];

const statusConfig: Record<string, { color: string; bg: string; icon: any }> = {
  delivered: { color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle },
  shipped: { color: 'text-blue-600', bg: 'bg-blue-50', icon: Truck },
  pending: { color: 'text-yellow-600', bg: 'bg-yellow-50', icon: Clock },
  cancelled: { color: 'text-red-600', bg: 'bg-red-50', icon: XCircle },
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('orders');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-hilda-cream">
      {/* Header */}
      <div className="bg-gradient-to-b from-hilda-blush/10 to-hilda-cream pt-8 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-hilda-blush to-hilda-rose flex items-center justify-center text-white text-2xl">
              👩
            </div>
            <div>
              <h1 className="font-display text-2xl text-hilda-charcoal">مریم احمدی</h1>
              <p className="text-sm text-hilda-charcoal/50 font-light">مریم.ahmad@email.com</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="md:sticky md:top-24">
              <nav className="bg-white rounded-2xl shadow-sm border border-hilda-blush/10 overflow-hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-hilda-burgundy/5 text-hilda-wine font-medium border-r-3 border-r-hilda-wine'
                        : 'text-hilda-charcoal/60 hover:bg-hilda-blush/5'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.name}
                  </button>
                ))}
                <div className="border-t border-hilda-blush/10">
                  <button className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-red-400 hover:bg-red-50 transition-colors">
                    <LogOut size={18} />
                    خروج از حساب
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <motion.div key="orders" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="font-display text-2xl text-hilda-charcoal mb-6">سفارشات من</h2>
                  <div className="space-y-4">
                    {sampleOrders.map((order) => {
                      const config = statusConfig[order.status];
                      return (
                        <div key={order.id} className="bg-white rounded-2xl border border-hilda-blush/10 overflow-hidden">
                          <div
                            className="flex items-center justify-between p-5 cursor-pointer hover:bg-hilda-blush/5 transition-colors"
                            onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center`}>
                                <config.icon size={18} className={config.color} />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-hilda-charcoal">{order.id}</div>
                                <div className="text-xs text-hilda-charcoal/40">{order.date}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className={`text-xs px-3 py-1 rounded-full ${config.bg} ${config.color} font-medium`}>
                                {order.statusText}
                              </span>
                              <span className="text-sm font-semibold text-hilda-wine">
                                {order.total.toLocaleString('fa-IR')} ت
                              </span>
                              <ChevronLeft size={16} className={`text-hilda-charcoal/30 transition-transform ${selectedOrder === order.id ? '-rotate-90' : ''}`} />
                            </div>
                          </div>

                          {/* Order Details */}
                          <AnimatePresence>
                            {selectedOrder === order.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="border-t border-hilda-blush/10"
                              >
                                <div className="p-5">
                                  <div className="space-y-3 mb-4">
                                    {order.items.map((item, i) => (
                                      <div key={i} className="flex items-center justify-between text-sm">
                                        <span className="text-hilda-charcoal/70">{item.name} × {item.qty}</span>
                                        <span className="text-hilda-charcoal/50">{(item.price * item.qty).toLocaleString('fa-IR')} تومان</span>
                                      </div>
                                    ))}
                                  </div>
                                  {order.trackingNumber && (
                                    <div className="bg-blue-50 rounded-xl p-3 mb-4">
                                      <span className="text-xs text-blue-600">کد پیگیری: </span>
                                      <span className="text-sm font-medium text-blue-700">{order.trackingNumber}</span>
                                    </div>
                                  )}
                                  <div className="flex gap-3">
                                    {order.status === 'pending' && (
                                      <button className="text-xs px-4 py-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors flex items-center gap-1">
                                        <Trash2 size={14} />
                                        لغو سفارش
                                      </button>
                                    )}
                                    {order.status === 'delivered' && (
                                      <button className="text-xs px-4 py-2 rounded-xl bg-hilda-blush/10 text-hilda-wine hover:bg-hilda-blush/20 transition-colors">
                                        مرجوعی
                                      </button>
                                    )}
                                    <button className="text-xs px-4 py-2 rounded-xl bg-hilda-blush/10 text-hilda-charcoal/60 hover:bg-hilda-blush/20 transition-colors flex items-center gap-1">
                                      <Eye size={14} />
                                      جزئیات
                                    </button>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Tracking Tab */}
              {activeTab === 'tracking' && (
                <motion.div key="tracking" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="font-display text-2xl text-hilda-charcoal mb-6">پیگیری سفارش</h2>
                  <div className="bg-white rounded-2xl border border-hilda-blush/10 p-6 mb-6">
                    <p className="text-sm text-hilda-charcoal/60 mb-4">شماره سفارش خود را وارد کنید:</p>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="ORD-XXXX"
                        className="flex-1 bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20"
                      />
                      <button className="btn-luxury bg-hilda-burgundy text-white rounded-xl px-6 text-sm">
                        پیگیری
                      </button>
                    </div>
                  </div>

                  {/* Active Tracking */}
                  <div className="bg-white rounded-2xl border border-hilda-blush/10 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-medium text-hilda-charcoal">ORD-1235</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">در حال ارسال</span>
                    </div>
                    {/* Tracking Steps */}
                    <div className="relative">
                      {[
                        { label: 'سفارش ثبت شد', time: '۱۸ مرداد ۱۰:۳۰', done: true },
                        { label: 'تایید سفارش', time: '۱۸ مرداد ۱۲:۰۰', done: true },
                        { label: 'ارسال شده', time: '۱۹ مرداد ۰۹:۰۰', done: true },
                        { label: 'تحویل پست', time: 'در انتظار', done: false },
                        { label: 'تحویل به شما', time: 'در انتظار', done: false },
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4 pb-6 last:pb-0">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${step.done ? 'bg-hilda-wine' : 'bg-hilda-blush/30'}`} />
                            {i < 4 && <div className={`w-0.5 flex-1 ${step.done ? 'bg-hilda-wine/30' : 'bg-hilda-blush/20'}`} />}
                          </div>
                          <div>
                            <div className={`text-sm font-medium ${step.done ? 'text-hilda-charcoal' : 'text-hilda-charcoal/40'}`}>{step.label}</div>
                            <div className="text-xs text-hilda-charcoal/30 mt-0.5">{step.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <motion.div key="wishlist" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="font-display text-2xl text-hilda-charcoal mb-6">علاقه‌مندی‌ها</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: 'ست لانژری رز گلد', price: 890000, img: 'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=400&h=500&fit=crop' },
                      { name: 'بادی توری کلاسیک', price: 750000, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop' },
                      { name: 'ست ابریشمی مرواریدی', price: 920000, img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-2xl border border-hilda-blush/10 overflow-hidden group">
                        <div className="relative aspect-[3/4]">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <button className="absolute top-3 left-3 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-medium text-hilda-charcoal line-clamp-1">{item.name}</h3>
                          <p className="text-sm text-hilda-wine font-semibold mt-1">{item.price.toLocaleString('fa-IR')} تومان</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <motion.div key="addresses" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-2xl text-hilda-charcoal">آدرس‌ها</h2>
                    <button className="btn-luxury bg-hilda-burgundy text-white rounded-xl text-sm">افزودن آدرس جدید</button>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl border border-hilda-blush/10 p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-hilda-blush/10 flex items-center justify-center text-hilda-wine">
                        <MapPin size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-hilda-charcoal">خانه</span>
                          <span className="text-[10px] bg-hilda-wine/10 text-hilda-wine px-2 py-0.5 rounded-full">پیش‌فرض</span>
                        </div>
                        <p className="text-sm text-hilda-charcoal/50 font-light">تهران، خیابان ولیعصر، نبش کوچه گل، پلاک ۱۲، واحد ۳</p>
                        <div className="flex gap-3 mt-3">
                          <button className="text-xs text-hilda-wine hover:underline">ویرایش</button>
                          <button className="text-xs text-red-400 hover:underline">حذف</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <motion.div key="settings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="font-display text-2xl text-hilda-charcoal mb-6">تنظیمات حساب</h2>
                  <div className="bg-white rounded-2xl border border-hilda-blush/10 p-6 space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-hilda-charcoal mb-2">نام و نام خانوادگی</label>
                      <input type="text" defaultValue="مریم احمدی" className="w-full bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-hilda-charcoal mb-2">ایمیل</label>
                      <input type="email" defaultValue="maryam.ahmad@email.com" className="w-full bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-hilda-charcoal mb-2">شماره موبایل</label>
                      <input type="tel" defaultValue="09121234567" className="w-full bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20" dir="ltr" />
                    </div>
                    <button className="btn-luxury bg-hilda-burgundy text-white rounded-xl text-sm">
                      ذخیره تغییرات
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
