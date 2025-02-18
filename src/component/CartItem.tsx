import { View, Text, StyleSheet, ViewProps, ImageSourcePropType, Image } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomDropdown from './CustomDropdown';

type CustomCartItem = ViewProps & {
  shopName: string;
  image: ImageSourcePropType;
  itemName: string;
  types: { type: string; label: string }[];
  price: number;
}

const CartItem: React.FC<CustomCartItem> = (props) => {
  const [isChecked, setChecked] = useState(false);
  const [isAllChecked, setAllChecked] = useState(false);
  const { shopName, image, itemName, types, price } = props; 

  const handleAllChecked = (value: boolean) => {
    setAllChecked(value);
    setChecked(value);
  };

  return (
    <View
      style={{
        backgroundColor: "#FFF6F7",
        paddingVertical: hp(2.5),
        minHeight: hp(4.8),
        flexDirection: "column",
        borderWidth: wp(0.3),
        borderRadius: wp(2),
        borderColor: "#FFC1CC",
        marginBottom: hp(1),
        position: "relative", 
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: hp(2) }}>
        <Checkbox
          style={styles.checkbox}
          value={isAllChecked}
          onValueChange={handleAllChecked}
          color={isAllChecked ? "#98D0EB" : undefined}
        />
        <Text style={{ marginLeft: wp(2), fontFamily: "fgmedium" }}>{shopName}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start", marginLeft: wp(4) }}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#98D0EB" : undefined}
        />
        <Image source={image} style={styles.image} />
        <View style={{ marginLeft: wp(3), flex: 1 }}>
          <Text style={{ color: '#585858', fontFamily: 'fgmedium' }}>{itemName}</Text>
          <View style={{ marginTop: hp(0.5) }}>
            <CustomDropdown 
              data={types} 
              onChange={(selected) => console.log("Selected:", selected)} 
            />
          </View>
          <Text style={{ fontSize: wp(5), fontFamily: 'fgmedium', color: '#FF607C', marginTop: hp(1.3) }}>₱{price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        </View>
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
    width: wp(20),
    height: hp(10),
    borderColor: "#FFC1CC",
    borderWidth: wp(0.4),
    borderRadius: wp(2),
    marginLeft: wp(4)
  },
});

export default CartItem