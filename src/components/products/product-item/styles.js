import { StyleSheet } from 'react-native';
import {colors} from '../../../constants/themes/index';

export const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        padding:10,
        marginHorizontal:25,
        marginVertical:10,
        borderRadius:10,
        backgroundColor: colors.primary,
        height:80,
    },
    title:  {
        fontFamily: 'Urbanist-Bold',
        fontSize:18,
    },
    item: {
        flex:1,
        justifyContent:'space-around'
    },
    detailsContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    detailText: {   
        fontFamily:'Urbanist-Regular',
        fontSize:14,
    }
});
