import { Dispatch, SetStateAction } from "react";
import { supabase } from "../../initSupabase";
import { isRequestValid } from "./auth-database/isRequestValid";
import { createRequest } from "./auth-database/createRequest";
import { createAccount } from "./auth-database/createAccount";
import { checkUserNameDuplicate } from "./auth-database/checkUserNameDuplicate";

export const signUpUser = async (
  email: string,
  password: string,
  userName: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);

  try {
    let requestValid: boolean | undefined;
    const { data: userInDatabase, error: userInDatabaseError } = await supabase
      .from("Account")
      .select("uid, email")
      .eq("email", email);

    if (userInDatabaseError) {
      throw new Error(userInDatabaseError.message);
    }

    if (userInDatabase.length) {
      requestValid = await isRequestValid(userInDatabase[0].uid);
      console.log(userInDatabase[0]);
    }

    if (requestValid || requestValid === undefined) {
      if (await checkUserNameDuplicate(userName, email)) {
        alert("Username is already taken");
        return;
      }
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
        });

      console.log(signUpData);
      if (signUpError) {
        throw new Error(signUpError.message);
      }

      await createAccount(signUpData.user?.id, email, userName);
      await createRequest(signUpData.user?.id);
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
