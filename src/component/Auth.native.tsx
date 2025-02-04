import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { supabase } from "../initSupabase";
import { BASKITTY_WEB_ID, BASKITTY_ANDROID_ID } from "@env";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../type/types";

type GoogleSigninButtonComponentType = {
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "SignInScreen",
    undefined
  >;
};

const GoogleSigninButtonComponent = ({
  navigation,
}: GoogleSigninButtonComponentType) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: BASKITTY_WEB_ID,
    androidClientId: BASKITTY_ANDROID_ID,
  });


  useEffect(() => {
    const googleSignIn = async () => {
      try {
        if (response?.type == "success") {
          console.log(response.params);
          const { id_token } = response.params;
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: "google",
            token: id_token,
          });

          if (error) throw new Error(error.message);
          if (data) {
            console.log(data);
            navigation.replace("MainBottomTab");
          }
        }
      } catch (error) {
        alert(error);
      }
    };

    googleSignIn();
  }, [response]);

  WebBrowser.maybeCompleteAuthSession();

  return (
    <GoogleSigninButton
      style={{ width: wp(81), marginBottom: hp(1) }}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

export default GoogleSigninButtonComponent;
