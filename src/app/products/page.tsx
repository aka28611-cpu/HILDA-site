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
  const [viewMode, setViewMode] = useState<'grid' | 'large'>(`grid`);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedPriceRange = priceRanges.find((p) => p.id === priceRange) || priceRanges[0];

  let filtered = allProducts.filter((p) => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (p.price < selectedPriceRange.min || p.price > selectedPriceRange.max) return false;
    if (searchQuery && !p.name.includes(searchQuery)) return false;
    return true;
  });

  // Sort
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'bestselling':
      filtered.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return (
    <div className="min-h-screen bg-hilda-cream">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-hilda-blush/10 to-hilda-cream pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal text-center">
              محصولات <span className="text-gradient-rose italic">Hilda</span>
            </h1>
            <p className="text-center text-hilda-charcoal/50 mt-3 font-light">
              مجموعه‌ای از زیباترین لباس‌های زیر زنانه
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-hilda-blush/20">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-hilda-burgundy text-white'
                    : 'bg-hilda-blush/10 text-hilda-charcoal/60 hover:bg-hilda-blush/20'
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
              className="p-2 rounded-lg hover:bg-hilda-blush/10 transition-colors"
            >
              <SlidersHorizontal size={18} />
            </button>
            <div className="flex bg-hilda-blush/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode('large')}
                className={`p-1.5 rounded-md transition-colors ${viewMode === 'large' ? 'bg-white shadow-sm' : ''}`}
              >
                <LayoutGrid size={16} />
              </button>
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-hilda-blush/10 text-sm px-4 py-2 pr-8 rounded-lg cursor-pointer focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="py-6 flex flex-wrap gap-6">
                {/* Search */}
                <div className="relative flex-1 min-w-[200px]">
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-hilda-charcoal/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجوی محصول..."
                    className="w-full bg-hilda-blush/10 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-blush/30"
                  />
                </div>
                {/* Price Range */}
                <div className="flex gap-2 flex-wrap">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                        priceRange === range.id
                          ? 'bg-hilda-wine text-white'
                          : 'bg-hilda-blush/10 text-hilda-charcoal/60 hover:bg-hilda-blush/20'
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
        <div className="py-4 text-sm text-hilda-charcoal/50">
          {filtered.length} محصول یافت شد
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-4 md:gap-8 ${
            viewMode === 'large'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display text-2xl text-hilda-charcoal mb-2">
              محصولی یافت نشد
            </h3>
            <p className="text-hilda-charcoal/50 font-light">
              فیلترها را تغییر دهید یا جستجوی دیگری امتحان کنید
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
