import { useEffect } from "react";
import { supabase } from "../initSupabase";
import {
  CommonActions,
  NavigationProp,
  NavigationState,
} from "@react-navigation/native";

export const useSignOutListener = (
  navigation: Omit<
    NavigationProp<ReactNavigation.RootParamList>,
    "getState"
  > & {
    getState(): NavigationState | undefined;
  }
) => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, _) => {
      if (event === "SIGNED_OUT") {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "AuthStack" }],
          })
        );
      }
    });
  });
};
