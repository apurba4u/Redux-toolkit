import { fetchPhotos, fetchVideos, fetchGif } from "./api/mediaApi"
import { SearchBar } from "./components/SearchBar"
import { Tabs } from "./components/Tabs"

const App = () => {
  // function getPhotos() {
  //   fetchPhotos()
  // }
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <SearchBar />
      <Tabs />
    </div>
  )
}

export default App