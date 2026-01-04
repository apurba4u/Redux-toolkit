import { useDispatch, useSelector } from "react-redux";
import { fetchGif, fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useEffect } from "react";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!query) return;
      async function getData() {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((elem) => ({
              id: elem.id,
              type: "photo",
              title: elem.alt_description,
              thumbnail: elem.urls.small,
              src: elem.urls.full,
              url: elem.links.html
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
              url: elem.url
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGif(query);
            data = response.data.results.map((elem) => ({
              id: elem.id,
              type: "gif",
              title: elem.title || "GIF",
              thumbnail: elem.media_formats.tinygif.url,
              src: elem.media_formats.gif.url,
              url: elem.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      }
      getData();
    },
    [query, activeTab]
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="flex flex-wrap px-10 overflow-auto gap-6 w-full justify-between">
      {results.map((elem, idx) => {
        return (
          <div key={idx}>
              <ResultCard elem={elem} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
