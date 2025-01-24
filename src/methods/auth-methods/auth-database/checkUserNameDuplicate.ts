import { supabase } from "../../../initSupabase";

export const checkUserNameDuplicate = async (
  userName: string,
  email: string
): Promise<boolean> => {
  const { data: userNameInDatabase, error: userNameInDatabaseError } =
    await supabase
      .from("Account")
      .select("email, userName")
      .eq("userName", userName);

  if (userNameInDatabaseError) {
    throw new Error(userNameInDatabaseError.message);
  }
  if (userNameInDatabase?.length && email !== userNameInDatabase[0].email) {
    return true;
  }
  return false;
};
