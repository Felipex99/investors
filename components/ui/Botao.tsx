import {StyleSheet, Pressable, Text} from "react-native"

type Props = {
    text?:string,
    color?:string,
    onPress?: ()=>void
}

export default function Botao({text, color, onPress}:Props){
    return(
        <Pressable style={[style.container, color ? {backgroundColor:color} : {backgroundColor:"green"}]} onPress={onPress}>
            <Text style={style.text}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container:{
        marginTop:15,
        backgroundColor:"green",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:25
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    }
})