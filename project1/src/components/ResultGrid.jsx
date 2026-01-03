import { useDispatch, useSelector } from "react-redux";
import { fetchGif, fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import { setError, setLoading, setResults } from "../redux/features/searchSlice";


const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(
    function () {
      if(!query) return
      async function getData() {
        try {
          dispatch(setLoading())
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((elem) => ({
              id: elem.id,
              type: "photo",
              title: elem.alt_description,
              thumbnail: elem.urls.small,
              src: elem.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((elem) => ({
              id: elem.id,
              type: "video",
              title: elem.user.name || "video",
              thumbnail: elem.image,
              src: elem.video_files[0].link,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGif(query);
            data = response.data.results.map((elem) => ({
              id: elem.id,
              type: "GIF",
              title: elem.title || "GIF",
              src: elem.media_formats.gif.url,
              thumbnail: elem.media_formats.tinygif.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message))
        }
      }
      getData();
    },
    [query, activeTab])
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading</h1>
  return <div>
    {results.map((elem, idx) => {
      return <div key={idx}>{elem.title}</div>
    })}
  </div>;
};

export default ResultGrid;
