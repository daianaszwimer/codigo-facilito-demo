import {useEffect, useState} from "react";

function Episodios() {
  const [episode, setEpisode] = useState({})
  const [shouldRefresh, setShouldRefresh] = useState(true)
  useEffect(function getQuotes () {
    if (!shouldRefresh) {
      return
    }
    fetch('https://www.officeapi.dev/api/episodes/random')
      .then(response => response.json())
      .then(data => {
        setEpisode(data.data)
        setShouldRefresh(false)
      });
  }, [shouldRefresh])

  function refresh() {
    setShouldRefresh(true)
  }
  return <div>
    <h1>
      {episode.title} - {episode.description}
    </h1>
    <button onClick={refresh}>
      Refresh
    </button>
  </div>
}

export default Episodios