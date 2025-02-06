import { supabase } from "../../initSupabase";

export const signOutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  } catch (error) {
    alert((error as Error).message);
  }
};
