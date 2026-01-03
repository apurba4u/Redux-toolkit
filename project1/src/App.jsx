import { fetchPhotos } from "./api/mediaApi"

const App = () => {
  // function getPhotos() {
  //   fetchPhotos()
  // }
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button onClick={async () => {
        const data = await fetchPhotos('dog')
        console.log(data);
      }}>Click</button>
    </div>
  )
}

export default App