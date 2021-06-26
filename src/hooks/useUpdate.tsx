import {useEffect, useRef} from 'react';


export const useUpdate = (fn: () => void, dependecy: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, [fn,dependecy]); // 不可变数据
};
