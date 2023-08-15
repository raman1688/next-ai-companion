import { useEffect, useState } from "react";

export function useDebounce<T>(value: any, delay?: number): T {
  const [debounceValue, setdebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setdebounceValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}
