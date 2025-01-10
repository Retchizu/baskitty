import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomSearchInput = () => {
  return (
    <View style={{
      backgroundColor: "#F8F9FA",
      padding: wp(2.5),
      flexDirection: "row",
      marginHorizontal: wp(2.5),
      borderRadius: wp(2),
    }}>
      <AntDesign name="search1" size={24} color="gray" style={{ paddingHorizontal: wp(1), marginRight: wp(1) }} />
      <TextInput
        placeholder="Search"
        style={{
          flex: 1, fontSize: wp(4), fontFamily: "fgregular"
        }}></TextInput>
    </View>
  )
}

export default CustomSearchInput