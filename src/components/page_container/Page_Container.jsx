import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";

export default function Page_Container(props) {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div>
      <div
        className={`  ${props?.className} max-w-[640px] mx-auto mt-[68px] max-sm:mt-5 `}
      >
        {props.children}
      </div>
    </div>
  );
}
