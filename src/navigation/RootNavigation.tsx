
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MapScreen from '../screens/MapScreen';
// import MapScreen from '../screens/LocationScreen';r

const Tab = createBottomTabNavigator();

const RootNavigation=()=> {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={MapScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation