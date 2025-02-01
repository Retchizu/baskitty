import { supabase } from "../../../initSupabase";
//TODO restpassword request
export const createRequestResetPassword = async (uid: string | undefined) => {
  const currentTime = new Date();
  const expiresAt = new Date(currentTime.getTime() + 15 * 60 * 1000);
  const { error: insertRequestResetPasswordInDatabaseError } = await supabase
    .from("RequestResetPassword")
    .upsert(
      {
        uid: uid,
        expires_at: expiresAt.toISOString(),
      },
      { onConflict: "uid" }
    );
  if (insertRequestResetPasswordInDatabaseError)
    throw new Error(insertRequestResetPasswordInDatabaseError.message);
};
