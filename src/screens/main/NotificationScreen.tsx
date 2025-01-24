import { View, Text } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import NotificationPanel from '../../component/NotificationPanel';


const NotificationScreen = () => {
  return (
    <View style={{
      backgroundColor: "#F8F9FA",
      flex: 1,
    }}>
      <View
        style={{
          backgroundColor: "#FFC1CC",
          paddingVertical: hp(2.08),
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: wp(5),
        }}
      >
        <AntDesign name="bells" size={24} color="white" />
        <Text style={{ color: 'white', marginLeft: wp(3), fontSize: wp(5), fontFamily: "fgsemibold", marginRight: wp(47) }}>Notifications</Text>
        <AntDesign name="message1" size={24} color="white" />
      </View>

      <NotificationPanel />
    </View>
  )
}

export default NotificationScreen