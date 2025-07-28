import { useState, useEffect} from "react";
import List from "./List.jsx"

function Searchbar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <input type="text" placeholder="Search for an ingredient" onKeyUp= {
        (event) => {
          return event.key === "Enter" ? setQuery(event.target.value) : setQuery("") }}>
      </input>
    </>

  )
}

export default Searchbar;



//  {setUserSearch !== undefined ?  <List userSearch={setUserSearch}></List> : <></>}

  // const [userSearch, setUserSearch] = useState(undefined)

  // useEffect(() => {
  //   if (query !== ""){
  //     setUserSearch(query)
  //   }
  // // }, [query])