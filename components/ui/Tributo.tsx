import { Pressable, View, Text, TextInput, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Tributo(){
    return(
        <View style = {style.container}>
            <TextInput placeholder="Nome do tributo" style={style.textInput} multiline={true}/>
            <View style={{flexDirection:"row",gap:5}}>
                <Ionicons name="add-circle" size={30} color="#3fe429" onPress={()=>{alert("Mais")}}style ={style.icon}/>
                <TextInput placeholder="R$ 0,00" style={style.textInput} keyboardType="numeric"/>
                <Ionicons name="remove-circle" size={30} color="#FF3E3E" onPress={()=>{alert("Menos")}}style ={style.icon}/>
                <Ionicons name="trash-outline" size={35} color="#ff0000" onPress={()=>{alert("Deletar")}}
                style ={[style.icon,{
                    position:"absolute", 
                    marginLeft:224,
                    marginTop:-15,
                    borderRadius:20,
                    padding:2}]}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        padding:10,
        marginTop:10,
        backgroundColor:"#3f7e42",
        borderRadius:90,
        alignItems:"center",
    },
    icon:{
        backgroundColor:"white",
        alignSelf:"flex-start",
        borderRadius:40,
    },
    textInput:{
        color: "black",
        fontSize:16,
        fontWeight: "400",
        backgroundColor:"white",
        alignSelf:"center",
        paddingHorizontal:10,
        borderRadius:20,
        minWidth:"42%",
        padding:2,
    },
})