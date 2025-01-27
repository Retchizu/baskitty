import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  RequestPasswordResetScreen: undefined;
  UpdatePasswordScreen: undefined;
  MainBottomTab: undefined;
};

export type MainBottomTabParamList = {
  HomeScreen: undefined;
  CategoryScreen: undefined;
  NotificationScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
};

export type MainStackParamList = {
  AuthStack: undefined;
  MainBottomTab: undefined;
};

export type AuthStackNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  | "SignInScreen"
  | "SignUpScreen"
  | "RequestPasswordResetScreen"
  | "UpdatePasswordScreen"
>;
