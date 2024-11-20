import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./component/screens/homeScreen";
import MenuScreen from "./component/screens/menuScreen";
import RecipeCardScreen from "./component/screens/recipeCardScreen";
import RecipeScreen from "./component/screens/recipeScreen";
import Finances from "./component/screens/financeScreen";
import Build from "./component/screens/buildScreen";
import Marketing from "./component/screens/marketingScreen";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Warning: Slider: Support for defaultProps will be removed from function components',
]);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="menuScreen"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recipeCardScreen"
          component={RecipeCardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeScreen"
          component={RecipeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="financeScreen"
          component={Finances}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="buildScreen"
          component={Build}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="marketingScreen"
          component={Marketing}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}