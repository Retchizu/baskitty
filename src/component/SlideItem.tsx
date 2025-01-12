import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type SlideItemProps = {
  item: {
    id: number;
    image: ImageSourcePropType;
  };
};

const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode="contain" style={styles.image} />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    height: hp(23),
    width: wp(100),
  },
});
