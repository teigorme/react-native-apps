import { View, Text, TouchableOpacity, Image } from "react-native";
import images from "../constants/images";
import icons from "../constants/icons";

type FeaturedCardProps = {
  onPress?: () => void;
};

export const FeaturedCard = ({ onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
      activeOpacity={0.7}
    >
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik text-primary-300 ml-1">4.4</Text>
      </View>
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          Apt Moderno
        </Text>
        <Text className="text-base font-rubik-regular text-white">
          Rua Conego Manual das Neves
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">
            AOA 25.000.00
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

type CardProps = {
  onPress?: () => void;
};
export const Card = ({ onPress }: CardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik text-primary-300 ml-0.5">4.4</Text>
      </View>
      <Image source={images.newYork} className="w-full h-40 rounded-lg" />
      <View className="flex flex-col mt-2">
        <Text
          className="text-xl font-rubik-extrabold text-black-300"
          numberOfLines={1}
        >
          Estudio De Música
        </Text>
        <Text className="text-base font-rubik-regular text-black-200">
          Rua Conego Manual das Neves
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-base font-rubik-bold text-primary-300">
            AOA 25.000.00
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor={"#191d31"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
