import {useEffect, useState} from "react";
import {formatName} from "../../helpers/characters";
import CharacterImage from "../CharacterImage/character_image";
function Personajes() {
  const [character, setCharacter] = useState()
  useEffect(function getQuotes () {
    fetch('https://www.officeapi.dev/api/characters/random')
      .then(response => response.json())
      .then(data => setCharacter(data.data));
  }, [])
  const name = formatName(character)
  return <>
    <h1>{name}</h1>
    <CharacterImage id={character?._id} name={name}/>
  </>
}

export default Personajes