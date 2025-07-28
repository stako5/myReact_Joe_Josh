import { useState, useEffect } from "react";
import ListItem from './ListItem.jsx'

function List(props) {
  function fetchData(url){
    fetch(url)
      .then((result) => result.json())
      .then(data => props.setList(data.drinks.map((item) => {
          let itemObj = {}
          itemObj.name = item.strDrink;
          itemObj.img = item.strDrinkThumb;
          return itemObj;
        })))
    }

    useEffect(() => {
      let url;
      if(props.query) {
        url = `http://localhost:3001/search/${props.query}/`
        console.log(url)
      }
      else{
      url = 'http://localhost:3001'
      }
      fetchData(url);
    }, [props.query])

  if (props.drinkList.length < 1) return 'Loading drink list..'
  else if (props.drinkList.length >= 10) {
    if(props.query === ''){
      return (
        <ul key="randomDrinks">
          {props.drinkList.map((drink) => {
            return props.drinkList.indexOf(drink) < 10 ?
            <ListItem key={drink.name} itemName={drink.name} imgUrl={drink.img}></ListItem>
            :
            <></>
          })}
        </ul>
        ) 
      }
    else{
      return (
        <ul key={props.idDrink}>
        {props.drinkList.map((drink) => {
            return props.drinkList.indexOf(drink) < 50 ?
            <ListItem key={drink.name} itemName={drink.name} imgUrl={drink.img}></ListItem>
            :
            <></>
        })}
      </ul>
      )
    }
  }
}

export default List;