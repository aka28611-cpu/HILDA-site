'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  light?: boolean;
}

export default function Logo({ className = '', variant = 'full', size = 'md', light = false }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 34, text: 'text-xl' },
    lg: { icon: 44, text: 'text-3xl' },
  };

  const textColor = light ? 'text-white' : 'text-h-charcoal';
  const subColor = light ? 'text-white/40' : 'text-h-charcoal/35';

  return (
    <Link href="/" className={`flex items-center gap-1.5 ${className}`}>
      {(variant === 'full' || variant === 'icon') && (
        <div className="relative">
          <svg width={sizes[size].icon} height={sizes[size].icon} viewBox="0 0 80 80" fill="none">
            <defs>
              <linearGradient id="hilda-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A16207" />
                <stop offset="50%" stopColor="#D4A574" />
                <stop offset="100%" stopColor="#A16207" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="38" fill="none" stroke="url(#hilda-gold)" strokeWidth="0.8" opacity="0.4" />
            <text x="40" y="48" textAnchor="middle" fill="url(#hilda-gold)" fontFamily="Cormorant, Georgia, serif" fontSize="36" fontWeight="600" fontStyle="italic">H</text>
          </svg>
        </div>
      )}
      {(variant === 'full' || variant === 'text') && (
        <div className="flex flex-col">
          <span className={`${sizes[size].text} font-display font-semibold tracking-[0.2em] ${textColor} leading-none`}>
            HILDA
          </span>
          {size !== 'sm' && (
            <span className={`text-[0.55em] tracking-[0.35em] ${subColor} font-sans font-light uppercase mt-0.5`}>
              Lingerie
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
