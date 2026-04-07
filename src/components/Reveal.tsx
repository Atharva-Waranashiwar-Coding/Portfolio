import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string;
  '--reveal-duration'?: string;
};

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  variant?: RevealVariant;
};

function Reveal({
  children,
  className,
  delay = 0,
  duration = 720,
  once = true,
  style,
  variant = 'up',
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.18,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const revealStyle: RevealStyle = {
    ...style,
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
  };

  return (
    <div
      ref={ref}
      className={['reveal', isVisible ? 'reveal-visible' : '', className].filter(Boolean).join(' ')}
      data-variant={variant}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default Reveal;
