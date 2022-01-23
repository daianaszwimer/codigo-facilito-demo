import {useEffect, useState} from "react";
import "./episodios.css"
import { ReactComponent as Loading } from "../../assets/loading.svg";
function Episodios() {
  const [isLoading, setIsLoading] = useState(true)
  const [episode, setEpisode] = useState(null)
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
        setIsLoading(false)
      });
  }, [shouldRefresh])

  function refresh() {
    setShouldRefresh(true)
    setIsLoading(true)
  }
  if (isLoading) {
    return <div className="loading-wrapper">
      <Loading/>
      <span>Loading</span>
    </div>
  }
  return <>
    <button onClick={refresh} className="refresh-button">
      Refresh
    </button>
    <h1>
      {episode.title} - {episode.description}
    </h1>
  </>
}

export default Episodios