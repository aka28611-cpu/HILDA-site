'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/profile';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 bg-h-cream relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-h-textMuted hover:text-h-wine transition-colors mb-8">
            <ArrowLeft size={14} />
            بازگشت به خانه
          </Link>

          <div className="mb-8">
            <Logo size="lg" />
          </div>

          <h1 className="font-display text-3xl font-light text-h-charcoal mb-2">
            خوش آمدید
          </h1>
          <p className="text-h-textLight text-sm font-light mb-8">
            برای ادامه وارد حساب خود شوید
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-h-charcoal mb-2">ایمیل</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full bg-white border border-h-blush/30 rounded-xl px-5 py-3.5 pr-12 text-sm text-h-charcoal placeholder:text-h-textMuted focus:outline-none focus:ring-2 focus:ring-h-rose/30 focus:border-h-rose transition-all"
                  required
                />
                <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-h-textMuted" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-h-charcoal mb-2">رمز عبور</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="w-full bg-white border border-h-blush/30 rounded-xl px-5 py-3.5 pr-12 pl-12 text-sm text-h-charcoal placeholder:text-h-textMuted focus:outline-none focus:ring-2 focus:ring-h-rose/30 focus:border-h-rose transition-all"
                  required
                />
                <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-h-textMuted" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-h-textMuted hover:text-h-charcoal transition-colors cursor-pointer">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="mt-2 text-left">
                <Link href="/auth/forgot" className="text-xs text-h-wine hover:underline">رمز عبور را فراموش کرده‌اید؟</Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-h-blush/30 text-h-wine focus:ring-h-rose/30" />
              <label htmlFor="remember" className="text-sm text-h-textLight">مرا به خاطر بسپار</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-luxury bg-h-burgundy text-white rounded-xl py-4 font-medium hover:shadow-xl hover:shadow-h-burgundy/20 transition-all duration-500 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  در حال ورود...
                </span>
              ) : 'ورود'}
            </button>
          </form>

          <div className="divider-elegant my-8">
            <span className="text-xs text-h-textMuted">یا</span>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-h-blush/30 rounded-xl py-3 text-sm text-h-charcoal hover:bg-h-blush/5 transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              گوگل
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-h-blush/30 rounded-xl py-3 text-sm text-h-charcoal hover:bg-h-blush/5 transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0088cc"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              تلگرام
            </button>
          </div>

          <p className="text-center text-sm text-h-textLight mt-8">
            حساب ندارید؟{' '}
            <Link href="/auth/register" className="text-h-wine font-medium hover:underline">ثبت‌نام کنید</Link>
          </p>
        </motion.div>
      </div>

      {/* Visual Side (desktop only) */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-h-burgundy via-h-wine to-h-rose relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 600 800">
            <text x="300" y="400" textAnchor="middle" fill="white" fontFamily="Cormorant" fontSize="300" fontStyle="italic">H</text>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-white text-center px-12 max-w-lg"
        >
          <h2 className="font-display text-4xl font-light mb-4 leading-relaxed">
            زیبایی در هر جزئیات
          </h2>
          <p className="text-white/50 font-light leading-8 text-sm">
            با عضویت در Hilda، از تخفیف‌های ویژه، محصولات جدید و تجربه خرید منحصربه‌فرد بهره‌مند شوید.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
