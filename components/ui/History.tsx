import {StyleSheet, Text, View} from "react-native"



export default function History(){
    return(
        <View style={style.container}>
            <Text style={style.text}>Trades: <Text>5{}</Text></Text>      
            <Text style={style.text}>Wins: <Text style={{color:"#04e704"}}>3{}</Text></Text>
            <Text style={style.text}>Losses: <Text style={{color:"#ff3d3d"}}>2{}</Text></Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignSelf:"center",
        gap:10
    },
    text:{
        color:"#fff",
        fontSize:18
    }
})