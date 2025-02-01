import { View, Text, Image, FlatList, ImageSourcePropType } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';
import CartItem from '../../component/CartItem';
import CartData from '../../type/cart';


type CartData = {
  id: number;
  shopName: string;
  image: ImageSourcePropType;
  itemName: string;
}

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
        <Text style={{ color: 'white', marginLeft: wp(3), fontSize: wp(5), fontFamily: "fgsemibold", marginRight: wp(30.3) }}>Shopping Cart</Text>
        <Text style={{ color: 'white', fontSize: wp(4), fontFamily: "fgregular", marginRight: wp(7) }}>Edit</Text>
        <AntDesign name="message1" size={24} color="white" />
      </View>
      <View style={{ marginVertical: hp(0.8), flex: 1, paddingHorizontal: wp(3) }}>
        <FlatList
          data={CartData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: CartData }) => (
            <CartItem
              shopName={item.shopName}
              image={item.image}
              itemName={item.itemName}
            />
          )}
          snapToAlignment='center'
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default CartScreen