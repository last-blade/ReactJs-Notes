import React, { useEffect, useRef } from 'react';

const ScrollDetector = ({ onVisible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(true);
        } else {
          onVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onVisible]);

  return <div ref={ref} style={{ height: '1px', width: '1px', position: 'absolute', top: '100vh' }} />;
};

export default ScrollDetector;
