function FavoritesButton(props) {
  function addToFavorites(props){
    if (!props.listItem){
      throw new Error("userFavorites must be an array.")
    }
    props.listItem.push(props.favorites)
  }

  return (
    <button id="favBtn" onClick={addToFavorites}>Add to favorites!</button>
  )
}

export default FavoritesButton;