'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-hilda-burgundy via-hilda-wine to-hilda-rose p-10 md:p-16 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4">
            با{' '}
            <span className="text-gradient-gold italic font-medium">Hilda</span>{' '}
            همراه شوید
          </h2>
          <p className="text-white/60 font-light mb-8 max-w-lg mx-auto">
            عضو خبرنامه شوید و از تخفیف‌های ویژه، محصولات جدید و رازهای زیبایی
            باخبر شوید
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 text-white"
            >
              <CheckCircle size={24} className="text-hilda-goldLight" />
              <span className="text-lg font-light">
                با موفقیت عضو شدید! 🎉
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3.5 rounded-xl transition-all duration-300 text-white flex items-center gap-2 text-sm font-medium"
              >
                <Send size={16} />
                عضویت
              </button>
            </form>
          )}

          <p className="text-white/30 text-xs mt-4">
            ارسال هرگونه اسپم نداریم. از ایمیل شما فقط برای اطلاع‌رسانی استفاده می‌شود.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
