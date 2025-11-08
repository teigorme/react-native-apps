import { useLocalSearchParams, usePathname } from "expo-router";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";

const Search = () => {
  const path = usePathname();
  const { query } = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(query);

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />

        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Pesquisa por algo..."
          className="text-sm font-rubik-regular text-black-300 ml-2 flex-1"
        />
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
