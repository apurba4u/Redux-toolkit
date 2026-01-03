import { fetchPhotos, fetchVideos, fetchGif } from "./api/mediaApi"

const App = () => {
  // function getPhotos() {
  //   fetchPhotos()
  // }
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <div className="flex gap-10">
        <button className="bg-green-400 p-3 m-5" onClick={async () => {
        const data = await fetchPhotos('dog')
        console.log(data.results);
      }}>Get Photos</button>
      <button className="bg-green-400 p-3 m-5" onClick={async () => {
        const data = await fetchVideos('dog')
        console.log(data.videos);
      }}>Get Videos</button>
      <button className="bg-green-400 p-3 m-5" onClick={async () => {
        const data = await fetchGif('dog')
        console.log(data.results);
      }}>Get Gif</button>
      </div>
    </div>
  )
}

export default App