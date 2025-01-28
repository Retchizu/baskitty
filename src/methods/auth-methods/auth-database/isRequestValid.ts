import { supabase } from "../../../initSupabase";

export const isRequestValid = async (uid: string): Promise<boolean> => {
  const { data: requestDataInDatabase, error: requestDataInDatabaseError } =
    await supabase.from("RequestSignUp").select("expires_at").eq("uid", uid);

  if (requestDataInDatabaseError)
    throw new Error(requestDataInDatabaseError.message);

  if (requestDataInDatabase?.length) {
    const { expires_at } = requestDataInDatabase[0];
    const remainingTime = new Date(expires_at).getTime() - new Date().getTime();

    console.log(new Date(expires_at).getTime(), new Date().getTime());
    console.log(remainingTime);
    return remainingTime < 0;
  }
  return true;
};
