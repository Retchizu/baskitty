import { useEffect } from "react";
import * as Linking from "expo-linking";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../type/types";
import { useNavigationState } from "@react-navigation/native";
import { supabase } from "../initSupabase";
import { updateUserVerificationStatus } from "../methods/auth-methods/auth-database/updateUserVerificationStatus";

type AuthStackNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "SignInScreen" | "SignUpScreen" | "ResetPasswordScreen"
>;

export const useGetSignUpConfirmationLink = (
  navigation: AuthStackNavigationProp,
  currentScreen: string
) => {
  useEffect(() => {
    const handleDeepLink = async (url: string | null) => {
      if (!url) return;
      try {
        const [_, params] = url.split("#");
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
        if (queryParams["error_description"]) {
          alert(queryParams["error_description"].replace(/\+/g, " "));
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
