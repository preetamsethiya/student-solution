import React, { useEffect } from "react";

const AdsComponent = (props) => {
  const { dataAdSlot, dataAdFormat } = props;

  useEffect(() => {
    // try {
    //   (window.adsbygoogle = window.adsbygoogle || []).push({});
    // } catch (e) {
    //   console.log("ad error", e);
    // }
  }, []);

  return (
    <>
      <div>
        {" "}
        AD
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format={dataAdFormat}
          data-ad-client="ca-pub-5935749075399685"
          data-ad-slot={dataAdSlot}
          data-full-width-responsive="true"
        ></ins>
      </div>
    </>
  );
};

// ad id

//  autorelaxed , 3019055434
//  fluid , 2448850423
// fluid , 3510967884
// auto , responsive= true, 9146437946
// autorelaxed , 6069365383
// fluid , 8846097187
// fluid , 9588333210
// autorelaxed , 1446835924
// fluid , 1488759680
// auto , responsive = true , 7424430887

export default AdsComponent;
