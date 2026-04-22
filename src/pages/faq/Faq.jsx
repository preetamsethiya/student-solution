import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Button from "../../components/button/Button";
import "../../App.css";
import { results } from "../../data_store/data";
import Input from "../../components/input/Input";

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
  const [total, setTotal] = useState(0);
  const [obtained, setObtained] = useState(0);
  let patsent = (parseInt(obtained) * 100) / parseInt(total);
  return (
    <div>
      <Page_Container>
        <div>
          <div>
            <h3 className="pl-3 font-semibold  mb-2 text-2xl"> Results </h3>
            <div className="flex items-center gap-2 pl-3 mb-2 ">
              <input
                className="ring-1 p-1 w-[140px] ring-black outline-none rounded-sm"
                type="number"
                placeholder="total marks"
                onChange={(e) => {
                  setTotal(e.target.value);
                }}
              />
              <input
                className="ring-1 p-1 w-[140px] ring-black outline-none rounded-sm"
                type="number"
                placeholder="obtained marks "
                onChange={(e) => {
                  setObtained(e.target.value);
                }}
              />
              <div>
                {`${(total && obtained) < 1 ? "00" : patsent.toFixed(2)}`}%
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-2 rounded-sm">
            {results.map((result, i) => {
              return (
                <div key={i}>
                  <div className="bg-black text-gray-50 font-semibold px-4 ">
                    {result.course}
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-[6px] bg-pink-200 p-[6px] text-center ">
                    {result.programmes.reverse().map((programme, i) => {
                      return (
                        <a key={i} href={programme.url} target="_blank">
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
