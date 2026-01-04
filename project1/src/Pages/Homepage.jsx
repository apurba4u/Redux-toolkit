import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import { SearchBar } from "../components/SearchBar";
import { Tabs } from "../components/Tabs";

export const Homepage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <div className="text-center p-5 bg-blue-900 text-2xl font-semibold">
        Media Search
      </div>
      <SearchBar />
      {query != '' ? <div>
        <Tabs />
        <ResultGrid />
      </div> : ''}
    </div>
  );
};
