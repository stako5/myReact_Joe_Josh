import { useState, useEffect} from "react";
function Searchbar() {
  const [query, setQuery] = useState("");
  const [queriedDrinkList, setQueriedDrinkList] = useState({})
  
  useEffect(() => {
    if (query !== ""){
      fetch(`http://localhost:3001/search/${query}`)
      .then(data => data.json())
      .then(returnedObj => setQueriedDrinkList(returnedObj))
      .then(
        // create new list of drinks with returned data
      )
    }
  }, [query])

  return (
    <input type="text" placeholder="Search for an ingredient" onKeyUp= {
      (event) => {
        return event.key === "Enter" ? setQuery(event.target.value) : setQuery("")
      }
    }></input>
  )
}

export default Searchbar;