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
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/profile';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 bg-hilda-cream relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Back to Home */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-hilda-charcoal/50 hover:text-hilda-wine transition-colors mb-8">
            <ArrowLeft size={16} />
            بازگشت به خانه
          </Link>

          {/* Logo */}
          <div className="mb-8">
            <Logo variant="full" size="lg" />
          </div>

          <h1 className="font-display text-3xl font-light text-hilda-charcoal mb-2">
            خوش آمدید
          </h1>
          <p className="text-hilda-charcoal/50 font-light mb-8">
            برای ادامه وارد حساب خود شوید
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-hilda-charcoal mb-2">ایمیل</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full bg-white border border-hilda-blush/30 rounded-xl px-5 py-3.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/30 focus:border-hilda-rose transition-all"
                  required
                />
                <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-hilda-charcoal/30" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-hilda-charcoal mb-2">رمز عبور</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="w-full bg-white border border-hilda-blush/30 rounded-xl px-5 py-3.5 pr-12 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/30 focus:border-hilda-rose transition-all"
                  required
                />
                <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-hilda-charcoal/30" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-hilda-charcoal/30 hover:text-hilda-charcoal/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="mt-2 text-left">
                <Link href="/auth/forgot" className="text-xs text-hilda-wine hover:underline">
                  رمز عبور را فراموش کرده‌اید؟
                </Link>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-hilda-blush/30 text-hilda-wine focus:ring-hilda-rose/30"
              />
              <label htmlFor="remember" className="text-sm text-hilda-charcoal/60">
                مرا به خاطر بسپار
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-luxury bg-hilda-burgundy text-white rounded-xl py-4 font-medium hover:shadow-xl hover:shadow-hilda-burgundy/30 transition-all duration-500 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  در حال ورود...
                </span>
              ) : (
                'ورود'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider-elegant my-8">
            <span className="text-xs text-hilda-charcoal/30">یا</span>
          </div>

          {/* Social Login */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-hilda-blush/30 rounded-xl py-3 text-sm hover:bg-hilda-blush/5 transition-colors">
              <span className="text-lg">🔵</span>
              گوگل
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-hilda-blush/30 rounded-xl py-3 text-sm hover:bg-hilda-blush/5 transition-colors">
              <span className="text-lg">✈️</span>
              تلگرام
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-hilda-charcoal/50 mt-8">
            حساب ندارید؟{' '}
            <Link href="/auth/register" className="text-hilda-wine font-medium hover:underline">
              ثبت‌نام کنید
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Left Side - Visual (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-hilda-burgundy via-hilda-wine to-hilda-rose relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 600 800">
            <text x="300" y="400" textAnchor="middle" fill="white" fontFamily="Cormorant Garamond" fontSize="300" fontStyle="italic">H</text>
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
          <p className="text-white/50 font-light leading-8">
            با عضویت در Hilda، از تخفیف‌های ویژه، محصولات جدید و تجربه خرید
            منحصربه‌فرد بهره‌مند شوید.
          </p>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 text-6xl opacity-30"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 text-5xl opacity-30"
          >
            🌸
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
