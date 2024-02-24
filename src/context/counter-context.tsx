import { createContext, useContext, useEffect, useState } from 'react';
import useIncrementCounterMutation from '../api/mutations/counter/use-increment-counter-mutation';

const CounterContext = createContext({
  count: null,
});

export function useCounter() {
  return useContext(CounterContext);
}

export function CounterProvider({ children }) {
  const [count, setCount] = useState(null);
  const {
    mutate: increment,
    data: response,
    isSuccess,
  } = useIncrementCounterMutation();

  useEffect(() => {
    increment();
  }, []);

  useEffect(() => {
    setCount(response?.data.count);
  }, [isSuccess]);

  return (
    <CounterContext.Provider value={{ count }}>
      {children}
    </CounterContext.Provider>
  );
}
