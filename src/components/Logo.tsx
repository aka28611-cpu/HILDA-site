'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', variant = 'full', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-2xl' },
    lg: { icon: 56, text: 'text-4xl' },
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      {(variant === 'full' || variant === 'icon') && (
        <div className="relative">
          <svg
            width={sizes[size].icon}
            height={sizes[size].icon}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elegant H with ribbon */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B2252" />
                <stop offset="50%" stopColor="#C9787C" />
                <stop offset="100%" stopColor="#D4A574" />
              </linearGradient>
            </defs>
            {/* Heart shape base */}
            <path
              d="M50 85 C25 65 5 50 5 30 C5 15 15 5 30 5 C38 5 45 10 50 18 C55 10 62 5 70 5 C85 5 95 15 95 30 C95 50 75 65 50 85Z"
              fill="url(#logoGradient)"
              opacity="0.15"
            />
            {/* Letter H */}
            <text
              x="50"
              y="62"
              textAnchor="middle"
              fill="url(#logoGradient)"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="48"
              fontWeight="600"
              fontStyle="italic"
            >
              H
            </text>
            {/* Small decorative dot */}
            <circle cx="50" cy="25" r="2" fill="#D4A574" />
            {/* Ribbon under */}
            <path
              d="M30 72 Q50 82 70 72"
              stroke="url(#logoGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Logo Text */}
      {(variant === 'full' || variant === 'text') && (
        <div className="flex flex-col">
          <span
            className={`${sizes[size].text} font-display font-semibold tracking-[0.15em] text-hilda-burgundy leading-none`}
          >
            HILDA
          </span>
          {size !== 'sm' && (
            <span className="text-[0.6em] tracking-[0.3em] text-hilda-rose font-sans font-light uppercase">
              Lingerie
            </span>
          )}
        </div>
      )}
    </div>
  );
}
