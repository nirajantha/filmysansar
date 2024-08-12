//counter.tsx
import { useCounterContext } from "../../context/CounterContext";
const Counter = () => {
    const {state,dispatch} = useCounterContext();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;