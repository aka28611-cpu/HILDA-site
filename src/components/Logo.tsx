'use client';

import Link from 'next/link';

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-3xl' };
  return (
    <Link href="/" className={`font-display ${sizes[size]} font-light tracking-[0.2em] text-h-charcoal`}>
      HILDA
    </Link>
  );
}
