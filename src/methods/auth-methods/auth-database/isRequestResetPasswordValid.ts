import { supabase } from "../../../initSupabase";

export const isRequestResetPasswordValid = async (uid: string) => {
  const { data: requestDataInDatabase, error: requestDataInDatabaseError } =
    await supabase
      .from("RequestResetPassword")
      .select("expires_at")
      .eq("uid", uid)
      .maybeSingle();

  if (requestDataInDatabaseError)
    throw new Error(requestDataInDatabaseError.message);

  if (requestDataInDatabase) {
    const { expires_at } = requestDataInDatabase;
    const remainingTime = new Date(expires_at).getTime() - new Date().getTime();

    console.log(new Date(expires_at).getTime(), new Date().getTime());
    console.log(remainingTime);
    return remainingTime < 0;
  }

  return true;
};
