import { supabase } from "../../initSupabase";

export const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data.user, data.session);
  console.log(data.user?.email_confirmed_at);
};
