import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const CustomDropdown = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text>Select Country</Text>
        <AntDesign name={expanded ? "caretup" : "caretdown"} size={12} color="#585858" />
      </TouchableOpacity>
    </View>
  )
}

export default CustomDropdown

const styles = StyleSheet.create({
  button: {
    height: hp(2.3),
    justifyContent: "space-between",
    flexDirection: "row",
    width: wp(20),
    backgroundColor: "#F8E0E3",
    marginLeft: wp(3),
    borderRadius: wp(1),
    alignItems: "center",
    paddingHorizontal: hp(0.3),
    marginTop: hp(0.3),
  },
})