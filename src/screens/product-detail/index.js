import React from 'react'
import { View, Text, Button} from 'react-native'
import { styles } from './styles'

const ProductDetailScreen = ({navigation, route}) => {
    const product = route.params.product;
    const { 
        id,
        title,
        description,
        weight,
        price
    } = product;
    return (
        <View style={styles.container}>
           <View style={styles.productDeail}>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.weight}>{weight}</Text>
            <Text style={styles.price}> € {price}</Text>
           </View>
        </View>
    )
}

export default ProductDetailScreen;