import { useState, useEffect} from "react";
import List from "./List.jsx"

function Searchbar() {
  const [query, setQuery] = useState("");
  const [queriedDrinkList, setQueriedDrinkList] = useState(undefined)

  useEffect(() => {
    if (query !== ""){
      setQueriedDrinkList(query)
    }
  }, [query])

  return (
    <>
      <input type="text" placeholder="Search for an ingredient" onKeyUp= {
        (event) => {
          return event.key === "Enter" ? setQuery(event.target.value) : setQuery("")
        }
      }></input>

      {queriedDrinkList !== undefined ?  <List searchedDrinks={queriedDrinkList}></List> : <></>}
    </>

  )
}

export default Searchbar;