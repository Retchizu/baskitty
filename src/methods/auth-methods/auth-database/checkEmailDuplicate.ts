import { supabase } from "../../../initSupabase";

export const checkEmailDuplicate = async (email: string) => {
  const lowerCasedEmail = email.toLowerCase();
  const { data: userInDatabase, error: userInDatabaseError } = await supabase
    .from("Account")
    .select("email, isVerified")
    .eq("email", lowerCasedEmail);

  if (userInDatabaseError) throw new Error(userInDatabaseError.message);

  if (
    userInDatabase?.length &&
    userInDatabase[0].isVerified === true &&
    userInDatabase[0].email === lowerCasedEmail
  )
    return true;

  return false;
};
