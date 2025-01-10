import { supabase } from "../../initSupabase";

export const signUpUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (!data.user && !error) {
    console.log("Check your email for login link");
  }
  if (error) {
    console.log(error.message);
  }
  console.log(data);
};
