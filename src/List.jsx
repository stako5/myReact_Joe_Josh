import { useState, useEffect } from "react";


function List() {
  const [list, setlist] = useState([])

    useEffect(() =>{
      fetch('http://localhost:3001')
        .then((Res) => Res.json())
        .then(data =>        // setlist(data.drinks.strDrink)
        setlist(data.drinks.map((item) => {
          let itemObj = {}
          itemObj.name = item.strDrink;
          itemObj.img = item.strDrinkThumb;
          return itemObj;
        })))
    }, [])
  

    if(list.length < 1) return 'loading...'
    else if(list.length >=10) {

    
    return(
        <>
          <ul id="cocktaillist">
            {list.map((list) => <li key={list.name} >
                                  <label>{list.name}</label>
                                  <br/>
                                  <img src={list.img} alt="Image" />
                                </li>)}
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
