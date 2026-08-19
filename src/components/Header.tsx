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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-hilda-burgundy via-hilda-wine to-hilda-burgundy text-white text-center py-2.5 text-xs tracking-wider font-light relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16">
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
            ? 'glass shadow-lg shadow-hilda-blush/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 hover:bg-hilda-blush/10 rounded-full transition-colors"
              aria-label="منو"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-hilda-wine ${
                      link.isSale
                        ? 'text-hilda-rose font-semibold'
                        : 'text-hilda-charcoal'
                    }`}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown
                        size={14}
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
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-56 glass rounded-2xl shadow-xl shadow-hilda-blush/10 p-4"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-hilda-charcoal/80 hover:text-hilda-wine hover:bg-hilda-blush/10 rounded-xl transition-all duration-300"
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
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <Logo variant="full" size="md" />
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 hover:bg-hilda-blush/10 rounded-full transition-colors duration-300"
                aria-label="جستجو"
              >
                <Search size={20} />
              </button>

              {/* Wishlist */}
              <Link
                href="/profile?tab=wishlist"
                className="hidden sm:block p-2.5 hover:bg-hilda-blush/10 rounded-full transition-colors duration-300"
                aria-label="علاقه‌مندی‌ها"
              >
                <Heart size={20} />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2.5 hover:bg-hilda-blush/10 rounded-full transition-colors duration-300"
                aria-label="سبد خرید"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-hilda-wine text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-medium">
                  ۰
                </span>
              </Link>

              {/* Profile */}
              <Link
                href="/auth/login"
                className="hidden sm:block p-2.5 hover:bg-hilda-blush/10 rounded-full transition-colors duration-300"
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
              className="glass border-t border-hilda-blush/20"
            >
              <div className="max-w-3xl mx-auto px-4 py-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="جستجوی محصولات..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-xl font-light placeholder:text-hilda-charcoal/30 py-4 px-12 border-b-2 border-hilda-blush/30 focus:border-hilda-wine transition-colors duration-300"
                    autoFocus
                  />
                  <Search
                    size={22}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-hilda-charcoal/40"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-hilda-charcoal/40 hover:text-hilda-wine transition-colors"
                  >
                    <X size={22} />
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-hilda-charcoal/40">پرجستجو:</span>
                  {['سوتین بی‌نیاز', 'ست لانژری', 'نایت‌ور', 'شورت فانتزی'].map(
                    (tag) => (
                      <button
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-hilda-blush/15 text-hilda-wine hover:bg-hilda-blush/30 transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-hilda-cream lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-hilda-blush/20">
                <Logo variant="full" size="sm" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-hilda-blush/10 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3.5 text-lg font-light border-b border-hilda-blush/10 ${
                        link.isSale ? 'text-hilda-rose font-medium' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <div className="pr-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 text-sm text-hilda-charcoal/60 hover:text-hilda-wine transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-hilda-blush/20 flex gap-4">
                <Link
                  href="/auth/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 btn-luxury bg-hilda-burgundy text-white rounded-xl text-center"
                >
                  ورود
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 btn-luxury border-2 border-hilda-burgundy text-hilda-burgundy rounded-xl text-center"
                >
                  ثبت‌نام
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
