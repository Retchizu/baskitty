import { Dispatch, SetStateAction } from "react";
import { supabase } from "../../initSupabase";

export const signUpUser = async (
  email: string,
  password: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true); // Start loading

  try {
    // Attempt to sign up the user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (data.user) {
      console.log("Check your email for verification link");
    }
  } catch (error) {
    console.error("Sign-up error:", error);
    alert(`Error during sign-up: ${(error as Error).message}`);
  } finally {
    setLoading(false);
  }
};
