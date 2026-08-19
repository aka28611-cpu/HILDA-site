'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gem, Leaf, Award, Users, Star } from 'lucide-react';

const values = [
  { icon: Heart, title: 'زیبایی', desc: 'طراحی‌هایی که حس زیبایی و اعتماد به نفس را به شما هدیه می‌دهند.' },
  { icon: Gem, title: 'کیفیت', desc: 'استفاده از بهترین مواد اولیه و دوخت با دقت بالا.' },
  { icon: Leaf, title: 'پایداری', desc: 'تعهد به تولید پایدار و دوستدار محیط زیست.' },
  { icon: Award, title: 'اعتماد', desc: 'بیش از ۱۰,۰۰۰ مشتری راضی و ۹۸٪ رضایت.' },
];

const stats = [
  { value: '+۱۰K', label: 'مشتری راضی' },
  { value: '+۵۰۰', label: 'محصول متنوع' },
  { value: '+۲۰', label: 'نوع دسته‌بندی' },
  { value: '۴.۹', label: 'امتیاز مشتریان' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-hilda-cream">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hilda-blush/10 to-hilda-cream" />
        <div className="absolute top-10 left-20 w-72 h-72 bg-hilda-blush/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-hilda-wine/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-hilda-rose tracking-widest uppercase font-light">داستان ما</span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-hilda-charcoal mt-4 mb-6">
              ساخته شده با <span className="text-gradient-rose italic font-medium">عشق</span>
            </h1>
            <p className="text-hilda-charcoal/50 font-light leading-8 max-w-2xl mx-auto text-lg">
              Hilda با هدف ارائه لباس زیری متولد شد که هم زیبا باشد، هم راحت، و
              هم به شما احساس اعتماد به نفس بدهد.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-hilda-blush/10 p-6 text-center"
              >
                <div className="text-3xl font-display font-semibold text-hilda-wine">{stat.value}</div>
                <div className="text-sm text-hilda-charcoal/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sm text-hilda-rose tracking-widest uppercase font-light">ماموریت ما</span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-hilda-charcoal mt-3 mb-6">
                زیبایی و <span className="text-gradient-rose italic">راحتی</span> در کنار هم
              </h2>
              <p className="text-hilda-charcoal/60 font-light leading-8 mb-4">
                ما در Hilda باور داریم که هر زنی لایق احساس زیبایی و راحتی است.
                محصولات ما با الهام از زیبایی طبیعی و با تمرکز بر کیفیت و
                راحتی طراحی می‌شوند.
              </p>
              <p className="text-hilda-charcoal/60 font-light leading-8">
                از انتخاب پارچه تا طراحی و دوخت، هر مرحله با دقت و عشق
                انجام می‌شود تا محصولی به شما برسد که واقعاً ارزش پوشیدن داشته باشد.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-hilda-blush via-hilda-rose to-hilda-wine flex items-center justify-center shadow-2xl shadow-hilda-rose/20">
                <span className="font-display text-white/20 text-[180px] font-light italic">H</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm text-hilda-rose tracking-widest uppercase font-light">ارزش‌های ما</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-hilda-charcoal mt-3">
              چه چیزی ما را <span className="text-gradient-rose italic">متفاوت</span> می‌کند
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-6 rounded-2xl hover:bg-hilda-blush/5 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-hilda-blush/10 flex items-center justify-center mx-auto mb-4 text-hilda-wine">
                  <value.icon size={26} />
                </div>
                <h3 className="font-medium text-hilda-charcoal mb-2">{value.title}</h3>
                <p className="text-sm text-hilda-charcoal/50 font-light leading-6">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
