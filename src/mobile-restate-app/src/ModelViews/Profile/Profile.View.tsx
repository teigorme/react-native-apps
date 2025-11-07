import SettingsItem from "@/src/components/settings-item";
import { settings } from "@/src/constants/data";
import icons from "@/src/constants/icons";
import images from "@/src/constants/images";
import { useProfileModel } from "@/src/ModelViews/Profile/Profile.Model";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProfileView = ({}: ReturnType<typeof useProfileModel>) => {
  return (
    <ScrollView
      contentContainerClassName="pb-32 px-7 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-row items-center justify-between mt-5">
        <Text className="text-xl font-rubik-semibold">Profile</Text>
        <Image source={icons.bell} className="size-5" />
      </View>
      <View className="flex-row justify-center flex mt-5">
        <View className="flex flex-col items-center relative mt-5">
          <Image
            source={images.avatar}
            className="size-44 relative rounded-full"
          />
          <TouchableOpacity className="absolute bottom-11 right-2">
            <Image source={icons.edit} className="size-9" />
          </TouchableOpacity>
          <Text className="text-2xl font-rubik mt-2"> Igor Teixeira</Text>
        </View>
      </View>
      <View className="flex flex-col mt-10">
        <SettingsItem icon={icons.calendar} title="My Bookings" />
        <SettingsItem icon={icons.wallet} title="Payments" />
      </View>
      <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
        {settings.slice(2).map((item) => (
          <SettingsItem key={item.title} {...item} />
        ))}
      </View>
      <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
        <SettingsItem icon={icons.logout} title="Logout" showArrow={false} />
      </View>
    </ScrollView>
  );
};

export default ProfileView;
