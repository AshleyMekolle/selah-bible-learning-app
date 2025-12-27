import {View, Text, StyleSheet, Pressable} from 'react-native'
import { colors } from '../theme/colors';
import ScriptureCard from '../components/ScriptureCard';

export default function ReadScreen (){
    return(
        <View style={styles.container}>
            <ScriptureCard reference="Genesis 1:1–5">
              <Text style={styles.verse}>In the beginning God created the heaven and the earth.</Text>
              <Text style={styles.verse}> And the earth was without form, and void; and darkness was upon the face of the deep...</Text>
              <Text style={styles.verse}> And God said, Let there be light: and there was light</Text>
            </ScriptureCard>

            <Text style={styles.progressText}> Reading 1 of 5</Text>

            <Pressable style={styles.completeButton} disabled>
            <Text style={styles.completeButtonText}>Complete Reading</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:colors.background
    },
    verse:{
        fontSize:16,
        lineHeight:24,
        marginBottom:12,
        color:colors.textPrimary
    },
    progressText:{
        fontSize:14,
        color:colors.textSecondary,
        marginBottom:12
    },
    completeButton:{
        padding:16,
        borderRadius:14,
        backgroundColor:colors.primary,
        alignItems:'center',
        opacity:0.5
    },
    completeButtonText:{
        padding:16,
        fontWeight:'600',
        color:'#FFF',
    }
})