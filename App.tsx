import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.itemContainer}>
      <Text style = {styles.itemText}>Coffee</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


//Styles object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  itemContainer:{
    borderBottomWidth:1,
    borderBottomColor:"#1a759f",
    paddingHorizontal:8,
    paddingVertical:16
  },
  itemText:{
      fontSize: 32, 
      fontWeight:"400"
    }

});
