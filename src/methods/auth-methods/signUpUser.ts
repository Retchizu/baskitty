import { Dispatch, SetStateAction } from "react";
import { supabase } from "../../initSupabase";
import { isRequestSignUpValid } from "./auth-database/isRequestSignUpValid";
import { createRequestSignUp } from "./auth-database/createRequestSignUp";
import { createAccount } from "./auth-database/createAccount";
import { checkUserNameDuplicate } from "./auth-database/checkUserNameDuplicate";
import { checkEmailDuplicate } from "./auth-database/checkEmailDuplicate";

export const signUpUser = async (
  email: string,
  password: string,
  userName: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);

  try {
    let requestValid: boolean = false;
    const { data: userInDatabase, error: userInDatabaseError } = await supabase
      .from("Account")
      .select("uid, email")
      .eq("email", email)
      .maybeSingle();

    if (userInDatabaseError) {
      throw new Error(userInDatabaseError.message);
    }

    if (await checkEmailDuplicate(email)) {
      alert("Email is already in used");
      return;
    }

    if (userInDatabase) {
      requestValid = await isRequestSignUpValid(userInDatabase.uid);
      console.log(userInDatabase);
    } else {
      requestValid = true;
    }

    if (requestValid) {
      if (await checkUserNameDuplicate(userName, email)) {
        alert("Username is already taken");
        return;
      }

      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: "com.retchizu.baskitty://sign-up",
          },
        });

      console.log(signUpData);
      if (signUpError) {
        throw new Error(signUpError.message);
      }

      await createAccount(signUpData.user?.id, email, userName);
      await createRequestSignUp(signUpData.user?.id);

      alert("Confirmation email sent. Please check your inbox.");
    } else {
      alert("A confirmation email was already sent. Please try again later.");
    }
  } catch (error) {
    console.error("Sign-up error:", error);
    alert(`Error during sign-up: ${(error as Error).message}`);
  } finally {
    setLoading(false);
  }
};
