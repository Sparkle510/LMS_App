import React from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/slices/cartSlice';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
   
    const handleDecrement = useCallback(() => {
      dispatch(decrementQuantity(item.courseName));
    }, [dispatch, item.courseName]);

    const handleIncrement = useCallback(() => {
      dispatch(incrementQuantity(item.courseName));
    }, [dispatch, item.courseName]);

    return (
      <View style={styles.cartItem}>
        <Image source={item.banner} style={styles.courseImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.courseName}>{item.courseName}</Text>
          <Text style={styles.userName}>{item.userName}</Text>
          <View style={styles.quantityControls}>
            <Button title="−" onPress={handleDecrement} />
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Button title="+" onPress={handleIncrement} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>No items in the cart</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.courseName}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#999',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  userName: {
    fontSize: 14,
    color: '#777',
    marginBottom: 6,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
    minWidth: 30,
    textAlign: 'center',
  },
});
