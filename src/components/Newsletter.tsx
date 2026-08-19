'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto rounded-xl sm:rounded-2xl bg-h-dark p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-h-gold/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-h-rose/5 rounded-full blur-[80px]" />

        <div className="relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl font-light text-white/90 mb-3">
            با <span className="text-gradient-gold italic">Hilda</span> همراه شوید
          </h2>
          <p className="text-white/30 font-light text-xs sm:text-sm mb-6 sm:mb-8 max-w-sm mx-auto">
            از تخفیف‌های ویژه و محصولات جدید باخبر شوید
          </p>
          {submitted ? (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2 text-h-gold">
              <CheckCircle size={20} /> <span className="text-sm">با موفقیت عضو شدید!</span>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail(''); } }}
              className="max-w-sm mx-auto flex gap-2">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل شما"
                className="flex-1 bg-white/5 border border-white/8 rounded-lg px-4 py-2.5 sm:py-3 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-h-gold/30 transition-colors" required />
              <button type="submit" className="bg-h-gold hover:bg-h-gold/80 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                <Send size={13} /> عضویت
              </button>
            </form>
          )}
          <p className="text-white/15 text-[9px] mt-3">ارسال اسپم نداریم. فقط اطلاع‌رسانی مفید.</p>
        </div>
      </motion.div>
    </section>
  );
}
