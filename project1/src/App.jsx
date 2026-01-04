import { fetchPhotos, fetchVideos, fetchGif } from "./api/mediaApi"
import { CollectionPage } from "./Pages/CollectionPage"
import { Homepage } from "./Pages/Homepage"
import { Route, Routes } from "react-router-dom"

const App = () => {
  // function getPhotos() {
  //   fetchPhotos()
  // }
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      {/* <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/collection' element={<CollectionPage />}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/collection" element={<CollectionPage />}></Route>
      </Routes>
    </div>
  )
}

export default App