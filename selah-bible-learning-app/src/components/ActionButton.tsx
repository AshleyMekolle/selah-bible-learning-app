import { Pressable,StyleSheet, Text, View} from "react-native";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "../theme/typography";

type ActionButtonProps ={
    label: string;
    onPress?: () => void;
    iconName?: keyof typeof Ionicons.glyphMap;
    disabled?:boolean;
}
export default function ActionButton({label, onPress, iconName, disabled=false}: ActionButtonProps) {
    return(
      <Pressable
        style ={({ pressed }) => [
            styles.button,
            pressed && !disabled && styles.pressed,
            disabled && styles.disabled
        ]}
        onPress={onPress}
        disabled={disabled}
        >
            <View style={styles.content}>
            {iconName &&(
                <Ionicons
                name={iconName}
                size={18}
                color="#FFF"
                />
            )}
        <Text style={styles.label}>{label}</Text>
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:16,
        paddingVertical:14,
        borderRadius:14,
        backgroundColor:colors.primary,
        minWidth:90
    },
    pressed:{
        opacity:0.9
    },
    disabled:{
       opacity:0.5
    },
    content:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:8
    },
    label:{
        fontSize:14,
        color:"#FFF",
        fontFamily:typography.medium
    }
})