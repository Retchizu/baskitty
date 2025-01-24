import { supabase } from "../../../initSupabase";

export const createAccount = async (
  uid: string | undefined,
  email: string,
  userName: string
) => {
  const { error: insertUserInDatabaseError } = await supabase
    .from("Account")
    .upsert(
      {
        uid: uid,
        email: email.toLowerCase(),
        userName: userName,
        isVerified: false,
      },
      { onConflict: "uid" }
    );

  if (insertUserInDatabaseError) {
    throw new Error(insertUserInDatabaseError.message);
  }
};
