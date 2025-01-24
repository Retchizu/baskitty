import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../type/types";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import SignInWithGoogleButton from "../../component/SignInWithGoogleButton";
import { signUpUser } from "../../methods/auth-methods/signUpUser";
import { Formik } from "formik";
import { SignUpSchema } from "../../methods/form-validation-methods/signUpFields";
import { useGetSignUpConfirmationLink } from "../../hooks/useGetSignUpConfirmationLink";
import { useNavigationState } from "@react-navigation/native";

type SignUpScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  "SignUpScreen"
>;

const SignUpScreen = ({ navigation }: SignUpScreenProp) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const currentScreen = useNavigationState(
    (state) => state?.routes[state.index]?.name
  );

  useGetSignUpConfirmationLink(navigation, currentScreen);
  return (
    <Formik
      initialValues={{ userName: "", email: "", password: "" }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        if (values.email && values.password && values.userName) {
          signUpUser(
            values.email,
            values.password,
            values.userName,
            setSignUpLoading
          );
        } else {
          alert("Please Complete the missing fields");
        }
      }}
    >
      {({ values, handleChange, handleBlur, errors, handleSubmit }) => (
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
            style={{
              textAlign: "center",
              fontSize: wp(6),
              fontFamily: "fgsemibold",
            }}
          >
            Sign Up
          </Text>
          <CustomTextInput
            placeholder="Username"
            value={values.userName}
            onChangeText={handleChange("userName")}
            onBlur={handleBlur("userName")}
          />
          {errors.userName && (
            <Text style={styleSheet.errorMessage}>{errors.userName}</Text>
          )}
          <CustomTextInput
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {errors.email && (
            <Text style={styleSheet.errorMessage}>{errors.email}</Text>
          )}
          <CustomTextInput
            placeholder="Password"
            isPassword={true}
            isPasswordHidden={isPasswordHidden}
            setIsPasswordHidden={setIsPasswordHidden}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />
          {errors.password && (
            <Text style={styleSheet.errorMessage}>{errors.password}</Text>
          )}
          <CustomButton
            label="Sign Up"
            onPress={() => handleSubmit()}
            loading={signUpLoading}
          />
          <Text
            style={{
              textAlign: "center",
              paddingVertical: hp(3),
              fontFamily: "fgregular",
              fontSize: wp(4),
            }}
          >
            or
          </Text>
          <SignInWithGoogleButton />
          <Text
            style={{
              fontSize: wp(4),
              color: "#98D0EB",
              paddingVertical: hp(2),
              fontFamily: "fgregular",
            }}
            onPress={() => navigation.replace("SignInScreen")}
          >
            Already have an account? Sign In.
          </Text>
          <Text
            style={{
              fontSize: wp(4),
              color: "black",
              paddingVertical: hp(2),
              fontFamily: "fgregular",
            }}
          >
            By creating an account, you’re agreeing to our awesome Terms of
            Service and Privacy Policy.
          </Text>
        </View>
      )}
    </Formik>
  );
};

export default SignUpScreen;

const styleSheet = StyleSheet.create({
  errorMessage: {
    textAlign: "right",
    color: "#F7B7A3",
    fontFamily: "fgsemibold",
    fontSize: wp(3.8),
  },
});
