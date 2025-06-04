"use client";

import { useState, useEffect } from 'react';

interface MotionProps {
  children: React.ReactNode;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  className?: string;
  style?: React.CSSProperties;
}

// Simple motion component that implements a subset of Framer Motion's API
export const motion = {
  div: ({
    children,
    initial,
    animate,
    transition,
    whileHover,
    whileTap,
    whileInView,
    viewport,
    className,
    style,
    ...props
  }: MotionProps) => {
    const [state, setState] = useState(initial || {});
    const [isInView, setIsInView] = useState(false);
    
    useEffect(() => {
      if (animate) {
        const timeout = setTimeout(() => {
          setState(animate);
        }, 10);
        
        return () => clearTimeout(timeout);
      }
    }, [animate]);
    
    useEffect(() => {
      if (whileInView && typeof window !== 'undefined') {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsInView(true);
                if (viewport?.once) {
                  observer.disconnect();
                }
              } else if (!viewport?.once) {
                setIsInView(false);
              }
            });
          },
          { threshold: 0.1, ...viewport }
        );
        
        const currentRef = document.getElementById('observer-target');
        if (currentRef) {
          observer.observe(currentRef);
        }
        
        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
      }
    }, [whileInView, viewport]);
    
    const currentState = whileInView && isInView ? whileInView : state;
    
    const calculatedStyles: React.CSSProperties = {
      transition: transition 
        ? `all ${transition.duration || 0.3}s ${transition.ease || 'ease'} ${transition.delay || 0}s` 
        : undefined,
      transform: `
        ${currentState.x ? `translateX(${currentState.x}px)` : ''} 
        ${currentState.y ? `translateY(${currentState.y}px)` : ''}
        ${currentState.scale ? `scale(${currentState.scale})` : ''}
        ${currentState.rotate ? `rotate(${currentState.rotate}deg)` : ''}
      `,
      opacity: currentState.opacity !== undefined ? currentState.opacity : 1,
      ...style
    };
    
    return (
      <div 
        id="observer-target"
        className={className}
        style={calculatedStyles}
        {...props}
      >
        {children}
      </div>
    );
  }
};