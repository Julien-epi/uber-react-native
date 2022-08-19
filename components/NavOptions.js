import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

// Custom data
const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Food",
    image:
      "https://www.pngmart.com/files/15/Food-Plate-Top-View-Nutrition-PNG.png",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {

  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40" disabled={!origin}>
          <View className={`${!origin && 'opacity-20'}`} >
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon color="white" backgroundColor="black" padding={5} marginTop={8} borderRadius={50} width={35} name="arrowright" type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
