import {getImage} from "../../helpers/characters";
import "./character_image.css"

function CharacterImage(props) {
  const image = getImage(props.id)
  return <>{image && <img src={image} className="character-image" alt={`${props.name}`}/>}</>
}

export default CharacterImage