import Searchbar from './Searchbar.jsx'
import List from './List.jsx'
import { useState } from 'react';
import FavoritesList from './FavoritesList'

function App() {
  const [query, setQuery] = useState("");
  const [favorites, setfavorites] =useState([])
  const [drinkList, setList] = useState([])

  return (
    <>
    <br />
      <Searchbar key="primarySearch" query={query} setQuery={setQuery} drinkList={drinkList} setList={setList} ></Searchbar>
      <br /><br />
      <List key="firstList"  query={query} drinkList={drinkList} setList={setList}></List>
      <br />
      <FavoritesList favorites={favorites} setfavorites={setfavorites} drinkList={drinkList}></FavoritesList>
    </>
  )
}

export default App
