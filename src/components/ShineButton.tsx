import React from 'react';

interface ShineButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'orange';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const ShineButton: React.FC<ShineButtonProps> = ({ 
  children, 
  className = '',
  variant = 'primary',
  onClick,
  type = 'button'
}) => {
  const baseClasses = "relative overflow-hidden font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shine-effect";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-fregacy-primary-orange to-fregacy-light-orange text-white hover:from-fregacy-primary-cta-hover hover:to-fregacy-primary-orange",
    secondary: "bg-gradient-to-r from-fregacy-secondary-cta to-fregacy-brand-green text-white hover:from-fregacy-secondary-cta-hover hover:to-fregacy-secondary-cta",
    orange: "bg-gradient-to-r from-fregacy-primary-orange to-fregacy-light-orange text-white hover:from-fregacy-primary-cta-hover hover:to-fregacy-primary-orange"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ShineButton;