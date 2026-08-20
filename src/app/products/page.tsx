'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, LayoutGrid, ChevronDown, X, Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const allProducts = [
  { id: '1', name: 'ست لانژری رز گلد', price: 890000, originalPrice: 1200000, image: 'https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=600&h=800&fit=crop', rating: 4.9, reviews: 128, isNew: true, colors: ['#E8B4B8', '#D4A574', '#1A1A1A'], category: 'sets' },
  { id: '2', name: 'سوتین بی‌نیاز ابریشمی', price: 450000, image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=800&fit=crop', rating: 4.8, reviews: 95, colors: ['#FDF6F0', '#C9787C', '#6B1D3A'], category: 'bras' },
  { id: '3', name: 'نایت‌ور ساتن مشکی', price: 680000, originalPrice: 900000, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop', rating: 4.7, reviews: 76, isSale: true, colors: ['#1A1A1A', '#8B2252'], category: 'nightwear' },
  { id: '4', name: 'بادی توری کلاسیک', price: 750000, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop', rating: 4.9, reviews: 203, isNew: true, colors: ['#C9787C', '#E8B4B8', '#E6E0F0'], category: 'bodysuits' },
  { id: '5', name: 'شورت فانتزی پرنسسی', price: 280000, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop', rating: 4.6, reviews: 142, colors: ['#E8B4B8', '#FDF6F0', '#D4A574'], category: 'panties' },
  { id: '6', name: 'ست میمون و کاپ‌دار', price: 560000, originalPrice: 750000, image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600&h=800&fit=crop', rating: 4.8, reviews: 89, isSale: true, colors: ['#C4A1B4', '#8B2252'], category: 'sets' },
  { id: '7', name: 'سوتین اسپرت کپسولی', price: 380000, image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop', rating: 4.5, reviews: 67, colors: ['#2D2D2D', '#FDF6F0'], category: 'bras' },
  { id: '8', name: 'ست ابریشمی مرواریدی', price: 920000, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop', rating: 4.9, reviews: 156, isNew: true, colors: ['#E6E0F0', '#D4A574', '#C9787C'], category: 'sets' },
  { id: '9', name: 'شورت کلاسیک پنبه‌ای', price: 190000, image: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=600&h=800&fit=crop', rating: 4.4, reviews: 234, colors: ['#FDF6F0', '#E8B4B8', '#1A1A1A'], category: 'panties' },
  { id: '10', name: 'نایت‌ور روبان قرمز', price: 720000, originalPrice: 950000, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop', rating: 4.8, reviews: 91, isSale: true, colors: ['#8B2252', '#C9787C'], category: 'nightwear' },
  { id: '11', name: 'جوراب شبانه توری', price: 220000, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop', rating: 4.6, reviews: 78, colors: ['#1A1A1A', '#E8B4B8'], category: 'hosiery' },
  { id: '12', name: 'ست بریدال سفید', price: 1100000, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop', rating: 5.0, reviews: 45, isNew: true, colors: ['#FFFFFF', '#FDF6F0'], category: 'sets' },
];

const filterCategories = [
  { id: 'all', name: 'همه' },
  { id: 'bras', name: 'سوتین' },
  { id: 'panties', name: 'شورت' },
  { id: 'sets', name: 'ست لانژری' },
  { id: 'nightwear', name: 'نایت‌ور' },
  { id: 'bodysuits', name: 'بادی' },
  { id: 'hosiery', name: 'جوراب' },
];

const sortOptions = [
  { value: 'newest', label: 'جدیدترین' },
  { value: 'price-low', label: 'ارزان‌ترین' },
  { value: 'price-high', label: 'گران‌ترین' },
  { value: 'bestselling', label: 'پرفروش‌ترین' },
  { value: 'rating', label: 'بهترین امتیاز' },
];

const priceRanges = [
  { id: 'all', name: 'همه قیمت‌ها', min: 0, max: Infinity },
  { id: 'under300', name: 'زیر ۳۰۰ هزار', min: 0, max: 300000 },
  { id: '300to600', name: '۳۰۰ تا ۶۰۰ هزار', min: 300000, max: 600000 },
  { id: '600to900', name: '۶۰۰ تا ۹۰۰ هزار', min: 600000, max: 900000 },
  { id: 'over900', name: 'بالای ۹۰۰ هزار', min: 900000, max: Infinity },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedPriceRange = priceRanges.find((p) => p.id === priceRange) || priceRanges[0];

  let filtered = allProducts.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (p.price < selectedPriceRange.min || p.price > selectedPriceRange.max) return false;
    if (searchQuery && !p.name.includes(searchQuery)) return false;
    return true;
  });

  switch (sortBy) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'bestselling': filtered.sort((a, b) => b.reviews - a.reviews); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    default: filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return (
    <div className="min-h-screen bg-h-cream">
      {/* Hero Banner */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-h-blush/15 to-h-cream" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-h-blush/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[15%] w-60 h-60 bg-h-wine/5 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-h-textLight font-medium">مجموعه کامل</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-h-charcoal mt-3 mb-3">
              محصولات <span className="italic text-h-wine">Hilda</span>
            </h1>
            <p className="text-h-textLight text-sm font-light max-w-md mx-auto">
              مجموعه‌ای از زیباترین و باکیفیت‌ترین لباس‌های زیر زنانه
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-b border-h-charcoal/8">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-h-wine text-white shadow-sm shadow-h-wine/15'
                    : 'bg-h-blush/10 text-h-textLight hover:bg-h-blush/20 hover:text-h-text'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${showFilters ? 'bg-h-wine/10 text-h-wine' : 'hover:bg-h-blush/10 text-h-textLight'}`}
            >
              <SlidersHorizontal size={18} />
            </button>
            <div className="flex bg-h-blush/10 rounded-lg p-1">
              <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-white shadow-sm text-h-charcoal' : 'text-h-textMuted'}`}>
                <Grid3X3 size={15} />
              </button>
              <button onClick={() => setViewMode('large')} className={`p-1.5 rounded-md transition-colors cursor-pointer ${viewMode === 'large' ? 'bg-white shadow-sm text-h-charcoal' : 'text-h-textMuted'}`}>
                <LayoutGrid size={15} />
              </button>
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-h-blush/10 text-xs text-h-text px-4 py-2 pr-8 rounded-lg cursor-pointer focus:outline-none border border-transparent focus:border-h-blush/30"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={13} className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-h-textMuted" />
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="py-5 flex flex-wrap gap-5 border-b border-h-charcoal/8">
                <div className="relative flex-1 min-w-[200px]">
                  <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-h-textMuted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجوی محصول..."
                    className="w-full bg-h-blush/8 rounded-xl px-4 py-2.5 pr-10 text-xs text-h-text placeholder:text-h-textMuted focus:outline-none focus:ring-2 focus:ring-h-blush/30 border border-transparent focus:border-h-blush/20"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] transition-all cursor-pointer ${
                        priceRange === range.id
                          ? 'bg-h-wine text-white'
                          : 'bg-h-blush/8 text-h-textLight hover:bg-h-blush/15'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <div className="py-4 text-xs text-h-textMuted">
          {filtered.length} محصول یافت شد
        </div>

        {/* Products Grid */}
        <div className={`grid gap-4 md:gap-8 ${
          viewMode === 'large'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <div className="w-16 h-16 rounded-full bg-h-blush/10 flex items-center justify-center mx-auto mb-5">
              <Search size={24} className="text-h-textMuted" />
            </div>
            <h3 className="font-display text-2xl text-h-charcoal mb-2">محصولی یافت نشد</h3>
            <p className="text-h-textLight text-sm font-light">فیلترها را تغییر دهید یا جستجوی دیگری امتحان کنید</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
