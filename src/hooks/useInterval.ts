import { useRef, useEffect } from "react";

const useInterval = (callback: any, delay: any) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let timerId = setInterval(tick, delay);
      return () => clearInterval(timerId);
    }
  }, []);
};

export default useInterval;
