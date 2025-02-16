import {Text, Pressable, StyleSheet, View} from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function AddValor(){
    return(
        <Pressable style={style.container}>
            <Ionicons name="add-circle" color="#01c901" size={35} />
            <Text style={style.text}>Adicionar tributos</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#085312",
        borderRadius:40,
        marginTop:20,
        alignSelf:"center",
        paddingHorizontal:10,
        paddingVertical:5
    },
    text:{
        fontSize:16,
        fontWeight:"500",
        color:"#ffffff"
    }
})