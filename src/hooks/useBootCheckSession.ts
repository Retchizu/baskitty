import { useEffect } from "react";
import { supabase } from "../initSupabase";
import { AuthStackParamList } from "../type/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useBootCheckSession = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "SplashScreen",
    undefined
  >,
  fontLoaded: boolean
) =>
  useEffect(() => {
    const checkIfSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        navigation.navigate("MainBottomTab");
      } else {
        navigation.navigate("SignInScreen");
      }
    };
    if (fontLoaded) {
      checkIfSession();
    }
  }, [fontLoaded]);
