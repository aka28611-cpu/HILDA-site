'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); window.location.href = '/profile'; }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Visual Side (desktop) */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-h-wine via-h-rose to-h-blush relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-16 right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative z-10 text-white text-center px-12 max-w-lg">
          <h2 className="font-display text-4xl font-light mb-4 leading-relaxed">
            عضو خانواده <span className="italic">Hilda</span> شوید
          </h2>
          <p className="text-white/50 font-light leading-8 text-sm">
            از تخفیف‌های ویژه، محصولات جدید و پیشنهادات اختصاصی بهره‌مند شوید
          </p>
        </motion.div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 bg-h-cream">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-h-textMuted hover:text-h-wine transition-colors mb-8">
            <ArrowLeft size={14} /> بازگشت به خانه
          </Link>

          <div className="mb-8"><Logo size="lg" /></div>

          <h1 className="font-display text-3xl font-light text-h-charcoal mb-2">ایجاد حساب جدید</h1>
          <p className="text-h-textLight text-sm font-light mb-8">اطلاعات خود را برای ثبت‌نام وارد کنید</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-h-charcoal mb-2">نام و نام خانوادگی</label>
              <div className="relative">
                <input type="text" value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} placeholder="نام کامل" className="w-full bg-white border border-h-blush/30 rounded-xl px-5 py-3.5 pr-12 text-sm text-h-charcoal placeholder:text-h-textMuted focus:outline-none focus:ring-2 focus:ring-h-rose/30 focus:border-h-rose transition-all" required />
                <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-h-textMuted" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-h-charcoal mb-2">ایمیل</label>
              <div className="relative">
                <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="example@email.com" className="w-full bg-white border border-h-blush/30 rounded-xl px-5 py-3.5 pr-12 text-sm text-h-charcoal placeholder:text-h-textMuted focus:outline-none focus:ring-2 focus:ring-h-rose/30 focus:border-h-rose transition-all" required />
                <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-h-textMuted" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-h-charcoal mb-2">شماره موبایل</label>
              <div className="relative">
                <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="09121234567" className="w-full bg-white border border-h-blush/30 rounded-xl px-5 py-3.5 pr-12 text-sm text-h-charcoal placeholder:text-h-textMuted focus:outline-none focus:ring-2 focus:ring-h-rose/30 focus:border-h-rose transition-all" dir="ltr" required />
                <Phone size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-h-textMuted" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-h-charcoal mb-2">رمز عبور</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => handleChange('password', e.target.value)} placeholder="حداقل ۸ کاراکتر" className="w-full bg-white border border-h-blush/30 rounded-xl px-5 py-3.5 pr-12 pl-12 text-sm text-h-charcoal placeholder:text-h-textMuted focus:outline-none focus:ring-2 focus:ring-h-rose/30 focus:border-h-rose transition-all" required />
                <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-h-textMuted" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-h-textMuted hover:text-h-charcoal transition-colors cursor-pointer">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 rounded border-h-blush/30 text-h-wine focus:ring-h-rose/30 mt-0.5" />
              <label htmlFor="terms" className="text-xs text-h-textLight leading-5">
                <Link href="/terms" className="text-h-wine hover:underline">شرایط و قوانین</Link> و{' '}
                <Link href="/privacy" className="text-h-wine hover:underline">حریم خصوصی</Link> را مطالعه کرده و می‌پذیرم.
              </label>
            </div>

            <button type="submit" disabled={loading || !agreed} className="w-full btn-luxury bg-h-burgundy text-white rounded-xl py-4 font-medium hover:shadow-xl hover:shadow-h-burgundy/20 transition-all duration-500 disabled:opacity-50 cursor-pointer">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                  در حال ثبت‌نام...
                </span>
              ) : 'ثبت‌نام'}
            </button>
          </form>

          <p className="text-center text-sm text-h-textLight mt-8">
            قبلاً ثبت‌نام کرده‌اید؟{' '}
            <Link href="/auth/login" className="text-h-wine font-medium hover:underline">وارد شوید</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
