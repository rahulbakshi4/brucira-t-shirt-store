import { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button,Text } from 'react-native-paper';
import data from '../assets/data.json'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProducts, setProducts } from '../features/productList/productListSlice';
import { ProductCard } from '../components/ProductCard';
import { CartScreen } from './CartScreen';
import CartIcon from '../components/CartIcon';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']; // Available sizes

export const ProductListScreen = () => {
  const [selectedSizes, setSelectedSizes] = useState([]); 
  const [isModalVisible, setModalVisible] = useState(false);
  const {products} = useSelector((store)=>store.productList)
  const dispatch = useDispatch()


useEffect(()=>{
    dispatch(getAllProducts())
},[products])

  // Function to handle button press
  const handlePress = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size)); 
    } else {
      setSelectedSizes([...selectedSizes, size]); 
    }
  };
  
  return (
    <View style={styles.mainContainer}>
   <View style={{
    alignItems: 'flex-end'
   }}>
   <Pressable  style={{
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 28,
            width: 56,
            height: 56,
            margin: 4,
            backgroundColor:  'black',
          }}onPress={() => setModalVisible(true)}>
      <CartIcon/>
    </Pressable>
    </View> 
{isModalVisible && <CartScreen isModalVisible setModalVisible={setModalVisible}/>}
    <Text style={{
        margin: 5,
        fontWeight: 700
    }}>Sizes:</Text>
    <View style ={styles.btnContainer}>
      {sizes.map((size) => (
        <Pressable
          key={size}
          mode="contained"
          style={{
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 28,
            width: 56,
            height: 56,
            margin: 4,
            backgroundColor: selectedSizes.includes(size) ? 'black' : '#ddd',
          }}
          onPress={() => handlePress(size)}
        >
          <Text style={{
            fontWeight: 600,
            color: selectedSizes.includes(size) ? 'white' : 'black',
          }}>{size}</Text>
        </Pressable>
      ))}
      </View>
      <View>
        <Text style={{
            margin: 5
        }}>{products.length} Products(s) found</Text>
      </View>
      <View style={styles.productList}>
        <FlatList
          data={products}
          renderItem={(itemData) => {
            return (
             <ProductCard product={itemData.item}/>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
    mainContainer: {
  paddingHorizontal: 20,
  paddingVertical: 30,
  backgroundColor: '#fff',
  flex: 1,
    },
    btnContainer: {
        flexDirection: 'row',
       
    },
    productList: {

    },

    cartBtn: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: 'black',
      width: 40,
      height: 40,
      borderRadius: 25,
    }
})
