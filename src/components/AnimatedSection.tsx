import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
    'slide-up': isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8',
    'slide-left': isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-8',
    'slide-right': isVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-8',
    'zoom-in': isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'
  };

  return (
    <div 
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${animationClass[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;