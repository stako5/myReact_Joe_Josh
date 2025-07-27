import { useState, useEffect } from "react";
import Button from './Button.jsx'

function List({searchedDrinks}) {
  const [drinkList, setList] = useState([])

  function fetchData(url){
    console.log(url)
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
    console.log(searchedDrinks)
    if (searchedDrinks){
      url = `http://localhost:3001/search/${searchedDrinks}`;
    }
    else{
      url = 'http://localhost:3001'
    }
    fetchData(url);
  }, [searchedDrinks])

  if (drinkList.length < 1) return 'loading drink list..'
  else if (drinkList.length >= 10) {
    return (
      <>
        <ul id="cocktaillist">
          {drinkList.map((drink) =>
          drinkList.indexOf(drink) < 10 ?
          <li key={drink.name}>
            <label htmlFor={drink.name}>{drink.name}</label>
            <br/>
            <img name={drink.name} src={drink.img} alt={drink.name} />
            <Button></Button>
          </li>
          :
          <></>
          )}
        </ul>
      </>
    )
  }
}

export default List;


// for( let i = 0; i < list.length; i++){
//   let item = document.createElement('li');
//   let imgTarget = list[i].img;
//   let imgElement = document.createElement('img');
//   let breaks = document.createElement('br')
//   imgElement.src = imgTarget;
//   item.innerHTML = list[i].name;
//   item.appendChild(breaks);
//   item.appendChild(imgElement);
//   document.getElementById('cocktaillist').appendChild(item);
//   // console.log(list[i].name, list[i].img)
//   // let vars = list[i];
//   // console.log(vars.name, vars.img)
// }
