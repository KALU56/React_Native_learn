import { createStackNavigator } from '@react-navigation/stack';
import SofaDetail from '../screens/SofaDetail';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SofaDetail" component={SofaDetail} />
    </Stack.Navigator>
  );
}
