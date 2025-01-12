import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { supabase } from "../../initSupabase";
import { AuthStackParamList } from "../../type/types";
import { Dispatch, SetStateAction } from "react";

export const signInUser = async (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "SignInScreen",
    undefined
  >,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (data.user?.email_confirmed_at) {
      console.log("Account is verified");
      console.log(data.user.user_metadata.email_verified);
      navigation.navigate("MainBottomTab");
    }
  } catch (error) {
    alert(error);
  } finally {
    setLoading(false);
  }
};
