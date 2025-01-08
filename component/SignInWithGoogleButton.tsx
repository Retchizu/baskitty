import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignInWithGoogleButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F8F9FA",
        borderRadius: wp(2),
        paddingVertical: hp(1.2),
        borderColor: "black",
        borderWidth: wp(0.3),
      }}
      activeOpacity={0.8}
    >
      <Text style={{ textAlign: "center", color: "black", fontSize: wp(4) }}>
        Sign In With Google
      </Text>
    </TouchableOpacity>
  );
};

export default SignInWithGoogleButton;

const styles = StyleSheet.create({});
