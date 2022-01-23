import {useEffect, useState} from "react";
import CharacterImage from "../CharacterImage/character_image";
import {formatName} from "../../helpers/characters";

function Citas() {
  const [quote, setQuote] = useState(null)
  useEffect(function getQuotes () {
    fetch('https://www.officeapi.dev/api/quotes/random')
      .then(response => response.json())
      .then(data => setQuote(data.data));
  }, [])
  if (!quote) {
    return null
  }
  const name = formatName(quote.character)
  return (
    <>
      <CharacterImage id={quote.character?._id} name={name} />
      <h1>{quote.content}</h1><h2> - {name}</h2>
    </>
  )
}

export default Citas