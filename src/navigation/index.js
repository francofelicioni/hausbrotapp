import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TaNavigator from './tab' 
// Ahora el index utiliza el tab porque contiene a ambos

const AppNavigator =() => {
    // Como esto es un componente de react hay que retornarlo
    return(
        <NavigationContainer>
            <TaNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;