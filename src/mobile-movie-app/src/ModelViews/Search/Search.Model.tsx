import useFetch from "@/src/shared/hooks/useFetch";
import { fetchMovies } from "@/src/shared/services/https/api";
import { useEffect, useState } from "react";

const useSearchModel = () => {
   const [search, setSearch] = useState<string>("");
   const { data, loading, error, refetch, reset } = useFetch(() =>
      fetchMovies({ query: search }),
   );

   useEffect(() => {
      const func = async () => {
         if (search.trim()) {
            await refetch();
         } else {
            reset();
         }
      };
      func();
   }, [search]);
   return { data, loading, error, setSearch, search };
};

export default useSearchModel;
