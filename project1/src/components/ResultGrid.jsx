import axios from "axios"
import { useSelector } from "react-redux"
import { fetchGif, fetchPhotos, fetchVideos } from "../api/mediaApi"
import { useEffect } from "react"

const ResultGrid = () => {
  const {query, activeTab, results, loading, error} = useSelector((store) => store.search)

  useEffect(function () {
    async function getData() {
      let data
      if (activeTab == 'photos') {
        let response = await fetchPhotos(query)
        data = response.results
      }
      if (activeTab == 'videos') {
        let response = await fetchVideos(query)
        data = response.videos
      }
      if (activeTab == 'gif') {
        let response = await fetchGif(query)
        data = response.data.results
      }
      console.log(data);
    }
    getData()
  }, [query, activeTab])
  return (
    <div>
      {/* <button onClick={getData}>Click</button> */}
    </div>
  )
}

export default ResultGrid