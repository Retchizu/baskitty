import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useHandleLink } from "../../hooks/useHandleLink";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../type/types";
import { useNavigationState } from "@react-navigation/native";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { supabase } from "../../initSupabase";
import { Formik } from "formik";
import { ResetPasswordSchema } from "../../methods/form-validation-methods/resetPasswordFields";
import { updateUserPassword } from "../../methods/auth-methods/updateUserPassword";

type UpdatePasswordScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  "UpdatePasswordScreen"
>;

const UpdatePasswordScreen = ({ navigation }: UpdatePasswordScreenProp) => {
  const [email, setEmail] = useState(""); //for testing
  const [updateUserPasswordLoading, setUpdateUserPasswordLoading] =
    useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(true);

  const currentScreen = useNavigationState(
    (state) => state?.routes[state.index]?.name
  );
  useHandleLink(navigation, currentScreen);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setEmail(user?.email ?? "");
    };

    getUser();
  }, []);

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={ResetPasswordSchema}
      onSubmit={(values) => {
        if (values.password && values.confirmPassword) {
          updateUserPassword(
            values.password,
            navigation,
            setUpdateUserPasswordLoading
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
              fontFamily: "fgsemibold",
              fontSize: wp(4.5),
              textAlign: "center",
            }}
          >
            {email.trim() ? `Reset password for ${email}` : "Reset password"}
          </Text>

          <CustomTextInput
            placeholder="New Password"
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            isPassword={true}
            isPasswordHidden={isPasswordVisible}
            setIsPasswordHidden={setIsPasswordVisible}
          />
          {errors.password && (
            <Text style={styleSheet.errorMessage}>{errors.password}</Text>
          )}
          <CustomTextInput
            placeholder="Confirm New Password"
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            isPassword={true}
            isPasswordHidden={isConfirmPasswordVisible}
            setIsPasswordHidden={setIsConfirmPasswordVisible}
          />
          {errors.confirmPassword && (
            <Text style={styleSheet.errorMessage}>
              {errors.confirmPassword}
            </Text>
          )}
          <CustomButton
            label="Reset Password"
            onPress={() => handleSubmit()}
            loading={updateUserPasswordLoading}
            disabled={updateUserPasswordLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default UpdatePasswordScreen;

const styleSheet = StyleSheet.create({
  errorMessage: {
    textAlign: "right",
    color: "#F7B7A3",
    fontFamily: "fgsemibold",
    fontSize: wp(3.8),
  },
});
