import { createContext, useState } from "react";

export const VarContext = createContext(null);

export const VarProvider = (props) => {
  const [isClgActive, setIsClgActive] = useState("");
  const [isPhone, setIsPhone] = useState("");
  const [isOpenPopUp, setIsOpenPopUp] = useState("false");
  const [isOpenAd, setIsOpenAd] = useState(false);
  const [timerId, setTimerId] = useState("");

  return (
    <VarContext.Provider
      value={{
        isClgActive,
        setIsClgActive,
        isPhone,
        setIsPhone,
        isOpenPopUp,
        setIsOpenPopUp,
        isOpenAd,
        setIsOpenAd,
        timerId,
        setTimerId,
      }}
    >
      {props.children}
    </VarContext.Provider>
  );
};
