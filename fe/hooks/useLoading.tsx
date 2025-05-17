import { useState, useEffect } from "react";

export function useLoading(duration = 1000) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  return loading;
}
