import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type CategoryButtonProps = TouchableOpacityProps & {
  label: string;
  image: ImageSourcePropType;
};

const CategoryButton: React.FC<CategoryButtonProps> = (props) => {
  const { label, image } = props;
  return (
    <TouchableOpacity
      style={{
        marginVertical: hp(0.8),
        borderRadius: wp(2),
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#FFC1CC",
      }}
    >
      <ImageBackground source={image} resizeMode="cover">
        <Text
          style={{
            textAlign: "center",
            color: "#F8F9FA",
            fontSize: wp(6),
            fontFamily: "fgbold",
            paddingVertical: wp(2),
          }}
        >
          {label}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryButton;
