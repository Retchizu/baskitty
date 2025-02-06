import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacityProps } from 'react-native-gesture-handler';

type CustomPurchasesButtons = TouchableOpacityProps & {
  icon: any;
  label: string;
}

const PurchasesButtons: React.FC<CustomPurchasesButtons> = (props) => {
  const { icon, label } = props;
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#FF607C",
          borderRadius: wp(15),
          height: wp(15),
          width: wp(15),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "center", alignSelf: "center", marginLeft: wp(0.1) }}>
          {icon}
        </View>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: hp(0.5),
          fontSize: hp(1.8),
          color: "black",
          fontFamily: "fgregular",
        }}
      >
        {label}
      </Text>
    </View>
  )
}

export default PurchasesButtons