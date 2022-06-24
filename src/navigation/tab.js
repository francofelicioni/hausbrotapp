import React from'react';
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import MainNavigator from './main';
import CartNavigator from './cart';
import { styles } from './styles/tab';
import OrdersNavigator from './orders';
import { colors } from '../constants/themes';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () =>{        
    return (
        <BottomTabs.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.black,
                tabBarInactiveTintColor: colors.text,
            }}
        >
            <BottomTabs.Screen 
                name="ShopTab" 
                component={MainNavigator}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({focused}) => (
                        <Ionicons name={ focused ? 'home' : 'home-outline'} size={20} color={focused ? colors.secondary: colors.primary }></Ionicons>
                    )
                }}
            />
            <BottomTabs.Screen 
                name="CartTab" 
                component={CartNavigator}
                options={{tabBarLabel: 'Cart',
                        tabBarIcon: ({focused}) => (
                        <Ionicons name={ focused ? 'cart' : 'cart-outline'} size={20} color={focused ? colors.secondary : colors.primary}></Ionicons>
                )}}
            />
            <BottomTabs.Screen 
                name="OrdersTab" 
                component={OrdersNavigator}
                options={{tabBarLabel: 'Orders',
                        tabBarIcon: ({focused}) => (
                        <Ionicons name={ focused ? 'file-tray-full' : 'file-tray-full-outline'} size={20} color={focused ? colors.secondary : colors.primary}></Ionicons>
                )}}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator;