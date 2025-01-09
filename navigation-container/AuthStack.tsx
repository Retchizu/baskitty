import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../type/types";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{ headerShown: false, statusBarBackgroundColor: "#F8F9FA" }}
    />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
  </Stack.Navigator>
);

export default AuthStack;
