import react from "react";
import { createContext, useState } from "react";
export const CounterContext = createContext(null);

// Context provider

export const Provider = (props) => {
  const [count, setCount] = useState("harry");
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
