'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Share2, Cookie } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: 'جمع‌آوری اطلاعات',
    content:
      'ما اطلاعات شخصی شما از جمله نام، ایمیل، شماره تماس و آدرس را فقط برای پردازش سفارشات و بهبود تجربه خرید شما جمع‌آوری می‌کنیم. این اطلاعات هرگز به اشخاص ثالث فروخته نمی‌شوند.',
  },
  {
    icon: Lock,
    title: 'امنیت اطلاعات',
    content:
      'تمامی اطلاعات شما با رمزنگاری SSL محافظت می‌شوند. ما از پروتکل‌های امنیتی پیشرفته برای حفاظت از اطلاعات پرداخت و شخصی شما استفاده می‌کنیم.',
  },
  {
    icon: Eye,
    title: 'استفاده از اطلاعات',
    content:
      'اطلاعات شما فقط برای اهداف زیر استفاده می‌شود: پردازش و ارسال سفارشات، ارسال اطلاع‌رسانی درباره سفارش، بهبود خدمات، و ارسال پیشنهادات ویژه (فقط در صورت رضایت شما).',
  },
  {
    icon: Database,
    title: 'ذخیره‌سازی داده‌ها',
    content:
      'اطلاعات شما تا زمانی که حساب کاربری فعال دارید نگهداری می‌شوند. در صورت درخواست حذف حساب، تمامی اطلاعات شما ظرف ۳۰ روز حذف خواهند شد.',
  },
  {
    icon: Share2,
    title: 'اشتراک‌گذاری با اشخاص ثالث',
    content:
      'ما اطلاعات شما را فقط با شرکت‌های حمل و نقل برای ارسال سفارشات به اشتراک می‌گذاریم. هیچ اطلاعاتی به شرکت‌های تبلیغاتی یا اشخاص ثالث فروخته نمی‌شود.',
  },
  {
    icon: Cookie,
    title: 'کوکی‌ها',
    content:
      'سایت Hilda از کوکی‌ها برای بهبود تجربه کاربری استفاده می‌کند. کوکی‌های ما فقط اطلاعات غیرحساس مرورگر شما را ذخیره می‌کنند و قابل غیرفعال‌سازی هستند.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-hilda-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Shield size={40} className="mx-auto text-hilda-wine mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal">
            حریم <span className="text-gradient-rose italic font-medium">خصوصی</span>
          </h1>
          <p className="text-hilda-charcoal/50 mt-4 font-light max-w-lg mx-auto">
            حفاظت از اطلاعات شخصی شما برای ما بسیار مهم است
          </p>
          <p className="text-xs text-hilda-charcoal/30 mt-2">
            آخرین به‌روزرسانی: مرداد ۱۴۰۳
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-hilda-blush/10 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-hilda-blush/10 flex items-center justify-center text-hilda-wine flex-shrink-0">
                  <section.icon size={20} />
                </div>
                <div>
                  <h2 className="font-display text-xl text-hilda-charcoal mb-3">{section.title}</h2>
                  <p className="text-sm text-hilda-charcoal/60 font-light leading-8">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl border border-hilda-blush/10 p-8">
          <p className="text-sm text-hilda-charcoal/50 font-light">
            در صورت سوال درباره حریم خصوصی، با ما تماس بگیرید:{' '}
            <a href="mailto:privacy@hilda.com" className="text-hilda-wine hover:underline">
              privacy@hilda.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
