import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail } from '../screens/index'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        // A los stack de navegacion se los suele llamar arbol de navegacion, son una pila de vistas que tenemos las cuales asociamos a un flujo determinado
        <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Products' component={Products} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default MainNavigator;

// Con el initialRouteName='Categories' le indicamos cual es la ruta principal que queremos que muestre