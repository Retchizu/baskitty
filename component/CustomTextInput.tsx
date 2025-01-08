import { TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";

type CustomTextInputProps = {
  placeholder: string;
  isPassword?: boolean;
  isPasswordVisible?: boolean;
  setIsPasswordVisible?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomTextInput = ({
  placeholder,
  isPassword,
  isPasswordVisible,
  setIsPasswordVisible,
}: CustomTextInputProps) => {
  return (
    <View
      style={{
        borderColor: "black",
        borderWidth: wp(0.3),
        borderRadius: wp(2),
        padding: wp(2.5),
        marginVertical: hp(1),
        flexDirection: "row",
        backgroundColor: "#F8F9FA",
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={{ flex: 1 }}
        secureTextEntry={isPasswordVisible}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setIsPasswordVisible!(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <Feather
              name="eye"
              size={24}
              color="black"
              style={{ paddingHorizontal: wp(2) }}
            />
          ) : (
            <Feather
              name="eye-off"
              size={24}
              color="black"
              style={{ paddingHorizontal: wp(2) }}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
