import React from "react";
import "./search.style.css";

export const Search = props => (
  <div className="search-box">
    <input
      type="search"
      onChange={props.handleSearch}
      placeholder={props.placeholder}
    ></input>
  </div>
);
