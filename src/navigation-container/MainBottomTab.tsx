import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainBottomTabParamList } from "../type/types";
import HomeScreen from "../screens/main/HomeScreen";
import CategoryScreen from "../screens/main/CategoryScreen";
import NotificationScreen from "../screens/main/NotificationScreen";
import CartScreen from "../screens/main/CartScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTab = () => (
  <Tab.Navigator screenOptions={{
    headerShown: false,
  }} initialRouteName="ProfileScreen">
    <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarIcon: () => (<AntDesign name="home" size={24} color="gray" />), tabBarLabel: "Shop" }} />
    <Tab.Screen name="CategoryScreen" component={CategoryScreen} options={{ tabBarIcon: () => (<AntDesign name="appstore-o" size={24} color="gray" />), tabBarLabel: "Category" }} />
    <Tab.Screen name="NotificationScreen" component={NotificationScreen} options={{ tabBarIcon: () => (<AntDesign name="bells" size={24} color="gray" />), tabBarLabel: "Notification" }} />
    <Tab.Screen name="CartScreen" component={CartScreen} options={{ tabBarIcon: () => (<AntDesign name="shoppingcart" size={24} color="gray" />), tabBarLabel: "Cart" }} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarIcon: () => (<AntDesign name="user" size={24} color="gray" />), tabBarLabel: "Me" }} />
  </Tab.Navigator>
);

export default MainBottomTab;
