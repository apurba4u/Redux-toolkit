import { fetchPhotos, fetchVideos, fetchGif } from "./api/mediaApi"
import { SearchBar } from "./components/SearchBar"

const App = () => {
  // function getPhotos() {
  //   fetchPhotos()
  // }
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <SearchBar />
    </div>
  )
}

export default App