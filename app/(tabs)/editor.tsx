import {ScrollView, StyleSheet, View, Text, Image, Dimensions} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {useState} from  "react"

const width = Dimensions.get("window").width
export default function EditorScreen(){
    return(
        <ScrollView style={style.container}>
            <View style={style.view}>
                <Image source={true ? require("@/assets/images/petr4.png") : require("@/assets/images/petr4.png")} style={style.image}/>
                <Text style={{color: "white"}}>AIIIIII</Text>
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
        marginVertical: 10,
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