import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation-container/AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "./src/type/types";
import MainBottomTab from "./src/navigation-container/MainBottomTab";
import { linking } from "./src/linkingConfig";

export default function App() {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ statusBarBackgroundColor: "#F8F9FA" }}
        />
        <Stack.Screen
          name="MainBottomTab"
          component={MainBottomTab}
          options={{ statusBarBackgroundColor: "#FFC1CC" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
