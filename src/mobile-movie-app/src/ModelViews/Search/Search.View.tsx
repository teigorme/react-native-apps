import useSearchModel from "@/src/ModelViews/Search/Search.Model";
import MovieCard from "@/src/shared/components/movie-card";
import SearchBar from "@/src/shared/components/search-bar";
import { icons } from "@/src/shared/constants/icons";
import { images } from "@/src/shared/constants/images";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const SearchView = ({
   data,
   error,
   loading,
   search,
   setSearch,
}: ReturnType<typeof useSearchModel>) => {
   return (
      <View className="flex-1 bg-primary">
         <Image source={images.bg} className="absolute w-full z-0" />
         <FlatList
            data={data}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            className="px-5"
            columnWrapperStyle={{
               justifyContent: "center",
               gap: 16,
               marginVertical: 16,
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListHeaderComponent={
               <>
                  <View className="w-full flex-row justify-center mt-10">
                     <Image
                        source={icons.logo}
                        className="w-12 h-10 mt-20 mb-5 mx-auto"
                     />
                  </View>
                  <View className="my-5">
                     <SearchBar
                        placeholder="Search movies...."
                        onChangeText={(text) => setSearch(text)}
                        value={search}
                     />
                  </View>

                  {loading && (
                     <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        className="mt-10 self-center"
                     />
                  )}

                  {error && (
                     <Text className="text-red-500 px-5 my-3">
                        Error: {error.message}
                     </Text>
                  )}

                  {!loading && !error && search.trim() && data?.length > 0 && (
                     <Text className="text-xl text-white font-bold">
                        Search Result for{" "}
                        <Text className="text-purple-300">{search}</Text>
                     </Text>
                  )}
               </>
            }
         />
      </View>
   );
};

export default SearchView;
