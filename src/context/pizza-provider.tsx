import React, { createContext, useContext, useMemo, useState } from "react";

const PizzaContext = createContext({}); // Provide a default function

function PizzaProvider({ children }) {
  const [activePizza, setActivePizza] = useState(0);

  const value = useMemo(
    () => ({
      activePizza,
      setActivePizza,
    }),
    [activePizza, setActivePizza]
  );

  return (
    <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
  );
}
export default PizzaProvider;

export function usePizza() {
  const ctx = useContext(PizzaContext);
  if (!ctx)
    throw new Error("pizza context should be used inside pizza provider");
  return ctx;
}
