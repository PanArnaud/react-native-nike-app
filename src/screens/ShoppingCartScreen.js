import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ActionButton from '../components/ActionButton';
import CartListItem from '../components/CartListItem';
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice';

const ShoppingCardTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryPrice = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);


  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryPrice} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  )
};

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCardTotals}
      />
      <ActionButton title="Checkout" onPress={() => console.log("Checkout")} />
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ShoppingCart;