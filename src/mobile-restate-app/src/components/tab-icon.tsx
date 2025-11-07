import { Image, Text, View } from "react-native";

type Props = {
  icon: any;
  title: string;
  focused: boolean;
};
const TabIcon = ({ focused, icon, title }: Props) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center ">
      <Image
        source={icon}
        tintColor={focused ? "#0061ff" : "#666876"}
        resizeMode="contain"
        className="size-6"
      />
      <Text
        className={`${focused ? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"} text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabIcon;
