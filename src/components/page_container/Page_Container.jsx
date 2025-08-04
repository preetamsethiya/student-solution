import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function Page_Container(props) {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className="page">
      <div className="container">
        <div className="wrapper">{props.children}</div>
      </div>
    </div>
  );
}
