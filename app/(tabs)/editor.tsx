import {ScrollView, StyleSheet, View, Text, Image, Dimensions, Pressable, TextInput} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {useState} from  "react"
import { Ionicons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import DateTime from "@/components/ui/DateTime"
import AddValor from "@/components/ui/AdValor"




const width = Dimensions.get("window").width
export default function EditorScreen(){

    const [imgSelect, setImgSelect] = useState<string | undefined>(undefined)
        const imgPicker = async()=>{
            try{
                console.warn("aperteiii")
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes:["images"],
                    quality:1,
                    allowsEditing:true
                })
                console.log(result)
                if(!result.canceled){
                    setImgSelect(result.assets[0].uri)
                }
            }catch(e){
                console.error(e)
            }
            }
    return(
        <ScrollView style={style.container}>
            <View style={style.view}>
                <Pressable onPress={imgPicker} style={{flexDirection:"row",  alignItems:"flex-end",paddingBottom:10}}>
                    <Image source={!imgSelect ? require("@/assets/images/petr4.png") : {uri:imgSelect}} style={style.image}/>
                    <Ionicons name="image-outline" size={35} color="white" style={{end:1}}/>
                </Pressable>
                <LinearGradient
                    colors={["#30BE4A","#13541F"]} 
                    style={{padding:5,borderRadius:8, minWidth:width*0.9, gap:8}}>
                    {/* PRIMEIRA LINHA DATA DE COMPRA E VENDA */}
                    <View style = {style.dateRow}>
                        <DateTime text="compra"/>
                        <DateTime text="venda"/>
                    </View>
                    
                    {/* 2° LINHA VALOR DE COMPRA E VENDA */}  
                    
                    <View style={style.card}>
                        {/* 2° LINHA VALOR DE COMPRA E VENDA */}  
                        <View style={style.valoresRow}>
                            <View style={style.valores} >
                                <Text style={style.text}>Total da compra</Text>
                                <TextInput style={style.textInput} placeholder="R$ 0,00" keyboardType="numeric"/>
                            </View>
                            <View style={style.valores} >
                                <Text style={style.text}>Total da venda</Text>
                                <TextInput style={style.textInput} placeholder="R$ 0,00" keyboardType="numeric"/>
                            </View>
                        </View>
                        {/* 3° LINHA QUANTIDADE DE ACOES */}  
                        <View style={style.valoresRow}>
                            <View style={style.valores} >
                                <Text style={style.text}>N° ações compradas</Text>
                                <TextInput style={[style.textInput, {alignSelf: "center", minWidth:"92%"}]} placeholder="0" keyboardType="numeric"/>
                            </View>
                            {/* <View style={style.valores} >
                                <Text style={style.text}>N° ações vendidas</Text>
                                <TextInput style={style.textInput} placeholder="0" keyboardType="numeric"/>
                            </View> */}
                        </View>
                        {/* 4° PRECO DE CADA ACAO */}  
                        <View style={style.valoresRow}>
                            <View style={style.valores} >
                                <Text style={style.text}>Valor de cada {"\n"}ação comprada</Text>
                                <TextInput style={style.textInput} placeholder="R$ 0,00" keyboardType="numeric"/>
                            </View>
                            <View style={style.valores} >
                                <Text style={style.text}>Valor de cada {"\n"}ação vendida</Text>
                                <TextInput style={style.textInput} placeholder="R$ 0,00" keyboardType="numeric"/>
                            </View>
                        </View>

                        <AddValor/>

                    </View>
                </LinearGradient>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#333333",
        paddingBottom:0,
    },
    view:{
        alignItems:"center",
    },
    image:{
        width:width/3.9,
        height:width/3.9,
        marginVertical: 0,
        borderRadius:8
    },
    card:{
        backgroundColor:"#A8C2A0",
        minHeight: width/4,
        minWidth: width/2.6,
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:5,
        paddingBottom:30,
        gap:5
    },
    dateRow:{
        flexDirection:"row",
        gap:30
    },
    text:{
        color: "black",
        fontSize:16,
        fontWeight: "400"
    },
    textInput:{
        color: "black",
        fontSize:16,
        fontWeight: "400",
        backgroundColor:"white",
        alignSelf:"flex-start",
        paddingHorizontal:10,
        borderRadius:20,
        minWidth:"42%",
        padding:2,
    },
    valores:{
        flexDirection:"column",
        gap:5
    },
    valoresRow:{
        flexDirection:"row",
        gap:30
    },
})