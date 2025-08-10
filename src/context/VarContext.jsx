import { createContext, useState } from "react";

export const VarContext = createContext(null);

export const VarProvider = (props) => {
  const [isClgActive, setIsClgActive] = useState(false);

  return (
    <VarContext.Provider value={{ isClgActive, setIsClgActive }}>
      {props.children}
    </VarContext.Provider>
  );
};
