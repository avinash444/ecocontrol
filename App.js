import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home">
          <Stack.Screen
              name="Home"
              component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
       );
}

