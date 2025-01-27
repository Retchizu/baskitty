import { Dispatch, SetStateAction } from "react";
import { supabase } from "../../initSupabase";
import { AuthStackNavigationProp } from "../../type/types";

export const updateUserPassword = async (
  password: string,
  navigation: AuthStackNavigationProp,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const {
      data: { user },
      error: updateUserError,
    } = await supabase.auth.updateUser({
      password: password,
    });

    if (updateUserError) throw new Error(updateUserError.message);
    if (user) {
      alert("Password updated successfully!");
      navigation.reset({
        index: 0,
        routes: [{ name: "SignInScreen" }],
      });
    }
  } catch (error) {
    alert((error as Error).message);
  } finally {
    setLoading(false);
  }
};
