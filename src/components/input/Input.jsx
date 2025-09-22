import React from "react";

export default function Input(props) {
  // console.log(props.input.onClick);
  return (
    <label
      htmlFor="search"
      className=" rounded-3xl overflow-hidden shadow-xl/30 inline-block border border-[#00000042]"
    >
      <input
        className="inputSelectMenu px-4 py-2 h-full "
        id={props.input.id || ""}
        name={props.input.name}
        value={props.input.value || ""}
        type={props.input.type || "text"}
        placeholder={props.input.placeholder || ""}
        onChange={props.input.onChange}
        onClick={props.input.onClick}
      />
      <span className=" pr-2 text-lg">🔍</span>
    </label>
  );
}
