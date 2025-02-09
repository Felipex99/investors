import {ScrollView, View, Text, StyleSheet, Dimensions, SafeAreaView} from "react-native"
import History from "@/components/ui/History"
import Card from "@/components/ui/Card"
import BtnAdd from "@/components/ui/BtnAdd"
export default function HomeScreen(){
  return(
      <ScrollView style={style.container}>
        <Text style={style.text}>Investors</Text>
        <History/>
        <View style={style.operations}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
        <BtnAdd/>
      </ScrollView>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#333333",
    paddingBottom:0
  },
  text:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20
  },
  operations:{
    gap:20
  }
})