import {
  TextInput,
  TouchableOpacity,
  View,
  TextInputProps,
} from "react-native";
import React, { Dispatch, SetStateAction, FC } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";

type CustomTextInputProps = TextInputProps & {
  placeholder: string;
  isPassword?: boolean;
  isPasswordHidden?: boolean;
  setIsPasswordHidden?: Dispatch<SetStateAction<boolean>>;
};

const CustomTextInput: FC<CustomTextInputProps> = (props) => {
  const {
    placeholder,
    isPassword,
    isPasswordHidden,
    setIsPasswordHidden,
    ...textInputProps
  } = props;
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
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder={placeholder}
        style={{ flex: 1, fontSize: wp(5), fontFamily: "fgregular" }}
        secureTextEntry={isPasswordHidden}
        numberOfLines={1}
        {...textInputProps}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setIsPasswordHidden!(!isPasswordHidden)}
        >
          <Feather
            name={isPasswordHidden ? "eye-off" : "eye"}
            size={wp(6)}
            color="black"
            style={{ paddingHorizontal: wp(2) }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
