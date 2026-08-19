# 🌹 Hilda - فروشگاه لوکس لباس زیر زنانه

سایت فروشگاهی لوکس و حرفه‌ای لباس زیر زنانه با برند **Hilda**

## ✨ ویژگی‌ها

### صفحات
- 🏠 **صفحه اصلی** - Hero با انیمیشن پارالاکس، دسته‌بندی‌ها، محصولات پرفروش، داستان برند
- 🛍️ **محصولات** - فیلتر، مرتب‌سازی، نمای شبکه‌ای با انیمیشن
- 📦 **جزئیات محصول** - انتخاب سایز/رنگ، بررسی‌ها، سبد خرید
- 👤 **پروفایل** - سفارشات، پیگیری، علاقه‌مندی‌ها، آدرس‌ها، تنظیمات
- 🛒 **سبد خرید** - مدیریت اقلام، کد تخفیف، خلاصه سفارش
- 🔐 **ورود/ثبت‌نام** - فرم‌های شیک با انیمیشن و لاگین اجتماعی
- 📄 **حریم خصوصی** - صفحه قوانین با طراحی زیبا
- 📋 **شرایط و قوانین** - مقررات استفاده
- 💬 **پشتیبانی** - FAQ تعاملی + فرم تماس
- ℹ️ **درباره ما** - داستان برند و ارزش‌ها

### فنی
- 🤖 **چت‌بات هوش مصنوعی** - دستیار شناور با پاسخ‌های هوشمند
- 🎨 **انیمیشن‌های متحرک** - Framer Motion + Scroll Effects
- 📱 **ریسپانسیو** - موبایل، تبلت، دسکتاپ
- 🔍 **SEO بهینه** - متادیتا، Open Graph، Schema
- 💎 **طراحی لوکس** - پالت رنگی شیک، گرادینت‌ها، افکت‌های شیشه‌ای
- 🌟 **Cursor Glow** - افکت درخشش نور دنبال موس
- 📊 **Scroll Progress** - نوار پیشرفت اسکرول

## 🛠️ تکنولوژی‌ها

| فناوری | کاربرد |
|--------|--------|
| Next.js 14 | فریمورک اصلی (SSR/SSG) |
| TypeScript | زبان برنامه‌نویسی |
| Tailwind CSS | استایل‌دهی |
| Framer Motion | انیمیشن‌ها |
| Supabase | بک‌اند (Auth + Database) |
| Lucide React | آیکون‌ها |
| Cloudflare Pages | هاستینگ |

## 📂 ساختار پروژه

```
src/
├── app/
│   ├── layout.tsx          # لایوت اصلی
│   ├── page.tsx            # صفحه اصلی
│   ├── globals.css         # استایل‌های سراسری
│   ├── products/
│   │   └── page.tsx        # لیست محصولات
│   ├── product/[id]/
│   │   └── page.tsx        # جزئیات محصول
│   ├── auth/
│   │   ├── login/page.tsx  # ورود
│   │   └── register/page.tsx # ثبت‌نام
│   ├── profile/
│   │   └── page.tsx        # پروفایل کاربری
│   ├── cart/
│   │   └── page.tsx        # سبد خرید
│   ├── privacy/
│   │   └── page.tsx        # حریم خصوصی
│   ├── terms/
│   │   └── page.tsx        # شرایط و قوانین
│   ├── support/
│   │   └── page.tsx        # پشتیبانی
│   └── about/
│       └── page.tsx        # درباره ما
├── components/
│   ├── Header.tsx          # هدر با Mega Menu
│   ├── Footer.tsx          # فوتر لوکس
│   ├── Logo.tsx            # لوگوی Hilda
│   ├── Hero.tsx            # سکشن Hero اصلی
│   ├── ProductCard.tsx     # کارت محصول
│   ├── Categories.tsx      # دسته‌بندی‌ها
│   ├── FeaturedProducts.tsx # محصولات ویژه
│   ├── BrandStory.tsx      # داستان برند
│   ├── Testimonials.tsx    # نظرات مشتریان
│   ├── Newsletter.tsx      # خبرنامه
│   ├── AIChat.tsx          # چت‌بات هوش مصنوعی
│   ├── CursorGlow.tsx      # افکت نور دنبال موس
│   └── ScrollProgress.tsx  # نوار پیشرفت
└── lib/
    └── supabase.ts         # کلاینت Supabase
```

## 🚀 راه‌اندازی

### ۱. نصب دیپندنسی‌ها
```bash
npm install
```

### ۲. تنظیم متغیرهای محیطی
```bash
cp .env.local.example .env.local
# مقادیر Supabase رو وارد کنید
```

### ۳. اجرای لوکال
```bash
npm run dev
# سایت در http://localhost:3000 قابل مشاهده است
```

### ۴. بیلد برای استقرار
```bash
npm run build
```

## 🌐 استقرار روی Cloudflare Pages + Supabase

### مرحله ۱: Supabase
1. به [supabase.com](https://supabase.com) بروید و پروژه بسازید
2. SQL Editor رو باز کنید
3. محتوای `supabase/schema.sql` رو اجرا کنید
4. `supabase/seed.sql` رو برای داده‌های نمونه اجرا کنید
5. API Key و URL رو از Settings > API کپی کنید

### مرحله ۲: Cloudflare Pages
1. به [dash.cloudflare.com](https://dash.cloudflare.com) بروید
2. Workers & Pages > Create > Pages
3. به GitHub ریپازیتوری وصلش کنید
4. Build settings:
   - Build command: `npm run build`
   - Build output: `.next`
5. متغیرهای محیطی رو اضافه کنید:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Deploy بزنید

### یا با Wrangler CLI:
```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy .next --project-name=hilda
```

## 🎨 هویت بصری برند Hilda

| عنصر | مقدار |
|------|-------|
| رنگ اصلی | Wine (#8B2252) |
| رنگ ثانویه | Rose (#C9787C) |
| رنگ مکمل | Gold (#D4A574) |
| رنگ پس‌زمینه | Cream (#FDF6F0) |
| فونت عنوان | Cormorant Garamond |
| فونت متن | Inter |
| حالت | RTL (راست به چپ) |

## 📊 SEO

- ✅ متادیتای Open Graph
- ✅ Twitter Cards
- ✅ Semantic HTML
- ✅ Alt Text برای تصاویر
- ✅ Schema.org آماده
- ✅ سرعت بارگذاری بالا (SSG)
- ✅ فارسی‌سازی کامل
- ✅ URL‌های تمیز

## 📄 مجوز

تمامی حقوق برای Hilda محفوظ است.

---

ساخته شده با ❤️ توسط Hilda Development Team
