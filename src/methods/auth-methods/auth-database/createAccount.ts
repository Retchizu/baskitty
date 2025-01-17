import { supabase } from "../../../initSupabase";

export const createAccount = async (
  uid: string | undefined,
  email: string,
  userName: string
) => {
  try {
    const { error: insertUserInDatabaseError } = await supabase
      .from("Account")
      .upsert(
        {
          uid: uid,
          email: email,
          userName: userName,
        },
        { onConflict: "uid" }
      );

    if (insertUserInDatabaseError) {
      throw new Error(insertUserInDatabaseError.message);
    }
  } catch (error) {
    throw error;
  }
};
