import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store/store"
import { Provider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';
import {SignupScreen,LoginScreen,ProductListScreen,CartScreen} from './screens'
import { AppRegistry } from "react-native";
const Stack = createNativeStackNavigator();
const  App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{
      headerShown: false, 
    }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
      headerShown: false, 
    }} />
       <Stack.Screen name="ProductList" component={ProductListScreen}  options={{
      headerShown: false, 
    }} />
      <Stack.Screen name="Cart" component={CartScreen} options={{
      headerShown: false, 
    }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}; 

export default () => {
  return (
    <Provider store={store}>
      <PaperProvider>
      <App />
      </PaperProvider>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => App);
