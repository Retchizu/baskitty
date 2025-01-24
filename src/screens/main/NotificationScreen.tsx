import { View, Text, Image } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import NotificationPanel from '../../component/NotificationPanel';
import OrderNotification from '../../component/OrderNotification';


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
      <View style={{ marginVertical: hp(0.8) }}>
        <NotificationPanel icon={<AntDesign name="tago" size={24} color="#D7BDE2" />} title="Promotions" description="Purr-fect Deals! 20% off for today only." />
        <NotificationPanel icon={<AntDesign name="hearto" size={24} color="#FFC1CC" />} title="Wishlist Alerts" description="Your favorite item is back in stock!" />
        <NotificationPanel icon={<Image source={require("../../../assets/baskitty_logo.png")} style={{ width: wp(6), height: hp(5) }} />} title="Baskitty Updates" description="New features added to Baskitty!" />
      </View>
      <Text style={{ fontFamily: "fgregular", marginBottom: hp(1), padding: wp(2) }}>Order Updates</Text>
      <View>
        <OrderNotification image={require("../../../assets/orders/order1.png")} title="Parcel Delivered" description="Parcel 123456789 has been delivered." dateTime="12/31/2024 14:03" />
        <OrderNotification image={require("../../../assets/orders/order2.png")} title="Complete Your Payment" description="Hi [Username], Your order(s) totaling ₱[Amount] has not been paid. Please complete your payment before [Date]. If you have already completed your payment, please ignore this message.." dateTime="12/31/2024 14:03" />
      </View>
    </View>
  )
}

export default NotificationScreen