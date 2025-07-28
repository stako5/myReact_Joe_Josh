import FavoritesButton from './FavoritesButton.jsx'

function ListItem(props){
  return (
    <>
      <li key={props.itemName}>
        <label htmlFor={props.itemName}>{props.itemName}</label>
        <br/>
        <img name={props.itemName} src={props.imgUrl} alt={props.itemName} />
        <FavoritesButton></FavoritesButton>
        <br />
      </li>
    </>
  )
}

export default ListItem;