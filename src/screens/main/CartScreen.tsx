import { View, Text } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';

const CartScreen = () => {
  return (
    <View style={{
      backgroundColor: "#F8F9FA",
      flex: 1,
    }}>
      <View
        style={{
          backgroundColor: "#FFC1CC",
          paddingVertical: hp(2.08),
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: wp(5),
        }}
      >
        <AntDesign name="shoppingcart" size={24} color="white" />
        <Text style={{ color: 'white', marginLeft: wp(3), fontSize: wp(5), fontFamily: "fgsemibold", marginRight: wp(28.58) }}>Shopping Cart</Text>
        <Text style={{ color: 'white', fontSize: wp(4), fontFamily: "fgregular", marginRight: wp(7) }}>Edit</Text>
        <AntDesign name="message1" size={24} color="white" />
      </View>
    </View>
  )
}

export default CartScreen