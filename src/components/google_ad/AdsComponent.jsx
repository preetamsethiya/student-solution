import React, { useEffect } from "react";

const AdsComponent = (props) => {
  const { dataAdSlot, dataAdFormat } = props;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("ad error", e);
    }
  }, []);

  return (
    <>
      <div className={`${props.className} `}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format={dataAdFormat}
          data-ad-client="ca-pub-5935749075399685"
          data-ad-slot={dataAdSlot}
          data-full-width-responsive="true"
        ></ins>
        AD
      </div>
    </>
  );
};

export default AdsComponent;
