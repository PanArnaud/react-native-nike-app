import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';

import ProductDetailsScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShoppingCart from './screens/ShoppingCartScreen';

import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return <NavigationContainer>
    <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
              <FontAwesome5 name="shopping-cart" size={18} color="gray" />
              <Text style={{ color: "gray", marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} options={{ presentation: 'modal' }} />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  </NavigationContainer>;
}

export default Navigation;