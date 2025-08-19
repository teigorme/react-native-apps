import {
   View,
   Image,
   ScrollView,
   ActivityIndicator,
   Text,
   FlatList,
} from "react-native";
import { images } from "@/src/shared/constants/images";
import { icons } from "@/src/shared/constants/icons";
import SearchBar from "@/src/shared/components/search-bar";
import useHomeModel from "@/src/ModelViews/Home/Home.Model";
import MovieCard from "@/src/shared/components/movie-card";

const HomeView = ({
   router,
   movies,
   moviesError,
   moviesLoading,
}: ReturnType<typeof useHomeModel>) => {
   return (
      <View className="flex-1 bg-primary">
         <Image source={images.bg} className="absolute w-full z-0" />
         <ScrollView
            className="flex-1 px-5"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
               minHeight: "100%",
               paddingBottom: 10,
            }}
         >
            <Image
               source={icons.logo}
               className="w-12 h-10 mt-20 mb-5 mx-auto"
            />
            {moviesLoading ? (
               <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  className="mt-10 self-center"
               />
            ) : moviesError ? (
               <Text>Error: {moviesError.message}</Text>
            ) : (
               <View className="flex-1 mt-5">
                  <SearchBar
                     placeholder="Search for her movie"
                     onPress={() => router.push("/search")}
                  />
                  <>
                     <Text className="text-lg text-white font-bold mt-5 mb-3">
                        Latest Movies
                     </Text>
                     <FlatList
                        data={movies}
                        renderItem={({ item }) => <MovieCard {...item} />}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                        className="mt-2 pb-32"
                        columnWrapperStyle={{
                           justifyContent: "flex-start",
                           gap: 20,
                           paddingRight: 5,
                           marginBottom: 5,
                        }}
                        scrollEnabled={false}
                     />
                  </>
               </View>
            )}
         </ScrollView>
      </View>
   );
};

export default HomeView;
