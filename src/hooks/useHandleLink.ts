import { useEffect } from "react";
import * as Linking from "expo-linking";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackNavigationProp, AuthStackParamList } from "../type/types";
import { supabase } from "../initSupabase";
import { updateUserVerificationStatus } from "../methods/auth-methods/auth-database/updateUserVerificationStatus";

export const useHandleLink = (
  navigation: AuthStackNavigationProp,
  currentScreen: string
) => {
  useEffect(() => {
    const handleDeepLink = async (url: string | null) => {
      if (!url) return;
      try {
        const [baseUrl, params] = url.split("#");
        const queryParams: Record<string, string> = {};

        if (params) {
          const pairs = params.split("&");
          pairs.forEach((pair) => {
            const [key, value] = pair.split("=");
            if (key && value) {
              queryParams[key] = value;
            }
          });
        }

        if (queryParams["error_description"]) {
          alert(queryParams["error_description"].replace(/\+/g, " "));
          return;
        }

        switch (baseUrl) {
          case "com.retchizu.baskitty://update-password":
            if (queryParams["access_token"] && queryParams["refresh_token"]) {
              const {
                data: { user },
                error: sessionError,
              } = await supabase.auth.setSession({
                access_token: queryParams["access_token"],
                refresh_token: queryParams["refresh_token"],
              });

              if (sessionError) {
                throw new Error(sessionError.message);
              }

              if (user) {
                navigation.replace("UpdatePasswordScreen");
              }
            }

            break;
          case "com.retchizu.baskitty://sign-up":
            if (queryParams["access_token"]) {
              if (currentScreen !== "SignInScreen") {
                navigation.replace("SignInScreen");
              }

              const {
                data: { user },
              } = await supabase.auth.getUser(queryParams["access_token"]);

              if (user) {
                await updateUserVerificationStatus(user.id);
              }
              alert("Your account has been verified! You can now sign in.");
            }

            break;
        }
      } catch (error) {
        alert((error as Error).message);
      }
    };

    // Listen for deep link events while the app is running
    const subscription = Linking.addEventListener("url", (event) =>
      handleDeepLink(event.url)
    );

    return () => subscription.remove();
  }, []);
};
