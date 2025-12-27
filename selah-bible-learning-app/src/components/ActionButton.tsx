import { View, StyleSheet, Text} from "react-native";

type ActionButtonProps ={
    label: string;
}
export default function ActionButton({label}: ActionButtonProps) {
    return(
      <View> 
        <Text>{label}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    button:{
        padding:16,
        borderRadius:10,
        backgroundColor:'#E6E6E6',
        width:'30%',
        alignItems:'center'
    }
})