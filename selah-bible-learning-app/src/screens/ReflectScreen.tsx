import {View, Text, StyleSheet} from 'react-native'
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/card';
import ActionButton from '../components/ActionButton';

export default function ReflectScreen (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Reflect</Text>
            <Text style={styles.subtitle}>
        Take a moment to respond to today’s Scripture.
      </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:colors.background
    },
    title:{
        fontSize:24,
        fontFamily:typography.semibold,
        color:colors.textPrimary,
        marginBottom:4,
    },
    subtitle:{
        fontSize:14,
        fontFamily:typography.regular,
        color:colors.textSecondary,
        marginBottom:20, 
    },
    promptRow:{
        flexDirection:"row",
        alignItems:"center",
        gap:8
    },
    promptText:{
        fontSize:14,
        fontFamily:typography.medium,
        color:colors.textPrimary,
    },
    input:{
        fontSize:14,
        fontFamily:typography.regular,
        color:colors.textPrimary,
       minHeight:120,
       textAlignVertical:"top"
    }
})