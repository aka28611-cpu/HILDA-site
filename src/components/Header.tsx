'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  {
    name: 'محصولات',
    href: '/products',
    children: [
      { name: 'سوتین', href: '/products?category=bras' },
      { name: 'شورت', href: '/products?category=panties' },
      { name: 'ست لانژری', href: '/products?category=sets' },
      { name: 'نایت‌ور', href: '/products?category=nightwear' },
      { name: 'بادی', href: '/products?category=bodysuits' },
      { name: 'جوراب', href: '/products?category=hosiery' },
    ],
  },
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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar - Hidden on small mobile */}
      <div className="bg-gradient-to-r from-hilda-burgundy via-hilda-wine to-hilda-burgundy text-white text-center py-2 text-[10px] sm:text-xs tracking-wider font-light relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 sm:gap-16">
          <span>✨ ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان</span>
          <span>💕 فروش ویژه تا ۴۰٪ تخفیف</span>
          <span>🎁 هدیه ویژه اولین خرید</span>
          <span>✨ ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان</span>
          <span>💕 فروش ویژه تا ۴۰٪ تخفیف</span>
          <span>🎁 هدیه ویژه اولین خرید</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-hilda-blush/8 py-2.5 sm:py-3'
            : 'bg-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-1 hover:bg-hilda-blush/10 rounded-xl transition-colors touch-target"
              aria-label="منو"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-hilda-wine ${
                      link.isSale ? 'text-hilda-rose font-semibold' : 'text-hilda-charcoal/80'
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full right-0 mt-2 w-52 glass rounded-2xl shadow-xl shadow-hilda-blush/10 p-3"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3.5 py-2.5 text-sm text-hilda-charcoal/70 hover:text-hilda-wine hover:bg-hilda-blush/8 rounded-xl transition-all duration-300"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Logo - Center */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            >
              <Logo variant="full" size="sm" className="lg:scale-110" />
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 sm:p-2.5 hover:bg-hilda-blush/10 rounded-xl transition-colors touch-target"
                aria-label="جستجو"
              >
                <Search size={20} />
              </button>

              {/* Wishlist - Hidden on very small mobile */}
              <Link
                href="/profile?tab=wishlist"
                className="hidden sm:flex p-2 sm:p-2.5 hover:bg-hilda-blush/10 rounded-xl transition-colors"
                aria-label="علاقه‌مندی‌ها"
              >
                <Heart size={20} />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2 sm:p-2.5 hover:bg-hilda-blush/10 rounded-xl transition-colors touch-target"
                aria-label="سبد خرید"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-hilda-wine text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  ۰
                </span>
              </Link>

              {/* Profile - Hidden on mobile */}
              <Link
                href="/auth/login"
                className="hidden sm:flex p-2 sm:p-2.5 hover:bg-hilda-blush/10 rounded-xl transition-colors"
                aria-label="حساب کاربری"
              >
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="glass border-t border-hilda-blush/15 overflow-hidden"
            >
              <div className="max-w-3xl mx-auto px-4 sm:px-5 py-5 sm:py-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="جستجوی محصولات..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-lg sm:text-xl font-light placeholder:text-hilda-charcoal/25 py-3 sm:py-4 px-10 sm:px-12 border-b-2 border-hilda-blush/25 focus:border-hilda-wine transition-colors duration-300"
                    autoFocus
                  />
                  <Search
                    size={20}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-hilda-charcoal/30"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-hilda-charcoal/30 hover:text-hilda-wine transition-colors touch-target"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="text-[10px] sm:text-xs text-hilda-charcoal/30">پرجستجو:</span>
                  {['سوتین بی‌نیاز', 'ست لانژری', 'نایت‌ور', 'شورت فانتزی'].map((tag) => (
                    <button
                      key={tag}
                      className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-hilda-blush/12 text-hilda-wine hover:bg-hilda-blush/25 transition-colors"
                    >
                      {tag}
                    </button>
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] lg:hidden"
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] z-[65] bg-hilda-cream shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-5 border-b border-hilda-blush/15">
                  <Logo variant="full" size="sm" />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 hover:bg-hilda-blush/10 rounded-xl touch-target"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4 px-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-3.5 text-sm sm:text-base font-light border-b border-hilda-blush/8 ${
                          link.isSale ? 'text-hilda-rose font-medium' : 'text-hilda-charcoal/80'
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="pr-3 pb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-xs sm:text-sm text-hilda-charcoal/50 hover:text-hilda-wine transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Menu Footer */}
                <div className="p-5 border-t border-hilda-blush/15 flex gap-3">
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 btn-luxury bg-hilda-burgundy text-white rounded-xl text-center text-sm py-3"
                  >
                    ورود
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 btn-luxury border-2 border-hilda-burgundy/20 text-hilda-burgundy rounded-xl text-center text-sm py-3"
                  >
                    ثبت‌نام
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
