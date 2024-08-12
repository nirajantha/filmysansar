//counterContext.tsx
import { createContext, useContext, Dispatch } from "react";
import { Action } from "./Type";
import { InitialState } from "./constant";
// Define the state type
export interface State {
  count: number;
}

// Define the context type
interface CounterContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

// Create a context with an initial value
export const CounterContext = createContext<CounterContextType>({
  state: InitialState,
  dispatch: () => null,
});

// Custom hook to use the CounterContext
export const useCounterContext = () => useContext(CounterContext);
