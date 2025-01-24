import { supabase } from "../../initSupabase";

export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://baskitty-d504c.firebaseapp.com/",
  });

  console.log(data, error);
};
