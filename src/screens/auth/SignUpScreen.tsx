import { Image, Text, View } from "react-native";
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
import { handleTextChange } from "../../methods/handleTextChange";

type SignUpScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  "SignUpScreen"
>;

const SignUpScreen = ({ navigation }: SignUpScreenProp) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [userCredential, setUserCredential] = useState({
    userName: "",
    email: "",
    password: "",
  });

  console.log(userCredential);
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
        Sign Up
      </Text>
      <CustomTextInput
        placeholder="Username"
        value={userCredential.userName}
        onChangeText={(text) =>
          handleTextChange(setUserCredential, "userName", text)
        }
      />
      <CustomTextInput
        placeholder="Email"
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
        label="Sign Up"
        onPress={() =>
          signUpUser(userCredential.email, userCredential.password)
        }
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
        By creating an account, you’re agreeing to our awesome Terms of Service
        and Privacy Policy.
      </Text>
    </View>
  );
};

export default SignUpScreen;
