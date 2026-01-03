import { fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {
  // function getPhotos() {
  //   fetchPhotos()
  // }
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <div className="flex gap-10">
        <button onClick={async () => {
        const data = await fetchPhotos('dog')
        console.log(data.results);
      }}>Get Photos</button>
      <button onClick={async () => {
        const data = await fetchVideos('dog')
        console.log(data.videos);
      }}>Get Videos</button>
      </div>
    </div>
  )
}

export default App