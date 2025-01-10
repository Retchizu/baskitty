import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackParamList } from '../type/types';
import HomeScreen from '../screens/main/HomeScreen';
import CategoryScreen from '../screens/main/CategoryScreen';
import NotificationScreen from '../screens/main/NotificationScreen';
import CartScreen from '../screens/main/CartScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

const Tab = createBottomTabNavigator<MainStackParamList>();

const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="CategoryScreen" component={CategoryScreen} />
    <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
    <Tab.Screen name="CartScreen" component={CartScreen} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
  </Tab.Navigator>
)

export default MainStack;