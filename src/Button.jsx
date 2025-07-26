import { useState } from "react";

function Button() {
  const [inFavorites, setInFavorites] = useState(false);

  function addToFavorites(){
    inFavorites ? setInFavorites(false) : setInFavorites(true);
    console.log(inFavorites)
  }

  return (
    <button onClick={addToFavorites}>Add to favorites!</button>
  )
}

export default Button;