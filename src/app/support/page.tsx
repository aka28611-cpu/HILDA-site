'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Send,
  Headphones,
  HelpCircle,
  Package,
} from 'lucide-react';

const faqs = [
  {
    q: 'زمان ارسال سفارشات چقدر است؟',
    a: 'سفارشات تهران ۱-۲ روز کاری و شهرستان‌ها ۳-۵ روز کاری زمان می‌برد.',
  },
  {
    q: 'آیا امکان تغییر یا لغو سفارش وجود دارد؟',
    a: 'بله، تا قبل از ارسال سفارش می‌توانید آن را تغییر یا لغو کنید. با پشتیبانی تماس بگیرید.',
  },
  {
    q: 'شرایط مرجوعی چگونه است؟',
    a: 'تا ۷ روز پس از دریافت، در صورت عدم استفاده و حفظ بسته‌بندی اصلی امکان مرجوعی وجود دارد.',
  },
  {
    q: 'آیا ارسال رایگان دارید؟',
    a: 'بله، سفارش‌های بالای ۵۰۰ هزار تومان شامل ارسال رایگان هستند.',
  },
  {
    q: 'چگونه سایز مناسب را انتخاب کنم؟',
    a: 'در صفحه هر محصول جدول سایز موجود است. همچنین می‌توانید از چت بات هوش مصنوعی ما برای راهنمایی سایز کمک بگیرید.',
  },
  {
    q: 'آیا محصولات اصل هستند؟',
    a: 'بله، تمامی محصولات Hilda اورجینال و با ضمانت اصالت عرضه می‌شوند.',
  },
  {
    r: 'روش‌های پرداخت چیست؟',
    a: 'پرداخت آنلاین از طریق درگاه‌های بانکی، کارت به کارت، و پرداخت در محل (زیر ۲ میلیون تومان).',
  },
];

const contactMethods = [
  { icon: Phone, title: 'تماس تلفنی', value: '۰۹۱۲-۱۲۳-۴۵۶۷', desc: 'شنبه تا پنجشنبه ۹ الی ۱۸', color: 'bg-green-50 text-green-600' },
  { icon: Mail, title: 'ایمیل', value: 'support@hilda.com', desc: 'پاسخ ظرف ۲۴ ساعت', color: 'bg-blue-50 text-blue-600' },
  { icon: MessageCircle, title: 'چت آنلاین', value: 'گفتگو با کارشناس', desc: 'پاسخ فوری', color: 'bg-purple-50 text-purple-600' },
  { icon: Clock, title: 'ساعات کاری', value: '۹ صبح تا ۶ عصر', desc: 'شنبه تا پنجشنبه', color: 'bg-yellow-50 text-yellow-600' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-hilda-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Headphones size={40} className="mx-auto text-hilda-wine mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-light text-hilda-charcoal">
            پشتیبانی <span className="text-gradient-rose italic font-medium">Hilda</span>
          </h1>
          <p className="text-hilda-charcoal/50 mt-4 font-light max-w-lg mx-auto">
            ما اینجا هستیم تا کمکتون کنیم. هر سوالی دارید بپرسید.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-hilda-blush/10 p-5 text-center hover:shadow-lg hover:shadow-hilda-blush/10 transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mx-auto mb-3`}>
                <method.icon size={22} />
              </div>
              <h3 className="text-sm font-medium text-hilda-charcoal mb-1">{method.title}</h3>
              <p className="text-xs text-hilda-charcoal/60 font-medium">{method.value}</p>
              <p className="text-[10px] text-hilda-charcoal/30 mt-1">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle size={20} className="text-hilda-wine" />
              <h2 className="font-display text-2xl text-hilda-charcoal">سوالات متداول</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-hilda-blush/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-right hover:bg-hilda-blush/5 transition-colors"
                  >
                    <span className="text-sm font-medium text-hilda-charcoal">{faq.q}</span>
                    <ChevronDown size={16} className={`text-hilda-charcoal/30 transition-transform duration-300 flex-shrink-0 mr-2 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 pb-4 text-sm text-hilda-charcoal/50 font-light leading-7 border-t border-hilda-blush/10 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Package size={20} className="text-hilda-wine" />
              <h2 className="font-display text-2xl text-hilda-charcoal">ارسال پیام</h2>
            </div>
            <div className="bg-white rounded-2xl border border-hilda-blush/10 p-6">
              {formSent ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="font-display text-xl text-hilda-charcoal mb-2">پیام شما ارسال شد!</h3>
                  <p className="text-sm text-hilda-charcoal/50">به زودی با شما تماس خواهیم گرفت.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSend} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="نام شما"
                      className="bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20"
                      required
                    />
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="ایمیل"
                      className="bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20"
                      required
                    />
                  </div>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20 text-hilda-charcoal/50"
                    required
                  >
                    <option value="">موضوع پیام</option>
                    <option value="order">پیگیری سفارش</option>
                    <option value="return">مرجوعی محصول</option>
                    <option value="size">راهنمای سایز</option>
                    <option value="other">سایر</option>
                  </select>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="پیام شما..."
                    rows={5}
                    className="w-full bg-hilda-blush/5 border border-hilda-blush/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20 resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full btn-luxury bg-hilda-burgundy text-white rounded-xl flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    ارسال پیام
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
