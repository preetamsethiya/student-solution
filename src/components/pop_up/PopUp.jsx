import React, { useContext } from "react";
import { VarContext } from "../../context/VarContext";

export default function PopUp(props) {
  const getVarContext = useContext(VarContext);
  return (
    <div
      onClick={() => {
        props.data.closeFunc();
      }}
      className="absolute bg-gray-500/70 min-h-full w-full flex flex-col items-center justify-center "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-3xl min-h-max flex flex-col bg-white px-2 py-1 rounded-md"
      >
        <div className="flex justify-between mb-3 font-bold ">
          <span>Add mobile number?</span>
          <span
            onClick={() => {
              props.data.closeFunc();
            }}
            className="cursor-pointer p-0.5"
          >
            X
          </span>
        </div>
        <div>
          <input
            name="phone"
            autoComplete="true"
            type="number"
            value={getVarContext.isPhone || ""}
            onChange={(e) => {
              props.data.inputFunc(e);
              e.stopPropagation();
            }}
            className="ring-1 ring-blue-400 rounded-full px-2.5 outline-none"
          />
        </div>
        <div className="flex justify-center items-center mt-3 mb-2">
          <button
            disabled={!getVarContext.isPhone.length}
            onClick={() => {
              props.data.addFunc();
            }}
            className={`rounded-full text-center px-5 font-semibold text-gray-200 ${
              !getVarContext.isPhone ? "bg-red-300" : "bg-blue-500 "
            } `}
          >
            Add{" "}
          </button>
          <button
            onClick={() => {
              props.data.skipFunc();
            }}
            className="rounded-full bg-gray-500 text-center px-5 font-semibold text-gray-200 ml-1.5 "
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
