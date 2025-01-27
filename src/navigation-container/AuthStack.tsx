import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../type/types";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import SplashScreen from "../screens/auth/SplashScreen";
import RequestPasswordResetScreen from "../screens/auth/RequestPasswordResetScreen";
import UpdatePasswordScreen from "../screens/auth/UpdatePasswordScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      statusBarBackgroundColor: "#F8F9FA",
    }}
  >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="SignInScreen" component={SignInScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen
      name="RequestPasswordResetScreen"
      component={RequestPasswordResetScreen}
    />
    <Stack.Screen
      name="UpdatePasswordScreen"
      component={UpdatePasswordScreen}
    />
  </Stack.Navigator>
);

export default AuthStack;
