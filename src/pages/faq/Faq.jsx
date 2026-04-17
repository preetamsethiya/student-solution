import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Button from "../../components/button/Button";
import "../../App.css";
import { results } from "../../data_store/data";

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

  return (
    <div>
      <Page_Container>
        <div>
          <div>
            <h3 className="pl-3 font-semibold  mb-2"> Results </h3>
          </div>

          <amp-ad
            width="100vw"
            height="320"
            type="adsense"
            data-ad-client="ca-pub-5935749075399685"
            data-ad-slot="9303603585"
            data-auto-format="rspv"
            layout="responsive"
          >
            <div overflow=""></div>
          </amp-ad>
          <div className="bg-gray-300 p-2 rounded-sm">
            {results.map((result) => {
              return (
                <div>
                  <div className="bg-blue-400 font-semibold px-4 ">
                    {result.course}
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-[6px] bg-pink-300 p-[6px] text-center ">
                    {result.programmes.map((programme) => {
                      return (
                        <a href={programme.url} target="_blank">
                          <div className=" flex items-center justify-center flex-col">
                            <div
                              className={`h-[70px] w-[70px] rounded-[85px] flex items-center justify-center ${programme?.color}
                              `}
                            >
                              <div className="font-bold rounded-[40px] text-gray-200">
                                {" "}
                                {programme.semester}
                              </div>
                            </div>
                            <div className="text-[14px] font-bold px-1">
                              {result.course} {programme.semester}{" "}
                              {programme.resultType} {programme.subjects}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* {FAQs.map((FAQ, i) => {
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
            })} */}
          </div>
        </div>
      </Page_Container>
    </div>
  );
}
