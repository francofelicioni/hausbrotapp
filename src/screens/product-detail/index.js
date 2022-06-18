import React from 'react'
import { View, Text, Button} from 'react-native'
import { styles } from './styles'

const ProductDetail = () => {
    return (
        <View style={styles.container}>
            <Text>Product Detail</Text>
            <Button title='Go to product detail' onPress={()=>navigation.navigate ('ProductDetail')} />
        </View>
    )
}

export default ProductDetail