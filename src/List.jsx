import { useState, useEffect } from "react";
import ListItem from './ListItem.jsx'
function List(props) {
  const [drinkList, setList] = useState([])

  function fetchData(url){
    fetch(url)
      .then((result) => result.json())
      .then(data => setList(data.drinks.map((item) => {
          let itemObj = {}
          itemObj.name = item.strDrink;
          itemObj.img = item.strDrinkThumb;
          return itemObj;
        })))
  }

  useEffect(() => {
    let url;
    if (props.searchedDrinks){
      url = `http://localhost:3001/search/${props.searchedDrinks}`;
    }
    else{
      url = 'http://localhost:3001'
    }
    fetchData(url);
  })

  if (drinkList.length < 1) return 'Loading drink list..'
  else if (drinkList.length >= 10) {
    return (
      props.searchedDrinks ?
      <ul key={props.searchedDrinks}>
        {drinkList.map((drink) => {
          return <ListItem key={drink.name} itemName={drink.name} imgUrl={drink.img}></ListItem>
        })}
      </ul>
      :
      <ul key="randomDrinks">
        {drinkList.map((drink) => {
          return drinkList.indexOf(drink) < 10 ?
          <ListItem key={drink.name} itemName={drink.name} imgUrl={drink.img}></ListItem>
          :
          <></>
        })}
      </ul>
    )
  }
}

export default List;
