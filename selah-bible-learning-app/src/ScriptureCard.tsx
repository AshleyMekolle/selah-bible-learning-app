import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ReactNode } from "react";
import { colors } from "./color";

type ScriptureCardProps = {
    reference: string,
    children: ReactNode
}

export default function ScriptureCard ({reference, children}: ScriptureCardProps){
  return(
    <View style={styles.container}>
        <Text style={styles.reference}>{reference}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            {children}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        borderRadius:16,
        backgroundColor:colors.surface,
    },
    reference:{
        fontSize: 16,
        fontWeight:'600',
        marginBottom:12,
        color:colors.textPrimary
    }
})