import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigation-container/AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "./type/types";
import MainBottomTab from "./navigation-container/MainBottomTab";

export default function App() {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="MainBottomTab"
      >
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ statusBarBackgroundColor: "#F8F9FA" }} />
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} options={{ statusBarBackgroundColor: "#FFC1CC" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
