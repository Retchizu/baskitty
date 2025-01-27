import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import { resetPassword } from "../../methods/auth-methods/resetPassword";

const RequestPasswordResetScreen = () => {
  const [email, setEmail] = useState("");
  const [requestResetPasswordLoading, setRequestResetPasswordLoading] =
    useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: wp(10),
        backgroundColor: "#F8F9FA",
      }}
    >
      <Image
        source={require("../../../assets/baskitty_logo.png")}
        style={{ alignSelf: "center", height: hp(25), width: wp(35) }}
      />
      <Text
        style={{ fontFamily: "fgbold", fontSize: wp(6), textAlign: "center" }}
      >
        Reset Password
      </Text>
      <Text
        style={{
          fontFamily: "fgregular",
          fontSize: wp(4.5),
          textAlign: "center",
          marginVertical: hp(2),
        }}
      >
        If you think that you’ve entered the correct password but can’t still
        sign in or you are not receiving any email confirmation, it is
        recommended to reset your password.
      </Text>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <CustomButton
        label="Send Password Reset"
        onPress={() => {
          resetPassword(email, setRequestResetPasswordLoading);
        }}
        loading={requestResetPasswordLoading}
      />
    </View>
  );
};

export default RequestPasswordResetScreen;

const styles = StyleSheet.create({});
