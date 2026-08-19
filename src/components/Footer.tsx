'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Send, Phone, Mail, Shield, Truck, RefreshCw, CreditCard } from 'lucide-react';
import Logo from './Logo';

const trustBadges = [
  { icon: Truck, title: 'ارسال رایگان', desc: 'بالای ۵۰۰ هزار تومان' },
  { icon: Shield, title: 'ضمانت اصالت', desc: '۱۰۰٪ اورجینال' },
  { icon: RefreshCw, title: 'مرجوعی آسان', desc: 'تا ۷ روز' },
  { icon: CreditCard, title: 'پرداخت امن', desc: 'SSL رمزنگاری' },
];

const footerLinks = {
  products: [
    { name: 'سوتین', href: '/products?category=bras' },
    { name: 'شورت', href: '/products?category=panties' },
    { name: 'ست لانژری', href: '/products?category=sets' },
    { name: 'نایت‌ور', href: '/products?category=nightwear' },
    { name: 'فروش ویژه', href: '/products?filter=sale' },
  ],
  company: [
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/support' },
    { name: 'وبلاگ', href: '/blog' },
  ],
  support: [
    { name: 'پشتیبانی', href: '/support' },
    { name: 'راهنمای سایز', href: '/size-guide' },
    { name: 'شرایط و قوانین', href: '/terms' },
    { name: 'حریم خصوصی', href: '/privacy' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative mt-16 sm:mt-20">
      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-14 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {trustBadges.map((badge, i) => (
            <motion.div key={badge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-4 sm:p-5 text-center hover:shadow-lg hover:shadow-hilda-blush/10 transition-all duration-500 cursor-default">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-hilda-wine/8 text-hilda-wine mb-2.5">
                <badge.icon size={20} />
              </div>
              <h3 className="font-medium text-[11px] sm:text-xs text-hilda-charcoal mb-0.5">{badge.title}</h3>
              <p className="text-[9px] sm:text-[10px] text-hilda-charcoal/40">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-hilda-dark via-[#1f1520] to-hilda-dark mt-10 sm:mt-12 pt-12 sm:pt-16 pb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-hilda-wine/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-hilda-rose/5 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="font-display text-2xl sm:text-3xl font-light text-white/90 mb-2">
              با <span className="text-gradient-rose italic">Hilda</span> همراه شوید
            </h3>
            <p className="text-white/30 font-light text-xs sm:text-sm mb-6">عضو خبرنامه شوید و از تخفیف‌ها باخبر شوید</p>
            {subscribed ? (
              <p className="text-hilda-gold text-sm">✓ عضو شدید!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubscribed(true); setEmail(''); } }} className="max-w-sm mx-auto flex gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل شما"
                  className="flex-1 bg-white/5 border border-white/8 rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-hilda-rose/40 transition-colors" required />
                <button type="submit" className="bg-hilda-wine/80 hover:bg-hilda-wine text-white px-4 py-2.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Send size={12} /> عضویت
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <Logo variant="full" size="md" className="[&_span]:!text-white [&_*:nth-child(2)_span]:!text-white/40" />
              <p className="text-white/25 text-[11px] font-light mt-4 leading-6">برند لوکس لباس زیر زنانه با طراحی‌های منحصربه‌فرد.</p>
              <div className="flex gap-2.5 mt-4">
                {[Instagram, Twitter, Send].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-hilda-rose/20 transition-all group">
                    <Icon size={14} className="text-white/30 group-hover:text-hilda-rose" />
                  </a>
                ))}
              </div>
            </div>
            {[{ title: 'محصولات', items: footerLinks.products }, { title: 'شرکت', items: footerLinks.company }, { title: 'پشتیبانی', items: footerLinks.support }].map((s) => (
              <div key={s.title}>
                <h4 className="text-[10px] font-semibold mb-3 text-hilda-rose tracking-wider uppercase">{s.title}</h4>
                <ul className="space-y-2">
                  {s.items.map((l) => <li key={l.name}><Link href={l.href} className="text-[11px] text-white/30 hover:text-white/60 transition-colors font-light">{l.name}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-t border-white/5 pt-6">
            <a href="tel:+989121234567" className="flex items-center gap-1.5 text-[10px] text-white/25 hover:text-hilda-rose transition-colors"><Phone size={12} /> ۰۹۱۲-۱۲۳-۴۵۶۷</a>
            <a href="mailto:info@hilda.com" className="flex items-center gap-1.5 text-[10px] text-white/25 hover:text-hilda-rose transition-colors"><Mail size={12} /> info@hilda.com</a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] text-white/15">
            <span>© {new Date().getFullYear()} Hilda. تمامی حقوق محفوظ است.</span>
            <div className="flex gap-3">
              {['پرداخت آنلاین', 'کارت به کارت'].map((m) => (
                <span key={m} className="bg-white/3 px-2.5 py-1 rounded border border-white/5">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
