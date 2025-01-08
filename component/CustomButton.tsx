import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type CustomButtonProps = {
  label: string;
};

const CustomButton = ({ label }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FFC1CC",
        borderRadius: wp(2),
        paddingVertical: hp(1.2),
        marginVertical: hp(1),
      }}
      activeOpacity={0.8}
    >
      <Text style={{ textAlign: "center", color: "#F8F9FA", fontSize: wp(4) }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
