import { View, Text } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomSearchInput from '../../component/CustomSearchInput';

const HomeScreen = () => {
  return (
    <View style={{
      backgroundColor: "#F8F9FA",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "#FFC1CC",
        paddingVertical: hp(1),
        justifyContent: "center",
      }}>
        <CustomSearchInput />
      </View>
      <View
        style={{ paddingVertical: hp(8), backgroundColor: "gray" }}>
        <Text>Picture</Text>
      </View>
      <View style={{ paddingVertical: hp(50), backgroundColor: "gray" }}>
        <Text>Items</Text>
      </View>
    </View>
  )
}

export default HomeScreen