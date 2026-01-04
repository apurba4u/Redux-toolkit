import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import { SearchBar } from "../components/SearchBar";
import { Tabs } from "../components/Tabs";
import {Link} from "react-router-dom"
export const Homepage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <div className="flex justify-between items-center py-6 px-10 bg-[#1C4D8D]">
        <h2 className="font-medium text-2xl">Media Search</h2>
        <div className="flex gap-5 text-xl items-center">
          <Link className="text-base font-medium active:scale-95 text-black bg-white rounded p-3" to='/'>Search</Link>
          <Link className="text-base font-medium active:scale-95 text-black bg-white rounded p-3" to='/collection'>Collection</Link>
        </div>
      </div>
      <SearchBar />
      {query != '' ? <div>
        <Tabs />
        <ResultGrid />
      </div> : ''}
    </div>
  );
};
