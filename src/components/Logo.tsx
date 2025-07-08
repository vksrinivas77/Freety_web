import React from 'react';

interface LogoProps {
  variant?: 'full-color' | 'white' | 'black';
  layout?: 'horizontal' | 'stacked';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'full-color', 
  layout = 'horizontal', 
  size = 'medium',
  className = '' 
}) => {
  const sizeClasses = {
    small: layout === 'horizontal' ? 'w-28 h-10' : 'w-20 h-14',
    medium: layout === 'horizontal' ? 'w-40 h-12' : 'w-28 h-18',
    large: layout === 'horizontal' ? 'w-52 h-16' : 'w-36 h-24'
  };

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          text: '#FFFFFF',
          leaf: '#FFFFFF',
          tagline: '#FFFFFF'
        };
      case 'black':
        return {
          text: '#000000',
          leaf: '#10b981',
          tagline: '#424242'
        };
      default:
        return {
          text: '#10b981',
          leaf: '#34d399',
          tagline: '#6b7280'
        };
    }
  };

  const colors = getColors();

  if (layout === 'stacked') {
    return (
      <div className={`${sizeClasses[size]} ${className} flex flex-col items-center justify-center relative group`}>
        <svg
          viewBox="0 0 140 90"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <g filter="url(#glow)">
            <path
              d="M10 25 Q10 20 15 20 L25 20 Q30 20 30 25 L30 30 L22 30 L22 40 L28 40 L28 45 L22 45 L22 60 L15 60 L15 45 L10 45 L10 40 L15 40 L15 30 L10 30 Z"
              fill={colors.text}
              className="transition-all duration-300"
            />
            <path
              d="M25 17 Q32 12 38 20 Q35 28 25 25 Q20 22 25 17 Z"
              fill={colors.leaf}
              className="transition-all duration-300 group-hover:scale-110"
            />
            <path
              d="M27 19 Q30 17 32 21 Q30 24 27 22 Z"
              fill={colors.text}
              opacity="0.3"
            />
          </g>
          
          <text
            x="40"
            y="48"
            fontFamily="Inter, sans-serif"
            fontSize="28"
            fontWeight="700"
            fill={colors.text}
            letterSpacing="2px"
            className="brand-name transition-all duration-300"
          >
            RETTY
          </text>
          
          <text
            x="70"
            y="72"
            fontFamily="Source Sans Pro, sans-serif"
            fontSize="10"
            fontWeight="600"
            fill={colors.tagline}
            textAnchor="middle"
            letterSpacing="1px"
            className="transition-all duration-300"
          >
            Fresh. Fast. Focused.
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center relative group`}>
      <svg
        viewBox="0 0 200 50"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.leaf}/>
            <stop offset="100%" stopColor={colors.text}/>
          </linearGradient>
        </defs>
        
        <g filter="url(#logoGlow)">
          <path
            d="M10 12 Q10 8 14 8 L24 8 Q28 8 28 12 L28 16 L22 16 L22 22 L26 22 L26 26 L22 26 L22 38 L16 38 L16 26 L10 26 L10 22 L16 22 L16 16 L10 16 Z"
            fill={colors.text}
            className="transition-all duration-300"
          />
          <path
            d="M24 5 Q30 2 34 8 Q31 14 24 12 Q20 10 24 5 Z"
            fill="url(#leafGradient)"
            className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
          />
          <path
            d="M26 7 Q28 6 30 9 Q28 11 26 10 Z"
            fill={colors.text}
            opacity="0.4"
          />
        </g>
        
        <text
          x="38"
          y="30"
          fontFamily="Inter, sans-serif"
          fontSize="22"
          fontWeight="700"
          fill={colors.text}
          letterSpacing="1.5px"
          className="brand-name transition-all duration-300"
        >
          RETTY
        </text>
        
        <text
          x="38"
          y="42"
          fontFamily="Source Sans Pro, sans-serif"
          fontSize="8"
          fontWeight="600"
          fill={colors.tagline}
          letterSpacing="0.5px"
          className="transition-all duration-300"
        >
          Fresh. Fast. Focused.
        </text>
      </svg>
    </div>
  );
};

export default Logo;