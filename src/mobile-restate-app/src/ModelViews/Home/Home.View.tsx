import { Card, FeaturedCard } from "@/src/components/card";
import Filters from "@/src/components/filters";
import Search from "@/src/components/search";
import icons from "@/src/constants/icons";
import images from "@/src/constants/images";
import { useHomeModel } from "@/src/ModelViews/Home/Home.Model";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const HomeView = ({}: ReturnType<typeof useHomeModel>) => {
  return (
    <View className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik-regular text-black-100">
                    Bom Dia
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    Igor Teixeira
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik text-primary-300">
                    Ver Tudo
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={({ item }) => <FeaturedCard />}
              keyExtractor={(item) => item.toString()}
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5 mt-5"
            />
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik text-black-300">
                  Nossas recomendações
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik text-primary-300">
                    Ver Tudo
                  </Text>
                </TouchableOpacity>
              </View>
              <Filters />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default HomeView;
