import { supabase } from "../../initSupabase";
import { Dispatch, SetStateAction } from "react";

export const signInUser = async (
  email: string,
  password: string,
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

    if (data.user?.user_metadata.email_verified) {
      console.log("Account is verified");
      console.log(data.user.user_metadata.email_verified);
    }
  } catch (error) {
    alert(error);
  } finally {
    setLoading(false);
  }
};
