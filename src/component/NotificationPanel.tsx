import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';

type CustomNotificationPanel = TouchableOpacityProps & {
  icon: any;
  title: string;
  description: string;
}

const NotificationPanel: React.FC<CustomNotificationPanel> = (props) => {
  const { icon, title, description } = props;
  return (
    <TouchableOpacity style={{
      backgroundColor: "#FFECEE",
      paddingVertical: hp(2),
      minHeight: hp(4.8),
      flexDirection: "row",
      borderWidth: wp(0.1),
      overflow: "hidden",
      borderColor: "#FFFFFF",
      alignItems: "center"

    }}>
      <View style={{ paddingHorizontal: wp(5), justifyContent: "center" }}>
        {icon}
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ marginBottom: hp(1.3), fontFamily: "fgregular", fontSize: wp(4.5) }}>{title}</Text>
        <Text style={{ fontFamily: "fgregular", fontSize: wp(3.5), color: "#585858" }}>{description}</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: wp(3) }}>
        <AntDesign name="right" size={24} color="#585858" />
      </View>

    </TouchableOpacity>
  )
}

export default NotificationPanel