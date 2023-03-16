import { Image, View, StyleSheet, TouchableOpacity } from "react-native"
import { Button, Text } from "react-native-paper"


export const ProductCard = ({product}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: `https://proto-photos.onrender.com/${product.srcID}_1.jpg`}} style={{ width: 160, height: 280}}></Image>
       <View style={styles.cardBody}>
       <Text variant="titleMedium">{product.title}</Text>
       <View style={styles.titleUnderline}></View>
       <Text variant="titleMedium">{product.price}</Text>
       </View>
       <Button style={{
        marginVertical: 20,
    }} mode="contained" 
    buttonColor="#000">
      Add to cart
    </Button>
    <View style={styles.tag}>
      <Text style={{color: '#fff'}}>Free Shipping</Text>
    </View>
    </View>
  )


}

const styles = StyleSheet.create({
  card : {
    backgroundColor: '#fff',
    marginTop: 8,
    width: 190,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
},
cardBody:{
    paddingVertical: 16,
    paddingHorizontal: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
},
cardTitle: {
    fontWeight: 500,
    lineHeight: 1.1,
    textAlign: 'center',
    flexGrow: 1,
    fontSize: 14,
},
btn:{
    padding: 16,
    marginTop: 4,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'black',
    color: '#fff',
},
// .card > .btn:hover{
//         opacity: 0.8;
// }
titleUnderline:{
    width: 24,
    height: 4,
    backgroundColor: 'yellow',
    marginBottom: 4,
},
// .card-price span:nth-child(1){
//     font-weight: 600;
// }
// .card-price span:nth-child(2){
//     font-weight: 700;
//     font-size: 1.4rem;
// }
// .card-price span:nth-child(3){
//     font-weight: 500;
// }
tag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'black',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 10,
}
})


