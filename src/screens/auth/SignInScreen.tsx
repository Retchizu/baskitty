import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import SignInWithGoogleButton from "../../component/SignInWithGoogleButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../type/types";
import { signInUser } from "../../methods/auth-methods/signInUser";
import { handleTextChange } from "../../methods/handleTextChange";
import { useGetSignUpConfirmationLink } from "../../hooks/useGetSignUpConfirmationLink";
import { useNavigationState } from "@react-navigation/native";

type SignInScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  "SignInScreen"
>;

const SignInScreen = ({ navigation }: SignInScreenProp) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [signInLoading, setSignInLoading] = useState(false);
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const currentScreen = useNavigationState(
    (state) => state?.routes[state.index]?.name
  );

  useGetSignUpConfirmationLink(navigation, currentScreen);

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
        style={{
          textAlign: "center",
          fontSize: wp(6),
          fontFamily: "fgsemibold",
        }}
      >
        Sign In
      </Text>

      <CustomTextInput
        placeholder="Username/email"
        value={userCredential.email}
        onChangeText={(text) =>
          handleTextChange(setUserCredential, "email", text)
        }
      />
      <CustomTextInput
        placeholder="Password"
        isPassword={true}
        isPasswordHidden={isPasswordHidden}
        setIsPasswordHidden={setIsPasswordHidden}
        value={userCredential.password}
        onChangeText={(text) =>
          handleTextChange(setUserCredential, "password", text)
        }
      />
      <CustomButton
        label="Sign In"
        onPress={() =>
          signInUser(
            userCredential.email,
            userCredential.password,
            navigation,
            setSignInLoading
          )
        }
        loading={signInLoading}
      />
      <Text
        style={styles.textStyle}
        onPress={() => navigation.navigate("ResetPasswordScreen")}
      >
        Forgot Password
      </Text>

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
        style={styles.textStyle}
        onPress={() => navigation.replace("SignUpScreen")}
      >
        Do not have an account? Sign Up.
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: wp(4),
    color: "#98D0EB",
    fontFamily: "fgregular",
  },
});
