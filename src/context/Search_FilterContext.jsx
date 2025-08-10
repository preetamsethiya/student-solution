import { createContext, useState } from "react";

export const Search_FilterContext = createContext(null);

export const Search_FilterProvider = (props) => {
  const [search_Filter, setSearch_Filter] = useState("");

  return (
    <Search_FilterContext.Provider value={{ search_Filter, setSearch_Filter }}>
      {props.children}
    </Search_FilterContext.Provider>
  );
};
