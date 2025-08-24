import React from 'react';
import logo from '/logo.png'; // Adjust path as needed

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium',
  className = '' 
}) => {
  const sizeClasses = {
   small: 'w-12 h-auto',   // much smaller
    medium: 'w-20 h-auto',  // default medium
    large: 'w-28 h-auto' 
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <img 
        src={logo} 
        alt="FREGCY Logo" 
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
