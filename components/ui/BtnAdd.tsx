import {LinearGradient} from "expo-linear-gradient"
import { Text, StyleSheet,Dimensions, Pressable} from "react-native"
import {Ionicons} from "@expo/vector-icons"
const width = Dimensions.get("screen").width

export default function BtnAdd(){
    return(
        <LinearGradient
            colors={["#C1FFA4","#04B118"]}
            style = {style.btn}
        >
            <Ionicons name = "add-outline" color={"black"} size={width/5}/>
        </LinearGradient>
    )
}
const style = StyleSheet.create({
    btn:{
        width: width/5,
        height: width/5,
        backgroundColor:"#D9D9D9",
        borderRadius: width/4,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        top:20
    }
})