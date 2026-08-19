'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'محصولات', href: '/products', children: [
    { name: 'سوتین', href: '/products?category=bras' },
    { name: 'شورت', href: '/products?category=panties' },
    { name: 'ست لانژری', href: '/products?category=sets' },
    { name: 'نایت‌ور', href: '/products?category=nightwear' },
    { name: 'بادی', href: '/products?category=bodysuits' },
    { name: 'جوراب', href: '/products?category=hosiery' },
  ]},
  { name: 'جدیدترین‌ها', href: '/products?filter=new' },
  { name: 'پرفروش‌ها', href: '/products?filter=bestselling' },
  { name: 'فروش ویژه', href: '/products?filter=sale', isSale: true },
  { name: 'درباره ما', href: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-h-gold/10 text-h-gold text-center py-1.5 sm:py-2 text-[9px] sm:text-[10px] tracking-[0.1em] font-light relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-10 sm:gap-14">
          {['✨ ارسال رایگان بالای ۵۰۰ هزار تومان', '💕 تا ۴۰٪ تخفیف', '🎁 هدیه اولین خرید'].map((t, i) => (
            <React.Fragment key={i}>
              <span>{t}</span>
              <span>{t}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-2.5 sm:py-3 shadow-lg shadow-black/10' : 'bg-transparent py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 -mr-1 rounded-lg hover:bg-white/5 transition-colors touch-target" aria-label="منو">
              {mobileOpen ? <X size={20} className="text-white/70" /> : <Menu size={20} className="text-white/70" />}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" onMouseEnter={() => link.children && setActiveDropdown(link.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={link.href} className={`flex items-center gap-1 text-[11px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${
                    link.isSale ? 'text-h-gold' : 'text-white/55 hover:text-white'
                  }`}>
                    {link.name}
                    {link.children && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </Link>
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-48 glass-dark rounded-xl p-2 shadow-2xl">
                        {link.children.map((c) => (
                          <Link key={c.name} href={c.href} className="block px-3 py-2 text-[11px] text-white/50 hover:text-h-gold hover:bg-white/5 rounded-lg transition-all">{c.name}</Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <Logo variant="full" size="sm" light />
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:bg-white/5 rounded-lg transition-colors touch-target" aria-label="جستجو">
                <Search size={18} className="text-white/60" />
              </button>
              <Link href="/profile?tab=wishlist" className="hidden sm:flex p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Heart size={18} className="text-white/60" />
              </Link>
              <Link href="/cart" className="relative p-2 hover:bg-white/5 rounded-lg transition-colors touch-target" aria-label="سبد خرید">
                <ShoppingBag size={18} className="text-white/60" />
                <span className="absolute -top-0.5 -right-0.5 bg-h-gold text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">۰</span>
              </Link>
              <Link href="/auth/login" className="hidden sm:flex p-2 hover:bg-white/5 rounded-lg transition-colors">
                <User size={18} className="text-white/60" />
              </Link>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              className="glass-dark border-t border-white/5 overflow-hidden">
              <div className="max-w-3xl mx-auto px-4 py-5 sm:py-6">
                <div className="relative">
                  <input type="text" placeholder="جستجو..." className="w-full bg-white/5 text-white text-sm sm:text-base font-light placeholder:text-white/20 py-3 px-10 border-b border-white/10 focus:border-h-gold/40 transition-colors" autoFocus />
                  <Search size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/25" />
                  <button onClick={() => setSearchOpen(false)} className="absolute left-2 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/50 transition-colors touch-target"><X size={18} /></button>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="text-[9px] text-white/20">پرجستجو:</span>
                  {['ست لانژری', 'سوتین بی‌نیاز', 'نایت‌ور'].map((t) => (
                    <button key={t} className="text-[9px] px-2.5 py-1 rounded-full bg-white/5 text-h-gold/70 hover:bg-white/10 transition-colors">{t}</button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-[320px] z-[65] bg-h-dark shadow-2xl lg:hidden">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-white/5">
                  <Logo variant="full" size="sm" light />
                  <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-white/5 rounded-lg touch-target"><X size={18} className="text-white/60" /></button>
                </div>
                <nav className="flex-1 overflow-y-auto py-3 px-4">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.name} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link href={link.href} onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-3 text-sm font-light border-b border-white/5 ${
                          link.isSale ? 'text-h-gold' : 'text-white/60'
                        }`}>{link.name}</Link>
                      {link.children && (
                        <div className="pr-3 pb-2">
                          {link.children.map((c) => (
                            <Link key={c.name} href={c.href} onClick={() => setMobileOpen(false)}
                              className="block py-2 text-xs text-white/35 hover:text-h-gold transition-colors">{c.name}</Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>
                <div className="p-5 border-t border-white/5 flex gap-3">
                  <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="flex-1 btn-luxury bg-h-gold text-white rounded-sm text-center text-xs py-3">ورود</Link>
                  <Link href="/auth/register" onClick={() => setMobileOpen(false)} className="flex-1 btn-luxury border border-white/10 text-white/60 rounded-sm text-center text-xs py-3 hover:bg-white/5">ثبت‌نام</Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
