import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './main'

const AppNavigator =() => {
    // Como esto es un componente de react hay que retornarlo
    return(
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;