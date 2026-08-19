'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-[600px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-h-muted font-light">خبرنامه</span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-h-charcoal mt-4 mb-4">
            همراه ما باشید
          </h2>
          <p className="text-[11px] sm:text-xs text-h-muted font-light mb-10 leading-7">
            از تخفیف‌های ویژه، محصولات جدید و داستان‌های Hilda باخبر شوید.
          </p>

          {submitted ? (
            <p className="text-sm text-h-wine font-light">با موفقیت عضو شدید ✓</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail(''); } }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل شما"
                className="flex-1 bg-transparent border-b border-h-charcoal/10 px-0 py-3 text-xs text-h-charcoal placeholder:text-h-muted/40 focus:outline-none focus:border-h-wine/40 transition-colors" required />
              <button type="submit" className="btn-premium text-[10px] py-3">عضویت</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
