import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NotificationPanel = () => {
  return (
    <TouchableOpacity style={{
      backgroundColor: "#FFECEE",
      paddingVertical: hp(1.2),
      minHeight: hp(4.8),
      marginVertical: hp(1),
    }}></TouchableOpacity>
  )
}

export default NotificationPanel