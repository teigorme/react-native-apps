import { Text, TouchableOpacity, Image, View } from "react-native";
import { Movie } from "@/src/shared/interfaces/interfaces";
import { Link } from "expo-router";
import { icons } from "@/src/shared/constants/icons";

const MovieCard = ({
   id,
   poster_path,
   title,
   vote_average,
   release_date,
}: Movie) => {
   return (
      <Link href={`/movies/${id}`} asChild>
         <TouchableOpacity className="w-[30%]">
            <Image
               className="w-full h-52 rounded-lg"
               resizeMode="cover"
               source={{
                  uri: poster_path
                     ? `https://image.tmdb.org/t/p/w500${poster_path}`
                     : "http://placehold.co/600x400/1a1a1a/ffffff.png",
               }}
            />
            <Text
               className="text-sm font-bold text-white mt-1"
               numberOfLines={1}
            >
               {title}
            </Text>
            <View className="flex-row items-center justify-start gap-x-1">
               <Image source={icons.star} className="size-4" />
               <Text className="text-sm text-white font-bold uppercase">
                  {Math.round(vote_average / 2)}
               </Text>
            </View>
            <View className="flex-row items-center justify-between">
               <Text className="text-sm text-light-300 font-medium mt-1">
                  {release_date.split("-")[0]}
               </Text>
            </View>
         </TouchableOpacity>
      </Link>
   );
};

export default MovieCard;
