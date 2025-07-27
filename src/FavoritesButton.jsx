function FavoritesButton(props) {
  function addToFavorites(){
    if (!props.userFavorites.isArray){
      throw new Error("userFavorites must be an array.")
    }
    props.userFavorites.push(props.listItem)
  }

  return (
    <button onClick={addToFavorites}>Add to favorites!</button>
  )
}

export default FavoritesButton;