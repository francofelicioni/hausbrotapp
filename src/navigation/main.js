import React from 'react';
// import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail } from '../screens/index'
import { isAndroid, isIOS} from '../constants/utils/index';
import { colors } from '../constants/themes/index';


const Stack = createNativeStackNavigator()

const MainNavigator = (route) => {
    return (
        // A los stack de navegacion se los suele llamar arbol de navegacion, son una pila de vistas que tenemos las cuales asociamos a un flujo determinado
        <Stack.Navigator 
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? colors.primary : colors.secondary,
                },
                headerTintColor: isAndroid ? colors.white : colors.black,
                headerTitleStyle: {
                    fontFamily: 'Urbanist-Bold',
                }
            }}
        >
            <Stack.Screen 
                name='Categories'
                component={Categories}
            />
            <Stack.Screen 
                name='Products'
                component={Products} 
                options={({ route }) => ({
                    title: route.params.name,
                })}    
            />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default MainNavigator;

// Con el initialRouteName='Categories' le indicamos cual es la ruta principal que queremos que muestre