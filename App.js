import React from "react";
import DetailScreen from "./Screens/Commande/DetailScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import CategoryScreen from "./Screens/Commande/CategoryScreen";
import ProductScreen from "./Screens/Commande/ProductScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DATA from "./config/Restaurant/DATA";
import './config/ignoreWarnings'
import StoreScreen from "./Screens/Commande/StoreScreen";

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
   
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Catégorie" component={CategoryScreen} />
        <Stack.Screen name="Produit" component={ProductScreen } />
        <Stack.Screen name="Details" component={DetailScreen } />
        <Stack.Screen name="Store" component={StoreScreen } />
        
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const App1 = () => {
  return <RecipeDetailScreen recipe={DATA[0].recipes[1]} />;

 };