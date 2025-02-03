import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { BASKITTY_API_KEY, BASKITTY_PROJECT_URL } from "@env";
const supabaseUrl = BASKITTY_PROJECT_URL;
const supabaseKey = BASKITTY_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export { supabase };
