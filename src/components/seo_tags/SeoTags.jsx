import React from "react";
import img from "../../assets/react.svg";
// console.log(img);
export default function SeoTags(props) {
  //   console.log(props);
  return (
    <>
      <title>{props?.title}</title>
      <meta name="description" content={props?.description} />
      <meta property="og:title" content={props?.title} />
      <meta property="og:description" content={props?.description} />
      <meta property="og:image" content={img} />

      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />

      {/* बाकी पेज कंटेंट */}
    </>
  );
}
