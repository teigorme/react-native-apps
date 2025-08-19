import useSearchModel from "@/src/ModelViews/Search/Search.Model";
import SearchView from "@/src/ModelViews/Search/Search.View";

const Search = () => {
   const props = useSearchModel();
   return <SearchView {...props} />;
};

export default Search;
