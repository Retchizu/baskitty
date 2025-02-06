import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/native";
import { useSignOutListener } from "../../hooks/useSignOutListener";
import { signOutUser } from "../../methods/auth-methods/signOutUser";

const ProfileScreen = () => {
  const navigation = useNavigation();

  useSignOutListener(navigation);
  return (
    <View
      style={{
        backgroundColor: "#FFF6F7",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFC1CC",
          paddingVertical: hp(2),
          alignItems: "center",
          paddingHorizontal: wp(5),
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Image
          source={require("../../../assets/profile.png")}
          style={{
            width: wp(30),
            height: hp(15),
            borderRadius: wp(20),
            borderColor: "#FF607C",
            borderWidth: wp(1),
          }}
        ></Image>
        <Text
          style={{
            marginTop: hp(2),
            fontFamily: "fgmedium",
            fontSize: hp(2.7),
            color: "#FFF6F7",
          }}
        >
          QuinyReju
        </Text>

        <AntDesign
          name="setting"
          size={24}
          color="#FFF6F7"
          style={{ position: "absolute", top: hp(2), right: wp(5) }}
        />
      </View>
      <TouchableOpacity
        style={{
          borderColor: "#FF607C",
          borderWidth: wp(0.2),
          paddingVertical: hp(1.2),
          minHeight: hp(4.8),
          marginVertical: hp(1),
          justifyContent: "center",
          alignContent: "center",
        }}
        onPress={() => signOutUser()}
      >
        <Text
          style={{ textAlign: "center", fontFamily: "fgbold", fontSize: hp(2) }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
