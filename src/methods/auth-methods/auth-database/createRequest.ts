import { supabase } from "../../../initSupabase";

export const createRequest = async (uid: string | undefined) => {
  try {
    const currentTime = new Date();
    const expiresAt = new Date(currentTime.getTime() + 2 * 60 * 1000);
    const { error: insertRequestInDatabaseError } = await supabase
      .from("Request")
      .upsert(
        {
          uid: uid,
          created_at: new Date().toISOString(),
          expires_at: expiresAt.toISOString(),
        },
        { onConflict: "uid" }
      );
    if (insertRequestInDatabaseError)
      throw new Error(insertRequestInDatabaseError.message);
  } catch (error) {
    throw error;
  }
};
