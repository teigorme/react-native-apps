import { Text, ImageBackground, Image, View } from "react-native";
import React from "react";

type Props = {
  images: {};
  icons: {};
  title: string;
  focused: boolean;
};

const TabIcon = ({ focused, icons, images, title }: Props) => {
  return (
    <>
      {focused ? (
        <ImageBackground
          source={images}
          className="flex flex-row w-full flex-1 min-w-[122px] min-h-16  mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={icons} tintColor="#151312" className="size-5" />
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
      ) : (
        <View className="size-full justify-center items-center mt-4 rounded-full">
          <Image source={icons} tintColor="#A8B5DB" className="size-5" />
        </View>
      )}
    </>
  );
};

export default TabIcon;
