import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {{
        borderBottomWidth:1,
        borderBottomColor:"#1a759f",
        paddingHorizontal:8,
        paddingVertical:16
      }}>
      <Text style = {{fontSize: 32, fontWeight:"400"}}>Coffee</Text>
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
});
