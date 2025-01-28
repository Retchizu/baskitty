import { View, Text, StyleSheet, ViewProps, ImageSourcePropType, Image } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type CustomCartItem = ViewProps & {
  shopName: string;
  image: ImageSourcePropType;
  itemName: string;
}

const CartItem: React.FC<CustomCartItem> = (props) => {
  const [isChecked, setChecked] = useState(false);
  const [isAllChecked, setAllChecked] = useState(false);
  const { shopName, image, itemName } = props;


  return (
    <View
      style={{
        backgroundColor: "#FFF6F7",
        paddingVertical: hp(2),
        minHeight: hp(4.8),
        flexDirection: "column",
        borderWidth: wp(0.3),
        borderRadius: wp(2),
        overflow: "hidden",
        borderColor: "#FFC1CC",
        marginBottom: hp(1),
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: hp(2), }}>
        <Checkbox
          style={styles.checkbox}
          value={isAllChecked}
          onValueChange={setAllChecked}
          color={isAllChecked ? "#98D0EB" : undefined}
        />
        <Text style={{ marginLeft: wp(2), fontFamily: "fgmedium" }}>{shopName}</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "flex-start", marginLeft: wp(4) }}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#98D0EB" : undefined}
        />
        <Image source={image} style={styles.image}></Image>
        <Text style={{ marginLeft: wp(3), color: "#585858", fontFamily: "fgmedium", }}>{itemName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    marginLeft: wp(4),
    alignSelf: "center",
    borderRadius: wp(1),
    borderWidth: wp(0.3)
  },
  image: {
    width: wp(16),
    height: hp(8),
    borderColor: "#FFC1CC",
    borderWidth: wp(0.4),
    borderRadius: wp(2),
    marginLeft: wp(4)
  },
});

export default CartItem