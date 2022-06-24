import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        marginVertical:30,
    },
    productDeail:  {
        height:250,
        alignItems: "center",
        justifyContent:"space-around"
    },
    id:  {
        fontSize:20,
        marginVertical:5,
        fontFamily:'Urbanist-Regular',
    },
    title:  {
        fontSize:25,
        marginVertical:5,
        fontFamily:'Urbanist-Bold',
    },
    description:  {
        fontSize:20,
        marginVertical:5,
        fontFamily:'Urbanist-Regular',
        paddingHorizontal: 5,
        textAlign:'center',
    },
    weight:  {
        fontSize:20,
        marginVertical:5,
        fontFamily:'Urbanist-Regular',
    },
    price:  {
        fontSize:20,
        marginVertical:5,
        fontFamily:'Urbanist-Regular',
    }
})