import { createContext, useState } from "react";

export const VarContext = createContext(null);

export const VarProvider = (props) => {
  const [isClgActive, setIsClgActive] = useState("");
  const [isPhone, setIsPhone] = useState("");
  const [isOpenPopUp, setIsOpenPopUp] = useState('true');

  return (
    <VarContext.Provider
      value={{
        isClgActive,
        setIsClgActive,
        isPhone,
        setIsPhone,
        isOpenPopUp,
        setIsOpenPopUp,
      }}
    >
      {props.children}
    </VarContext.Provider>
  );
};
