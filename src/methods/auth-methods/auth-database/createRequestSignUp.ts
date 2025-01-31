import { supabase } from "../../../initSupabase";

export const createRequestSignUp = async (uid: string | undefined) => {
  const currentTime = new Date();
  const expiresAt = new Date(currentTime.getTime() + 5 * 60 * 1000);
  const { error: insertRequestSignUpInDatabaseError } = await supabase
    .from("RequestSignUp")
    .upsert(
      {
        uid: uid,
        expires_at: expiresAt.toISOString(),
      },
      { onConflict: "uid" }
    );
  if (insertRequestSignUpInDatabaseError)
    throw new Error(insertRequestSignUpInDatabaseError.message);
};
