import { useState, useEffect } from "react";
import Button from './Button.jsx'

function List() {
  const [drinkList, setList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((result) => result.json())
      .then(data => setList(data.drinks.map((item) => {
          let itemObj = {}
          itemObj.name = item.strDrink;
          itemObj.img = item.strDrinkThumb;
          return itemObj;
        })))
  }, [])


  if (drinkList.length < 1) return 'loading drink list..'
  else if (drinkList.length >= 10) {
    return (
      <>
        <ul id="cocktaillist">
          {drinkList.map((drink) =>
          <li key={drink.name}>
            <label for={drink.name}>{drink.name}</label>
            <br/>
            <img name={drink.name} src={drink.img} alt={drink.name} />
            <Button></Button>
          </li>
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
