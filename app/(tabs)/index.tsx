import {View, Text, StyleSheet, Dimensions, SafeAreaView} from "react-native"
import History from "@/components/ui/History"
import Card from "@/components/ui/Card"
export default function HomeScreen(){
  return(
      <View style={style.container}>
        <Text style={style.text}>Investors</Text>
        <History/>
        <View>
          <Card />
        </View>
      </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    top:30,
    backgroundColor:"#333333"
  },
  text:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20
  }
})