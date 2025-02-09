import {View, Text, StyleSheet, Image, Dimensions, Pressable} from "react-native"
import {useState} from "react"
import {LinearGradient} from "expo-linear-gradient"
import * as ImagePicker from "expo-image-picker"
const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

type Props = {
    src?:string,
    dataCompra?: string,
    dataVenda?: string,
    dias?:number,
    valorCompra?: number,
    valorVenda?: number,
    cotas?: number,
    cotaValor?: number,
    cotaValorVenda?: number,
    porcentagem?: number,
    resultado?: number,
}

export default function Card({src, dataCompra, dataVenda, dias,valorCompra, valorVenda, cotas, cotaValor, cotaValorVenda, porcentagem, resultado}: Props){
    const [imgSelect, setImgSelect] = useState<string | undefined>(undefined)
    const imgPicker = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:["images"],
            quality:1,
            allowsEditing:true
        })
        if(!result.canceled){
            setImgSelect(result.assets[0].uri)
        }
    }
    dataCompra = "10/01/2025"
    dataVenda = "13/01/2025"
    dias = 3
    valorCompra = 100
    valorVenda =110
    cotas = 36
    cotaValor = 3,
    cotaValorVenda = 3.2
    let cotaValorDiferenca = cotaValorVenda-cotaValor
    resultado = valorVenda-valorCompra
    // porcentagem = (((valorVenda/valorCompra)-1)*100).toFixed(2)
    const porcentage = (((valorVenda/valorCompra)-1)*100).toFixed(2)
    return(
        <View style={style.container}>
            <Pressable onLongPress={imgPicker}>
                <Image source={!imgSelect?require("@/assets/images/petr4.png"):{uri:imgSelect}} style={style.image}/>
            </Pressable>
            {/* INFO DO CARD */}
            <LinearGradient colors={(resultado>0)?["#30BE4A","#13541F"]:["#BE3030","#f01717"]} style={{padding:5,borderRadius:8}}>
                
                <View style={[style.card, {
                    backgroundColor: (resultado>0) ? "#A8C2A0":"#C2A0A0",
                    borderColor: (resultado>0) ? "#13541F" : "#BE3030"}]}>

                {/* DATA */}
                <View style={style.linha}>
                    <Text style={style.text}>{dataCompra}</Text>
                    <Text style = {style.text}>{dias} dias</Text>
                    <Text style={style.text}>{dataVenda}</Text>
                </View>
                {/* COMPRA VENDA */}
                <View style={style.linha}>
                    <Text style={[style.text,{fontSize:20}]}>compra</Text>
                    <Text style={[style.text,{fontSize:20}]}>venda</Text>
                </View>
                {/* TOTAL INVESTIDO */}
                <View style={style.linha}>
                    <Text style={[style.text,{fontSize:18, fontWeight:"500"}]}>R${valorCompra}</Text>
                    <Text style={[style.text,{fontSize:18, fontWeight:"500"}]}>R${valorVenda}</Text>
                </View>
                {/* QTN ACOES */}
                <View style={style.linha}>
                    <Text style={style.text}>{cotas} ações</Text>
                    <Text style={style.text}>{cotas} ações</Text>
                </View>
                {/* VALOR CADA ACAO */}
                <View style={style.linha}>
                    <Text style={style.text}>R$ {cotaValor.toFixed(2)}</Text>
                    <Text style = {style.text}>{cotaValorDiferenca>0 ? 
                    `+ R$ ${cotaValorDiferenca.toPrecision(2)}`:
                    `- R$ ${cotaValorDiferenca.toPrecision(2)}`}</Text>
                    <Text style={style.text}>R$ {cotaValorVenda.toFixed(2)}</Text>
                </View>
                {/* LUCRO */}
                <View style={[style.linha,{justifyContent:"center"}]}>
                    <Text style = {[style.text,{fontSize:18, fontWeight:"bold"}]}>{(valorVenda-valorCompra>0)?"LUCRO":"PREJUÍZO"}</Text>
                </View>
                {/* PORCENTAGEM */}
                <View style={[style.linha,{justifyContent:"center"}]}>
                    <Text style = {[style.text,{fontSize:18, fontWeight:"bold", color: (resultado>0)?"#176b17":"#a81111"}]}>
                        {Number(porcentage)>0?`+ ${porcentage}%`:`${porcentage}%`}
                        </Text>
                </View>
                <LinearGradient colors={(resultado>0)?["#29bb44","#07200c"]:["#BE3030","#f01717"]} 
                start={{x:0,y:1}}
                end={{x:2,y:2}}
                style={{ 
                    justifyContent: "center",
                    backgroundColor: (resultado>0) ? "#095B0C" : "#e41818",
                    borderRadius:10,
                    minWidth:70,
                    paddingHorizontal:10,
                    alignSelf:"center",
                    elevation:8
                }}>
                    <Text style={[style.text, {color: "#fff", alignSelf:"center",fontSize:20}]}>
                        {resultado>0? 
                        `R$ ${resultado.toFixed(2)}`:
                        `-R$ ${(resultado*-1).toFixed(2)}`}</Text>
                </LinearGradient>
                </View>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#ff00000",
        justifyContent:"center",
        alignItems:"center",
        gap:12
    },
    card:{
        backgroundColor:"#A8C2A0",
        minHeight: height/4,
        minWidth: height/2.6,
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:10
    },
    image:{
        height: height/14,
        width: height/14,
        borderRadius:8,
    },
    linha:{
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    text:{
        color:"black",
        fontWeight:"bold",
        fontSize:15
    }
})