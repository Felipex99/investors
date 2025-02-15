import {ScrollView, StyleSheet, View, Text, Image, Dimensions, Pressable} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {useState} from  "react"
import { Ionicons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"

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
                    <Image source={true ? require("@/assets/images/petr4.png") : require("@/assets/images/petr4.png")} style={style.image}/>
                    <Ionicons name="image-outline" size={35} color="white" style={{end:1}}/>
                </Pressable>

                <LinearGradient
                 colors={["#30BE4A","#13541F"]} style={{padding:5,borderRadius:8}}>
                    <View style={style.card}>
                        <Text style={{color: "white"}}>AIIIIII</Text>,
                        <Text style={{color: "white"}}>AIIIIII</Text>
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
        paddingVertical:10
    },
})