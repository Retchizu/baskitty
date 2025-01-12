import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomSearchInput from "../../component/CustomSearchInput";
import CustomSlider from "../../component/CustomSlider";

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#F8F9FA",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFC1CC",
          paddingVertical: hp(1),
          justifyContent: "center",
        }}
      >
        <CustomSearchInput />
      </View>
      <CustomSlider />
    </View>
  );
};

export default HomeScreen;
