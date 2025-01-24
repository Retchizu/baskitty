import { supabase } from "../../../initSupabase";

export const updateUserVerificationStatus = async (uid: string) => {
  const { error: updatingAccountInDatabaseError } = await supabase
    .from("Account")
    .update({ isVerified: "TRUE" })
    .eq("uid", uid);

  if (updatingAccountInDatabaseError)
    throw new Error(updatingAccountInDatabaseError.message);
};
