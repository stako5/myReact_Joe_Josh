import { useState, useEffect} from "react";
import List from "./List.jsx"

function Searchbar(props) {

  return (
    <>
      <input type="text" placeholder="Search for an ingredient" onKeyUp= {
                (e) => {
                  return e.key === "Enter" ? props.setQuery(e.target.value) : props.setQuery("") 
                }}>
      </input>
    </>

  )
}

export default Searchbar;