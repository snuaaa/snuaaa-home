import { useEffect, useRef } from 'react';

const useDebounceScroll = (up: () => void, down: () => void) => {
  const timeoutId = useRef<number>();

  useEffect(() => {
    const tmpCallback = (ev: WheelEvent) => {
      if (ev.deltaY > 10) {
        if (timeoutId.current) {
          window.clearTimeout(timeoutId.current);
        }
        timeoutId.current = window.setTimeout(() => {
          down();
        }, 500);

      } else if (ev.deltaY < -10) {
        if (timeoutId.current) {
          window.clearTimeout(timeoutId.current);
        }
        timeoutId.current = window.setTimeout(() => {
          up();
        }, 300);
      }
    };

    document.addEventListener('wheel', tmpCallback);
    return () => {
      window.clearTimeout(timeoutId.current);
      document.removeEventListener('wheel', tmpCallback);
    };
  }, [up, down]);
};

export default useDebounceScroll;
