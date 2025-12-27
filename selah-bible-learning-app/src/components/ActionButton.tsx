import { Pressable,StyleSheet, Text} from "react-native";
import { colors } from "../theme/colors";

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
        backgroundColor:colors.primary,
        opacity:0.5,
        width:'30%',
        alignItems:'center'
    },
    pressed:{
        opacity:0.7
    }
})