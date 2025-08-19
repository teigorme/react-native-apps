import useFetch from "@/src/shared/hooks/useFetch";
import { fetchMovies } from "@/src/shared/services/https/api";
import { useRouter } from "expo-router";

const useHomeModel = () => {
   const router = useRouter();

   const { data, loading, error } = useFetch(() => fetchMovies({ query: "" }));
   return { router, data, loading, error };
};

export default useHomeModel;
