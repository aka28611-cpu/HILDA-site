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
        className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-hilda-burgundy via-hilda-wine to-hilda-rose p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
        <div className="relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl font-light text-white mb-3">
            با <span className="text-gradient-gold italic">Hilda</span> همراه شوید
          </h2>
          <p className="text-white/50 font-light text-xs sm:text-sm mb-6 sm:mb-8 max-w-sm mx-auto">از تخفیف‌های ویژه و محصولات جدید باخبر شوید</p>
          {submitted ? (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2 text-white">
              <CheckCircle size={20} className="text-hilda-goldLight" /> <span className="text-sm">با موفقیت عضو شدید!</span>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail(''); } }} className="max-w-sm mx-auto flex gap-2">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل شما"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 sm:py-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors" required />
              <button type="submit" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                <Send size={13} /> عضویت
              </button>
            </form>
          )}
          <p className="text-white/25 text-[9px] mt-3">ارسال اسپم نداریم.</p>
        </div>
      </motion.div>
    </section>
  );
}
