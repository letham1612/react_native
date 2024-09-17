import { View, Text,Image,StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Profile = () => {
  const [quantity, setQuantity] = useState(3);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        {/* Header */}
      <Text style={styles.productTitle}>Coconut</Text>
      <Text style={styles.productTitle1}>Chips</Text>
      <Text style={styles.productSubTitle}>Dang</Text>
      </View>
      <View>
       {/* Product Image */}
      <Image
      source={require('../../assets/images/coconut.png')}
        style={styles.productImage}
      />

        {/* Product Info */}
        <View style={styles.productInfo}>
        <Text style={styles.productDescription}>Pure{'\n'}Coconut</Text>
        <Text style={styles.percentage}>100%</Text>
        </View>

        {/*Quantity Section */}
        <View style={styles.quantitySection}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
           <Text style={styles.quantityButtonText}>-</Text> 
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
        </View>

          {/* Price */}
      <Text style={styles.price}>$06.00</Text>

       {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
        <View style={styles.cartIconContainer}>
          <Text style={styles.cartIcon}>🛒</Text>
        </View>
      </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
   position:'absolute',
   top:0,
   left:0,
   marginLeft:20,
   marginTop:50,
   
  },
  productTitle: {
    fontSize: 36,
    color: '#000',
  },
  productTitle1:{
    fontWeight:'bold',
    fontSize:30,
    marginTop:-10,
  },
  productSubTitle: {
    fontSize: 16,
    color: '#8E8E8E',
    marginBottom: 20,
  },
  productImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },
  productInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginTop:-50, 
    marginBottom:20,
    alignSelf: 'center',
    color: '#000000',
    borderColor:'#FAFAFA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height:70,
    textAlign: 'center',
    backgroundColor: '#F2FAEB',
  },
  productDescription: {
    fontSize: 16,
    color: '#8E8E8E',
    marginLeft:15,
    
  },
  percentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginRight:15,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  quantityButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    
  },
  quantityText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: -20,
    borderColor:'#FFEC89',
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#FFEC89',
    width:120,
    alignSelf: 'center',
    paddingVertical: 5, // Giảm khoảng cách trên dưới 
    paddingHorizontal: 5, // Giảm khoảng cách hai bên 
  },
  addToCartButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:-40,
    width:300,
    height:80,
    bottom:-70,
    paddingBottom:-50,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 100,
    marginLeft:20,
    
  },
  cartIconContainer: {
    backgroundColor: '#FFEC89',
    borderRadius: 25,
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    fontSize: 24,
  },
});

export default Profile