import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home 0"
        component={Profile}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

