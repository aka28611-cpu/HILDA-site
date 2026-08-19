'use client';

import React from 'react';
import Link from 'next/link';

const links = {
  shop: [
    { name: 'سوتین', href: '/products?category=bras' },
    { name: 'شورت', href: '/products?category=panties' },
    { name: 'ست لانژری', href: '/products?category=sets' },
    { name: 'نایت‌ور', href: '/products?category=nightwear' },
  ],
  company: [
    { name: 'داستان ما', href: '/about' },
    { name: 'پشتیبانی', href: '/support' },
    { name: 'حریم خصوصی', href: '/privacy' },
    { name: 'شرایط', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 px-6 sm:px-10 border-t border-h-charcoal/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 sm:col-span-1">
            <div className="font-display text-xl font-light tracking-[0.15em] text-h-charcoal mb-4">HILDA</div>
            <p className="text-[11px] text-h-textLight leading-6">لوکس و زیبا، برای زنانی که خودشان را دوست دارند.</p>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-h-textMuted mb-4">فروشگاه</h4>
            <ul className="space-y-2.5">
              {links.shop.map((l) => <li key={l.name}><Link href={l.href} className="text-[11px] text-h-textLight hover:text-h-wine transition-colors">{l.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-h-textMuted mb-4">شرکت</h4>
            <ul className="space-y-2.5">
              {links.company.map((l) => <li key={l.name}><Link href={l.href} className="text-[11px] text-h-textLight hover:text-h-wine transition-colors">{l.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-h-textMuted mb-4">تماس</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:info@hilda.com" className="text-[11px] text-h-textLight hover:text-h-wine transition-colors">info@hilda.com</a></li>
              <li><a href="tel:+989121234567" className="text-[11px] text-h-textLight hover:text-h-wine transition-colors">۰۹۱۲-۱۲۳-۴۵۶۷</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-h-charcoal/5">
          <p className="text-[9px] text-h-textMuted">© {new Date().getFullYear()} Hilda. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            {['Instagram', 'Telegram'].map((s) => (
              <a key={s} href="#" className="text-[9px] text-h-textMuted hover:text-h-wine transition-colors tracking-wider uppercase">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
