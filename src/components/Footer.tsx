'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Instagram,
  Twitter,
  Send,
  Phone,
  Mail,
  MapPin,
  Shield,
  Truck,
  RefreshCw,
  CreditCard,
} from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  products: [
    { name: 'سوتین', href: '/products?category=bras' },
    { name: 'شورت', href: '/products?category=panties' },
    { name: 'ست لانژری', href: '/products?category=sets' },
    { name: 'نایت‌ور', href: '/products?category=nightwear' },
    { name: 'بادی', href: '/products?category=bodysuits' },
    { name: 'فروش ویژه', href: '/products?filter=sale' },
  ],
  company: [
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/support' },
    { name: 'فرصت‌های شغلی', href: '/careers' },
    { name: 'وبلاگ', href: '/blog' },
  ],
  support: [
    { name: 'پشتیبانی', href: '/support' },
    { name: 'سوالات متداول', href: '/faq' },
    { name: 'راهنمای سایز', href: '/size-guide' },
    { name: 'شرایط و قوانین', href: '/terms' },
    { name: 'حریم خصوصی', href: '/privacy' },
  ],
};

const trustBadges = [
  { icon: Truck, title: 'ارسال رایگان', desc: 'بالای ۵۰۰ هزار تومان' },
  { icon: Shield, title: 'ضمانت اصالت', desc: '۱۰۰٪ اورجینال' },
  { icon: RefreshCw, title: 'مرجوعی آسان', desc: 'تا ۷ روز' },
  { icon: CreditCard, title: 'پرداخت امن', desc: 'SSL رمزنگاری' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative mt-20">
      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center hover:shadow-lg hover:shadow-hilda-blush/10 transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-hilda-blush/15 text-hilda-wine mb-3 group-hover:scale-110 transition-transform duration-500">
                <badge.icon size={22} />
              </div>
              <h3 className="font-medium text-sm text-hilda-charcoal mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-hilda-charcoal/50">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-hilda-dark via-[#1f1520] to-hilda-dark text-white mt-12 pt-16 pb-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-hilda-wine/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-hilda-gold/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Newsletter Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-3xl md:text-4xl font-light mb-3">
                <span className="text-gradient-rose">با ما همراه باشید</span>
              </h3>
              <p className="text-white/40 mb-8 font-light">
                عضو خبرنامه شوید و از تخفیف‌ها و محصولات جدید باخبر شوید
              </p>
              <form
                onSubmit={handleSubscribe}
                className="max-w-md mx-auto flex gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل شما"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-hilda-rose/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-hilda-wine to-hilda-rose px-6 py-3 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-hilda-wine/30 transition-all duration-300"
                >
                  {subscribed ? '✓ عضو شدید!' : 'عضویت'}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Logo variant="full" size="md" className="[&_span]:!text-white [&_*:nth-child(2)_span]:!text-white/50" />
              <p className="text-white/40 text-sm font-light mt-4 leading-7">
                برند لوکس لباس زیر زنانه با طراحی‌های منحصربه‌فرد و کیفیت بی‌نظیر. زیبایی، راحتی و اعتماد به نفس را با Hilda تجربه کنید.
              </p>
              {/* Social Media */}
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Send, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-hilda-wine/30 hover:text-hilda-blush transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-hilda-blush">
                محصولات
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-hilda-blush">
                شرکت
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-hilda-blush">
                پشتیبانی
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+989121234567"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  <span className="font-light">۰۹۱۲-۱۲۳-۴۵۶۷</span>
                </a>
                <a
                  href="mailto:info@hilda.com"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  <span className="font-light">info@hilda.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 font-light">
              © {new Date().getFullYear()} Hilda. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                {/* Payment Icons Placeholder */}
                {['پرداخت آنلاین', 'کارت به کارت', 'پرداخت در محل'].map(
                  (method) => (
                    <span
                      key={method}
                      className="text-[10px] text-white/30 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"
                    >
                      {method}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
