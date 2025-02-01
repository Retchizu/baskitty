import { Dispatch, SetStateAction } from "react";
import { supabase } from "../../initSupabase";
import { isRequestResetPasswordValid } from "./auth-database/isRequestResetPasswordValid";
import { createRequestResetPassword } from "./auth-database/createRequestResetPassword";

export const resetPassword = async (
  email: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const { data: userInDatabase, error: userInDatabaseError } = await supabase
      .from("Account")
      .select("uid")
      .eq("email", email.toLowerCase())
      .maybeSingle();

    if (userInDatabaseError) {
      console.log(userInDatabaseError?.details);
      throw new Error(userInDatabaseError.message);
    }

    if (!userInDatabase?.uid) {
      throw new Error("No account found with this email address");
    }

    const isRequestValid = await isRequestResetPasswordValid(
      userInDatabase.uid
    );
    if (!isRequestValid) {
      alert("Please wait before sending another password reset request.");
      return;
    }

    const { data: resetPasswordData, error: resetPasswordError } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "com.retchizu.baskitty://update-password",
      });

    if (resetPasswordError) throw new Error(resetPasswordError.message);

    await createRequestResetPassword(userInDatabase.uid);

    console.log(resetPasswordData);
    alert("Check your email for reset password confirmation");
  } catch (error) {
    alert((error as Error).message);
  } finally {
    setLoading(false);
  }
};
