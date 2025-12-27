import { Pressable,StyleSheet, Text} from "react-native";

type ActionButtonProps ={
    label: string;
    onPress?: () => void;
}
export default function ActionButton({label, onPress}: ActionButtonProps) {
    return(
      <Pressable
        style ={({ pressed }) => [
            styles.button,
            pressed && styles.pressed
        ]}
        onPress={onPress}
        >
        <Text>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        padding:16,
        borderRadius:10,
        backgroundColor:'#E6E6E6',
        width:'30%',
        alignItems:'center'
    },
    pressed:{
        opacity:0.7
    }
})