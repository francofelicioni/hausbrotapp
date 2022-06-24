import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orders } from '../screens/index'
import { isAndroid, isIOS} from '../constants/utils/index';
import { colors } from '../constants/themes/index';


const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return (
        // A los stack de navegacion se los suele llamar arbol de navegacion, son una pila de vistas que tenemos las cuales asociamos a un flujo determinado
        <Stack.Navigator 
            initialRouteName='Orders'
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
                name='Orders'
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;
