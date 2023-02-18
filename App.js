import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductDetailsScreen from './src/screens/ProductDetailScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCartScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
