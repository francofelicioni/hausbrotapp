import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary
    },
    headerContainer: {},
    header: {
        paddingVertical:5,
        fontSize: 16,
        fontFamily: 'Urbanist-Bold',
    },
    containerDetail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detail: {},
    detailQty: {
        fontSize: 14,
        fontFamily: 'Urbanist-Regular',
    },
    detailPrice: {
        fontSize: 15,
        fontFamily: 'Urbanist-Bold',
    },
})