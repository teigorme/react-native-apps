import { View, Image, TextInput, type TextInputProps } from "react-native";
import { icons } from "@/src/shared/constants/icons";

const SearchBar = (props: TextInputProps) => {
   return (
      <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-2">
         <Image
            source={icons.search}
            className="size-5"
            resizeMode="contain"
            tintColor="#ab8bff"
         />
         <TextInput
            {...props}
            placeholderTextColor="#a8b5db"
            className="flex-1 ml-2 text-white"
         />
      </View>
   );
};

export default SearchBar;
