
import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
    },
    cartList: {
        flex: 1
    },
    footer: {
        padding:10,
        borderTopColor: colors.primary,
        borderTopWidth: 1
    },
    buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Urbanist-Bold',
    },
    totalContainer: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalTitle: {
        fontSize: 14,
        fontFamily: 'Urbanist-Regular',
    },
    total: {
        fontSize: 15,
        fontFamily: 'Urbanist-Bold',
    },
})