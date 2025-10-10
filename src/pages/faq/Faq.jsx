import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Button from "../../components/button/Button";
import "../../App.css";
import AdsComponent from "../../components/google_ad/AdsComponent";

export default function Faq() {
  const FAQs = [
    {
      q: "hi ",
      id: crypto.randomUUID(),
      ans: "hellow",
      note: "this is msg",
    },
    {
      q: "hi ",
      id: crypto.randomUUID(),
      ans: "hellow",
      note: "this is msg",
    },
  ];
  const [showAns, setShowAns] = useState(null);

  useEffect(() => {
    // console.log(showAns);
  }, [showAns]);
  return (
    <div>
      <Page_Container>
        <div>
          <div>
            <h3 className="pl-3 font-semibold  mb-2"> FAQs</h3>
          </div>
          <div className="bg-gray-300 p-2 rounded-sm">
            {FAQs.map((FAQ, i) => {
              return (
                <div
                  key={i}
                  className="border-b pb-1 "
                  onClick={() => {
                    setShowAns(i);
                    if (showAns === i) {
                      setShowAns((prev) => prev + crypto.randomUUID());
                    }
                  }}
                >
                  <div className="font-semibold flex justify-between text-xl">
                    {" "}
                    {FAQ.q}
                    {"? "}
                    <Button
                      btn={{
                        text: `${i === showAns ? "⬆️" : "⬇️"}`,
                      }}
                    />
                  </div>
                  <div
                    className={` h-1  overflow-scroll scroll-bar-none ${
                      i === showAns
                        ? " h-[82px] transition-all duration-500 ease-in-out "
                        : "h-1 transition-all duration-500 ease-in-out"
                    }`}
                  >
                    {i === showAns ? (
                      <div className="bg-green-500 rounded-sm pt-1 px-3">
                        <div> Ans: {FAQ.ans}</div>
                        <br /> <div>Note: {FAQ.note}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
            <AdsComponent dataAdSlot="2448850423" dataAdFormat="fluid" />
          </div>
        </div>
      </Page_Container>
    </div>
  );
}
