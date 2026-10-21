import React from 'react';

interface NavacoLogoProps {
  variant?: 'horizontal' | 'vertical' | 'symbol';
  theme?: 'standard' | 'dark-bg' | 'all-white' | 'all-red' | 'all-graphite';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Exact vector implementation of the NAVACO Brand Identity v1.0 (04/08/2026)
 * - Symbol: Stylized "N" with two interconnected diagonal ribbons ascending rightwards (#D6011E)
 * - Wordmark: Geometric stencil-inspired NAVACO lettering (#42454A or #FFFFFF on dark)
 */
export const NavacoLogo: React.FC<NavacoLogoProps> = ({
  variant = 'horizontal',
  theme = 'standard',
  className = '',
  size = 'md',
}) => {
  const symbolColor =
    theme === 'all-white'
      ? '#FFFFFF'
      : theme === 'all-graphite'
      ? '#42454A'
      : '#D6011E';

  const wordmarkColor =
    theme === 'dark-bg' || theme === 'all-white'
      ? '#FFFFFF'
      : theme === 'all-red'
      ? '#D6011E'
      : '#42454A';

  const heights = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  };

  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 100 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heights[size]} w-auto shrink-0 ${className}`}
        aria-label="NAVACO Symbol"
      >
        {/* Left ascending ribbon and upper bridge */}
        <path
          d="M4 64L30 12C32.5 7 36.5 5 42 5H53C57.5 5 60.5 7.5 63 12L73 30L63.5 44L50 20C49 18.2 47.8 18.2 46.8 20L24 64H4Z"
          fill={symbolColor}
        />
        {/* Right ascending ribbon and lower bridge */}
        <path
          d="M96 5L70 57C67.5 62 63.5 64 58 64H47C42.5 64 39.5 61.5 37 57L27 39L36.5 25L50 49C51 50.8 52.2 50.8 53.2 49L76 5H96Z"
          fill={symbolColor}
        />
      </svg>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <svg
          viewBox="0 0 100 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-auto"
          aria-hidden="true"
        >
          <path
            d="M4 64L30 12C32.5 7 36.5 5 42 5H53C57.5 5 60.5 7.5 63 12L73 30L63.5 44L50 20C49 18.2 47.8 18.2 46.8 20L24 64H4Z"
            fill={symbolColor}
          />
          <path
            d="M96 5L70 57C67.5 62 63.5 64 58 64H47C42.5 64 39.5 61.5 37 57L27 39L36.5 25L50 49C51 50.8 52.2 50.8 53.2 49L76 5H96Z"
            fill={symbolColor}
          />
        </svg>
        <svg
          viewBox="0 0 245 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-auto"
          aria-label="NAVACO"
        >
          {/* N */}
          <path d="M4 36V4H11.5L26.5 24.5V4H33.5V36H26.5L11 15V36H4Z" fill={wordmarkColor} />
          {/* A (chevron without crossbar per NAVACO wordmark) */}
          <path d="M45 36L58.5 4H66L79.5 36H71.8L62.2 12.2L52.6 36H45Z" fill={wordmarkColor} />
          {/* V */}
          <path d="M88 4H95.8L105.4 27.8L115 4H122.6L109.1 36H101.6L88 4Z" fill={wordmarkColor} />
          {/* A (chevron without crossbar) */}
          <path d="M131 36L144.5 4H152L165.5 36H157.8L148.2 12.2L138.6 36H131Z" fill={wordmarkColor} />
          {/* C (squared geometric C) */}
          <path d="M176 9.5C176 6.2 178.2 4 181.5 4H201V10.5H183.2V29.5H201V36H181.5C178.2 36 176 33.8 176 30.5V9.5Z" fill={wordmarkColor} />
          {/* O (squared geometric O) */}
          <path d="M212 9.5C212 6.2 214.2 4 217.5 4H236.5C239.8 4 242 6.2 242 9.5V30.5C242 33.8 239.8 36 236.5 36H217.5C214.2 36 212 33.8 212 30.5V9.5ZM219.2 10.5V29.5H234.8V10.5H219.2Z" fill={wordmarkColor} />
        </svg>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      <svg
        viewBox="0 0 360 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heights[size]} w-auto shrink-0`}
        role="img"
        aria-label="NAVACO"
      >
        {/* Symbol N */}
        <path
          d="M4 62L30 10C32.5 5 36.5 3 42 3H53C57.5 3 60.5 5.5 63 10L73 28L63.5 42L50 18C49 16.2 47.8 16.2 46.8 18L24 62H4Z"
          fill={symbolColor}
        />
        <path
          d="M96 3L70 55C67.5 60 63.5 62 58 62H47C42.5 62 39.5 59.5 37 55L27 37L36.5 23L50 47C51 48.8 52.2 48.8 53.2 47L76 3H96Z"
          fill={symbolColor}
        />
        {/* Wordmark NAVACO */}
        <g transform="translate(112, 18)">
          {/* N */}
          <path d="M4 36V4H11.5L26.5 24.5V4H33.5V36H26.5L11 15V36H4Z" fill={wordmarkColor} />
          {/* A */}
          <path d="M45 36L58.5 4H66L79.5 36H71.8L62.2 12.2L52.6 36H45Z" fill={wordmarkColor} />
          {/* V */}
          <path d="M88 4H95.8L105.4 27.8L115 4H122.6L109.1 36H101.6L88 4Z" fill={wordmarkColor} />
          {/* A */}
          <path d="M131 36L144.5 4H152L165.5 36H157.8L148.2 12.2L138.6 36H131Z" fill={wordmarkColor} />
          {/* C */}
          <path d="M176 9.5C176 6.2 178.2 4 181.5 4H201V10.5H183.2V29.5H201V36H181.5C178.2 36 176 33.8 176 30.5V9.5Z" fill={wordmarkColor} />
          {/* O */}
          <path d="M212 9.5C212 6.2 214.2 4 217.5 4H236.5C239.8 4 242 6.2 242 9.5V30.5C242 33.8 239.8 36 236.5 36H217.5C214.2 36 212 33.8 212 30.5V9.5ZM219.2 10.5V29.5H234.8V10.5H219.2Z" fill={wordmarkColor} />
        </g>
      </svg>
    </div>
  );
};
