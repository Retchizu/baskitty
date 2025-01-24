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
    //TODO: Check the database if the user is verified instead in auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (data.user?.user_metadata.email_verified) {
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
