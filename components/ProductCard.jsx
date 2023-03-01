import { Image, View } from "react-native"


export const ProductCard = ({product}) => {
    const source = `../assets/products/${product.src_1}`
  return (
    <View>
        <Image source={{ 
                uri: `https://res.cloudinary.com/rahulb4/image/upload/v1663293416${product.src_1}`,
              }
        }></Image>
    </View>
  )
}
