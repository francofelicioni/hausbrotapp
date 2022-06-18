import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'

const Categories = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Categories</Text>
            <Button title='Explore Products' onPress={()=>navigation.navigate('Products')}/>
        </View>
    )
}

export default Categories;