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
        screenOptions={{ headerShown: false }}
        initialRouteName="AuthStack"
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
