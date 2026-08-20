'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingBag, RefreshCw, CreditCard, AlertCircle, Scale } from 'lucide-react';

const sections = [
  {
    icon: ShoppingBag,
    title: 'شرایط خرید',
    content:
      'با ثبت سفارش، شما تایید می‌کنید که اطلاعات وارد شده صحیح است. Hilda حق لغو سفارش در صورت عدم موجودی یا اشتباه قیمت را محفوظ می‌دارد. قیمت‌ها با احتساب مالیات بر ارزش افزوده هستند.',
  },
  {
    icon: CreditCard,
    title: 'شرایط پرداخت',
    content:
      'پرداخت از طریق درگاه‌های بانکی معتبر انجام می‌شود. سفارشات پس از تایید پرداخت پردازش می‌شوند. امکان پرداخت در محل نیز برای سفارش‌های زیر ۲ میلیون تومان وجود دارد.',
  },
  {
    icon: RefreshCw,
    title: 'شرایط مرجوعی',
    content:
      'شما تا ۷ روز پس از دریافت سفارش فرصت مرجوعی دارید. کالا باید در بسته‌بندی اصلی و بدون استفاده باشد. هزینه مرجوعی در صورت عیب محصول بر عهده Hilda است.',
  },
  {
    icon: AlertCircle,
    title: 'مسئولیت‌ها',
    content:
      'Hilda تلاش می‌کند اطلاعات محصولات دقیق باشد اما ممکن است تفاوت‌های جزئی در رنگ یا جزئیات وجود داشته باشد. مسئولیت استفاده نادرست از محصول بر عهده خریدار است.',
  },
  {
    icon: Scale,
    title: 'قوانین عمومی',
    content:
      'تمامی اختلافات بر اساس قوانین جمهوری اسلامی ایران حل می‌شوند. Hilda حق تغییر شرایط و قوانین را در هر زمان محفوظ می‌دارد.',
  },
  {
    icon: FileText,
    title: 'مالکیت فکری',
    content:
      'تمامی محتوای سایت شامل طراحی، لوگو، تصاویر و متن‌ها متعلق به Hilda هستند و هرگونه کپی‌برداری غیرمجاز پیگرد قانونی دارد.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-hilda-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <FileText size={40} className="mx-auto text-hilda-wine mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal">
            شرایط و <span className="text-gradient-rose italic font-medium">قوانین</span>
          </h1>
          <p className="text-hilda-charcoal/50 mt-4 font-light max-w-lg mx-auto">
            لطفاً قبل از خرید شرایط زیر را مطالعه کنید
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
      </div>
    </div>
  );
}
