import React from "react";

export default function SelectMenu(props) {
  return  <>
      <select
        onChange={props.selectMenu.onChange}
        className="selectContainer"
      >
        <option value="" hidden>
          {" "}
          Filter by category
        </option>
        <option value="updates">Updates</option>
        <option value="scholarship">Scholarship</option>
        <option value="enterance">Enterance</option>
      </select>
    </>
}
