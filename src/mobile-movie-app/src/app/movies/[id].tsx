import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MovieDetails = () => {
   const { id } = useLocalSearchParams<{ id: string }>();
   return (
      <View>
         <Text>{id}</Text>
      </View>
   );
};

export default MovieDetails;
