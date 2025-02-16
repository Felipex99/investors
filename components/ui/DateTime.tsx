import {View, TextInput, StyleSheet, Pressable, Text} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import RNDateTimePicker from "@react-native-community/datetimepicker"
import { useState } from "react"
import DateTimePicker from "@react-native-community/datetimepicker"
type Props = {
    text?: string,
    dataCompra?: number,
    dataVenda?: number,
    horaCompra?: number,
    horaVenda?: number,
}
export default function DateTime({dataCompra, dataVenda, horaCompra, horaVenda, text}:Props){
    const [dateShow,setDateShow] = useState<boolean>(false)
    const [timeShow,setTimeShow] = useState<boolean>(false)
    const [date,setDate] = useState<Date>(new Date())
    const [time,setTime] = useState<Date>(new Date())

    
    const onChangeDate = (event:any, selectedDate?:Date) =>{
        const currentDate = selectedDate  || date
        setDateShow(false)
        setDate(currentDate)
    }

    const onChangeTime = (event:any, selectedDate?:Date) =>{
        const currentDate = selectedDate  || date
        setTimeShow(false)
        setTime(currentDate)
    }

    const formatDate = (date:Date)=>{
        return date.toLocaleDateString("pt-BR")
    }

    const formatTime = (date:Date)=>{
        return date.toLocaleTimeString("pt-BR",{hour:"2-digit", minute:"2-digit"})
    }
    
    return(
        <View style={style.container}>
            <Pressable onPress={()=>setDateShow(!dateShow)} style ={style.data}>
                <Text style={{fontWeight:"500",fontSize:15,paddingVertical:0,borderWidth:0}}>Data da {text}</Text>
                <Ionicons name="calendar-clear-outline" color="black" size={25} />
            </Pressable>
            <Pressable onPress={()=>setTimeShow(!timeShow)} style ={style.data}>
            <Text style={{fontWeight:"500",fontSize:15,paddingVertical:0,borderWidth:0}}>Hora da {text}</Text>
                <Ionicons name="time-outline" color="black" size={25} />
            </Pressable>    
            {dateShow && <DateTimePicker
                mode="date"
                value={date}
                onChange={onChangeDate}
            />}
            {timeShow && <DateTimePicker
                mode="time"
                value={date}
                is24Hour={true}
                onChange={onChangeTime}
            />}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"column",
        gap:10,
        marginTop:10
    },
    data:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderRadius:18,
        backgroundColor:"#A8C2A0",
        alignSelf:"flex-start",
        paddingHorizontal:10,
        gap:5 
    },
    hora:{

    },
    font:{

    }
})