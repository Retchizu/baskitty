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
  isPasswordHidden?: boolean;
  setIsPasswordHidden?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomTextInput = ({
  placeholder,
  isPassword,
  isPasswordHidden,
  setIsPasswordHidden,
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
        secureTextEntry={isPasswordHidden}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setIsPasswordHidden!(!isPasswordHidden)}
        >
          {isPasswordHidden ? (

            <Feather
              name="eye-off"
              size={wp(4.5)}
              color="black"
              style={{ paddingHorizontal: wp(1) }}
            />
          ) : <Feather
            name="eye"
            size={wp(4.5)}
            color="black"
            style={{ paddingHorizontal: wp(1) }}
          />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
