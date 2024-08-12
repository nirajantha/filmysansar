//counterProvider.tsx
import { CounterContext } from "./CounterContext";
import { ReactNode, useReducer } from "react";
import { reducer } from "./CounterReducer";
import { InitialState } from "./constant";

// Provider component
interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
