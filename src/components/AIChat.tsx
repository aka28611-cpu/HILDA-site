'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  ShoppingBag,
  Ruler,
  Tag,
  HelpCircle,
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const quickActions = [
  { icon: ShoppingBag, label: 'پیشنهاد محصول', prompt: 'محصول مناسب من رو پیشنهاد بده' },
  { icon: Ruler, label: 'راهنمای سایز', prompt: 'راهنمای سایز رو بهم بگو' },
  { icon: Tag, label: 'تخفیف‌ها', prompt: 'چه تخفیف‌هایی فعاله؟' },
  { icon: HelpCircle, label: 'سوال دارم', prompt: 'می‌خوام سوال بپرسم' },
];

const aiResponses: Record<string, string> = {
  default:
    'سلام! 👋 من دستیار هوش مصنوعی Hilda هستم. چطور می‌تونم کمکتون کنم؟ می‌تونم درباره محصولات، سایز، تخفیف‌ها یا هر سوال دیگه‌ای راهنماییتون کنم.',
  product:
    '✨ بسته به سلیقه‌تون پیشنهاد میدم!\n\n🌹 اگه دنبال ظاهر لوکس هستید: ست لانژری رز گلد (۸۹۰,۰۰۰ تومان)\n🖤 برای کلاسیک و شیک: نایت‌ور ساتن مشکی (۶۸۰,۰۰۰ تومان)\n🌸 راحتی روزمره: سوتین بی‌نیاز ابریشمی (۴۵۰,۰۰۰ تومان)\n\nمی‌خواید درباره هرکدوم بیشتر بدونید؟',
  size:
    '📏 راهنمای سایز Hilda:\n\n• XS: دور سینه ۷۵-۸۰ cm\n• S: دور سینه ۸۰-۸۵ cm\n• M: دور سینه ۸۵-۹۰ cm\n• L: دور سینه ۹۰-۹۵ cm\n• XL: دور سینه ۹۵-۱۰۰ cm\n\n💡 نکته: اگه بین دو سایز هستید، سایز بزرگ‌تر رو انتخاب کنید. می‌خواید دقیق‌تر راهنماییتون کنم؟',
  discount:
    '🎉 تخفیف‌های فعال:\n\n🔥 فروش ویژه تا ۴۰٪ روی ست‌های لانژری\n💰 ارسال رایگان برای سفارش‌های بالای ۵۰۰K\n🎁 ۱۰٪ تخفیف اولین خرید با کد WELCOME\n\n⏰ این تخفیف‌ها محدود هستن!',
};

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('پیشنهاد') || lower.includes('محصول') || lower.includes('کدوم') || lower.includes('چی بخرم'))
    return aiResponses.product;
  if (lower.includes('سایز') || lower.includes('size') || lower.includes('اندازه'))
    return aiResponses.size;
  if (lower.includes('تخفیف') || lower.includes('کد') || lower.includes('ارزان'))
    return aiResponses.discount;
  if (lower.includes('سلام') || lower.includes('هلو') || lower.includes('خسته نباشید'))
    return 'سلام خوش آمدید! 🌸 چطور می‌تونم کمکتون کنم؟';
  if (lower.includes('ممنون') || lower.includes('مرسی') || lower.includes('متشکرم'))
    return 'خواهش می‌کنم! 🌹 خوشحالم کمکتون کردم. اگه سوال دیگه‌ای دارید، در خدمتم!';
  if (lower.includes('قیمت') || lower.includes('ارزان') || lower.includes('گرون'))
    return '💰 قیمت محصولات ما از ۱۹۰,۰۰۰ تومان شروع میشه:\n\n• شورت کلاسیک: ۱۹۰K\n• جوراب شبانه: ۲۲۰K\n• سوتین بی‌نیاز: ۴۵۰K\n• ست لانژری: ۵۶۰K - ۱,۱۰۰K\n\nمی‌خواید محصولی رو ببینید؟';
  if (lower.includes('ارسال') || lower.includes('پست') || lower.includes('تحویل'))
    return '📦 اطلاعات ارسال:\n\n• تهران: ۱-۲ روز کاری\n• شهرستان: ۳-۵ روز کاری\n• ارسال رایگان بالای ۵۰۰K\n• پیگیری سفارش از پروفایل شما';
  return 'ممنون از پیامتون! 💕\n\nبرای پاسخ دقیق‌تر، لطفاً سوالتون رو rõتر بنویسید. من می‌تونم درباره:\n\n• 🛍️ پیشنهاد محصول\n• 📏 راهنمای سایز\n• 💰 قیمت‌ها و تخفیف‌ها\n• 📦 ارسال و پیگیری\n\nکمکتون کنم!';
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: aiResponses.default,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = getAIResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-hilda-wine to-hilda-rose text-white shadow-xl shadow-hilda-wine/30 flex items-center justify-center group"
          >
            <Bot size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-hilda-gold rounded-full animate-pulse" />
            <span className="absolute -top-10 right-0 bg-hilda-charcoal text-white text-[10px] px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              دستیار هوش مصنوعی
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[560px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl shadow-hilda-charcoal/10 flex flex-col overflow-hidden border border-hilda-blush/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-hilda-burgundy to-hilda-wine p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">دستیار Hilda</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/60 text-[10px]">آنلاین</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${
                    msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user'
                        ? 'bg-hilda-blush/20'
                        : 'bg-gradient-to-br from-hilda-wine to-hilda-rose'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User size={14} className="text-hilda-wine" />
                    ) : (
                      <Bot size={14} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-7 chat-bubble-animate ${
                      msg.role === 'user'
                        ? 'bg-hilda-burgundy text-white rounded-tr-sm'
                        : 'bg-hilda-blush/10 text-hilda-charcoal rounded-tl-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.content}</div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-hilda-wine to-hilda-rose flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-hilda-blush/10 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-hilda-rose/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-hilda-rose/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-hilda-rose/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => sendMessage(action.prompt)}
                    className="flex items-center gap-1.5 px-3 py-2 bg-hilda-blush/10 rounded-full text-xs text-hilda-charcoal/70 hover:bg-hilda-blush/20 transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    <action.icon size={12} />
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-hilda-blush/10">
              <div className="flex gap-2 items-end">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                  placeholder="پیام خود را بنویسید..."
                  className="flex-1 bg-hilda-blush/5 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-hilda-rose/20 border border-hilda-blush/10"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-hilda-burgundy text-white flex items-center justify-center hover:bg-hilda-wine transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="rotate-180" />
                </button>
              </div>
              <p className="text-[9px] text-hilda-charcoal/20 text-center mt-2">
                قدرت گرفته از هوش مصنوعی Hilda
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
