-- Seed data for Hilda Lingerie

-- Categories
INSERT INTO public.categories (name, slug, description, sort_order) VALUES
('سوتین', 'bras', 'طراحی بی‌نقص برای هر فرم', 1),
('شورت', 'panties', 'راحتی در هر حرکت', 2),
('ست لانژری', 'sets', 'ست‌های شیک و خاص', 3),
('نایت‌ور', 'nightwear', 'شب‌های راحت و زیبا', 4),
('بادی', 'bodysuits', 'ظاهری خاص و مدرن', 5),
('جوراب', 'hosiery', 'کامل‌کننده استایل', 6);

-- Sample Products
INSERT INTO public.products (name, description, price, original_price, category_id, images, sizes, colors, featured, rating, review_count) VALUES
(
  'ست لانژری رز گلد',
  'ست لانژری رز گلد Hilda با پارچه ابریشم مصنیعی درجه یک و طراحی منحصربه‌فرد. شامل سوتین و شورت با جزئیات ظریف تور و روبان.',
  890000,
  1200000,
  (SELECT id FROM categories WHERE slug = 'sets'),
  ARRAY['https://images.unsplash.com/photo-1571513722275-4b419cb09b89?w=800&h=1000&fit=crop'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  '[{"name": "رز گلد", "hex": "#E8B4B8"}, {"name": "مشکی", "hex": "#1A1A1A"}, {"name": "شکری", "hex": "#D4A574"}]'::jsonb,
  TRUE,
  4.9,
  128
),
(
  'سوتین بی‌نیاز ابریشمی',
  'سوتین بی‌نیاز با پارچه ابریشمی نرم و طراحی ارگونومیک. مناسب برای استفاده روزمره.',
  450000,
  NULL,
  (SELECT id FROM categories WHERE slug = 'bras'),
  ARRAY['https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&h=1000&fit=crop'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  '[{"name": "کرمی", "hex": "#FDF6F0"}, {"name": "صورتی", "hex": "#C9787C"}]'::jsonb,
  TRUE,
  4.8,
  95
),
(
  'نایت‌ور ساتن مشکی',
  'نایت‌ور ساتن مشکی با پارچه لطیف و طراحی جذاب. مناسب برای شب‌های خاص.',
  680000,
  900000,
  (SELECT id FROM categories WHERE slug = 'nightwear'),
  ARRAY['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop'],
  ARRAY['S', 'M', 'L', 'XL'],
  '[{"name": "مشکی", "hex": "#1A1A1A"}, {"name": "بنفش", "hex": "#8B2252"}]'::jsonb,
  FALSE,
  4.7,
  76
);

-- Sample Coupons
INSERT INTO public.coupons (code, discount_percent, min_order, max_uses, expires_at) VALUES
('WELCOME', 10, 0, NULL, '2025-12-31'),
('VIP30', 30, 500000, 100, '2025-12-31'),
('NOWRUZ', 20, 300000, 500, '2025-04-20');
