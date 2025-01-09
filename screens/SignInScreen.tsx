import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomTextInput from "../component/CustomTextInput";
import CustomButton from "../component/CustomButton";
import SignInWithGoogleButton from "../component/SignInWithGoogleButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../type/types";

type SignInScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  "SignInScreen"
>;

const SignInScreen = ({ navigation }: SignInScreenProp) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
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
        source={require("../assets/baskitty_logo.png")}
        style={{ alignSelf: "center", height: hp(25), width: wp(35) }}
      />
      <Text style={{ textAlign: "center", fontSize: wp(6) }}>Sign In</Text>

      <CustomTextInput placeholder="Username/email" />
      <CustomTextInput
        placeholder="Password"
        isPassword={true}
        isPasswordHidden={isPasswordHidden}
        setIsPasswordHidden={setIsPasswordHidden}
      />
      <CustomButton label="Sign In" />

      <Text style={{ textAlign: "center", paddingVertical: hp(3) }}>or</Text>

      <SignInWithGoogleButton />

      <Text
        style={{ fontSize: wp(4), color: "#98D0EB", paddingVertical: hp(2) }}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        Do not have an account? Sign Up.
      </Text>
    </View>
  );
};

export default SignInScreen;
