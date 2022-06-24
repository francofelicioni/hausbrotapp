import React from "react";
import { View, FlatList } from 'react-native'
import { styles } from "./styles";
import { orders } from "../../constants/data";
import OrderItem from "../../components/orders/oder-item/index";

const Orders = () => {
    const items = orders;

    const onSelectedOrder= (item) => {
        console.log(item);
    }

    const renderItem = ({ item }) => <OrderItem item={item} onSelected={onSelectedOrder} />

    return (
        <View style={styles.container}>
            <View style={styles.orderList}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Orders;