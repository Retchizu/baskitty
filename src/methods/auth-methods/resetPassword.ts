import { Dispatch, SetStateAction } from "react";
import { supabase } from "../../initSupabase";

export const resetPassword = async (
  email: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const { data: resetPasswordData, error: resetPasswordError } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "com.retchizu.baskitty://update-password",
      });

    if (resetPasswordError) throw new Error(resetPasswordError.message);

    console.log(resetPasswordData);
    alert("Check your email for reset password confirmation");
  } catch (error) {
    alert((error as Error).message);
  } finally {
    setLoading(false);
  }
};
