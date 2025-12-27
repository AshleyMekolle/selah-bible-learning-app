import { View, StyleSheet} from "react-native";
import { ReactNode } from "react";

type CardProps = {
    children:ReactNode
}

export default function Card({children}: CardProps){
    return(
     <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card:{
        padding: 16,
        borderRadius:12,
        marginBottom: 24,
        backgroundColor:'#F2F2F2'
    }
});
