import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../../type/types";
import { useLoadFont } from "../../hooks/useLoadFont";
import { supabase } from "../../initSupabase";
import { useBootCheckSession } from "../../hooks/useBootCheckSession";

type SplashScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "SplashScreen"
>;
const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const loaded = useLoadFont();

  //TODO: auto sign in

  useBootCheckSession(navigation, loaded);
  return (
    <View
      style={{ backgroundColor: "F8F9FA", flex: 1, justifyContent: "center" }}
    >
      <Image
        source={require("../../../assets/baskitty_logo.png")}
        style={{ alignSelf: "center", height: hp(30), width: wp(40) }}
      />
    </View>
  );
};

export default SplashScreen;
