import { View, Text, TouchableOpacity, TouchableOpacityProps, ImageSourcePropType, Image, StyleSheet } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';

type CustomOrderNotification = TouchableOpacityProps & {
  image: ImageSourcePropType;
  title: string;
  description: string;
  dateTime: string;
}

const OrderNotification: React.FC<CustomOrderNotification> = (props) => {
  const { image, title, description, dateTime } = props;
  return (
    <TouchableOpacity style={{
      backgroundColor: "#F5F0F6",
      paddingVertical: hp(2),
      minHeight: hp(4.8),
      flexDirection: "row",
      borderWidth: wp(0.1),
      overflow: "hidden",
      borderColor: "#FFFFFF",
      alignItems: "center"

    }}>
      <View style={{ paddingHorizontal: wp(3), justifyContent: "center" }}>
        <Image source={image} style={styles.image}></Image>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ fontFamily: "fgregular", fontSize: wp(3.5) }}>{title}</Text>
        <Text style={{
          fontFamily: "fgregular", fontSize: wp(3.5), color: "#585858", marginBottom: hp(2)
        }}>{description}</Text>
        <Text style={{ fontFamily: "fgregular", fontSize: wp(3.5), color: "#585858" }}>{dateTime}</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: wp(3) }}>
        <AntDesign name="right" size={24} color="#585858" />
      </View>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  image: {
    width: wp(12),
    height: hp(6),
    borderColor: "#FFC1CC",
    borderWidth: wp(0.4)
  },
})

export default OrderNotification