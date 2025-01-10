import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../../type/types";

type SplashScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "SplashScreen"
>;
const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const [loaded] = useFonts({
    fgbold: require("../../../assets/fonts/FamiljenGrotesk-Bold.ttf"),
    fgbolditalic: require("../../../assets/fonts/FamiljenGrotesk-BoldItalic.ttf"),
    fgitalic: require("../../../assets/fonts/FamiljenGrotesk-Italic.ttf"),
    fgmedium: require("../../../assets/fonts/FamiljenGrotesk-Medium.ttf"),
    fgmediumitalic: require("../../../assets/fonts/FamiljenGrotesk-MediumItalic.ttf"),
    fgregular: require("../../../assets/fonts/FamiljenGrotesk-Regular.ttf"),
    fgsemibold: require("../../../assets/fonts/FamiljenGrotesk-SemiBold.ttf"),
    fgsemibolditalic: require("../../../assets/fonts/FamiljenGrotesk-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) navigation.replace("SignInScreen");
  }, [loaded]);
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
