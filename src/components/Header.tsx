'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'محصولات', href: '/products' },
  { name: 'جدیدترین‌ها', href: '/products?filter=new' },
  { name: 'فروش ویژه', href: '/products?filter=sale' },
  { name: 'داستان ما', href: '/about' },
  { name: 'پشتیبانی', href: '/support' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 glass' : 'py-5 bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          <Link href="/" className="font-display text-xl sm:text-2xl font-light tracking-[0.15em] text-h-charcoal">
            HILDA
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}
                className="text-[10px] tracking-[0.15em] uppercase text-h-textLight hover:text-h-wine transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link href="/auth/login" className="hidden sm:block text-[10px] tracking-[0.15em] uppercase text-h-textLight hover:text-h-wine transition-colors">
              ورود
            </Link>
            <Link href="/cart" className="text-[10px] tracking-[0.15em] uppercase text-h-textLight hover:text-h-wine transition-colors relative">
              سبد خرید
              <span className="absolute -top-2 -right-4 text-[8px] bg-h-wine text-white w-3.5 h-3.5 rounded-full flex items-center justify-center">۰</span>
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-1 touch-target" aria-label="منو">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ clipPath: 'circle(0% at 95% 5%)' }} animate={{ clipPath: 'circle(150% at 95% 5%)' }} exit={{ clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[60] bg-h-cream flex items-center justify-center">
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 p-2 touch-target"><X size={24} /></button>
            <nav className="text-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-h-charcoal hover:text-h-wine transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                className="flex gap-6 justify-center mt-12">
                <Link href="/auth/login" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] uppercase text-h-textLight hover:text-h-wine transition-colors">ورود</Link>
                <Link href="/auth/register" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] uppercase text-h-textLight hover:text-h-wine transition-colors">ثبت‌نام</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
