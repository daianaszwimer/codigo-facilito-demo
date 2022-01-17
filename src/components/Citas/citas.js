import {useEffect, useState} from "react";
import CharacterImage from "../CharacterImage/character_image";
import {formatName} from "../../helpers/characters";

function Citas() {
  const [quote, setQuote] = useState({})
  useEffect(function getQuotes () {
    fetch('https://www.officeapi.dev/api/quotes/random')
      .then(response => response.json())
      .then(data => setQuote(data.data));
  }, [])
  const name = formatName(quote.character)
  return (
    <>
      <h1>{quote.content} - {name}</h1>
      <CharacterImage id={quote.character?._id} name={name} />
    </>
  )
}

export default Citas