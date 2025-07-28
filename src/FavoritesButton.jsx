function FavoritesButton(props) {
  function addToFavorites(){
    if (!props.userFavorites.isArray){
      throw new Error("userFavorites must be an array.")
    }
    props.userFavorites.push(props.listItem)
  }

  return (
    <button id="favBtn" onClick={addToFavorites}>Add to favorites!</button>
  )
}

export default FavoritesButton;