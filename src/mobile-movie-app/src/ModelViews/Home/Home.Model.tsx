import useFetch from "@/src/shared/hooks/useFetch";
import { fetchMovies } from "@/src/shared/services/https/api";
import { useRouter } from "expo-router";

const useHomeModel = () => {
   const router = useRouter();
   const {
      data: movies,
      loading: moviesLoading,
      error: moviesError,
   } = useFetch(() => fetchMovies({ query: "" }));
   return { router, movies, moviesLoading, moviesError };
};

export default useHomeModel;
