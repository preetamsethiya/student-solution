import React, { useContext, useState } from "react";
import { Search_FilterContext } from "../context/Search_FilterContext";

export default function UseSearch_Filter(e) {
  const search_Filters = useContext(Search_FilterContext);
  const filter = (e) => {
    search_Filters.setSearch_Filter(e.target.value.toLocaleLowerCase());
  };
  return filter;
}
