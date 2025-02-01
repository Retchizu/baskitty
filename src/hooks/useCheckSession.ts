import { useEffect } from "react";
import { supabase } from "../initSupabase";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../type/types";

export const checkSession = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "SignInScreen",
    undefined
  >
) =>
  useEffect(() => {
    const checkIfSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        console.log(session);
        navigation.navigate("MainBottomTab");
      }
    };

    checkIfSession();
  }, []);
