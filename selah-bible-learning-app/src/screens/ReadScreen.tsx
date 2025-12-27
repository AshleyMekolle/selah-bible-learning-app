import {View, Text, StyleSheet, Pressable} from 'react-native'

export default function ReadScreen (){
    return(
        <View style={styles.container}>
            <Text style={styles.reference}>Genesis 1:1-5</Text>
            <View style={styles.scriptureContainer}>
              <Text style={styles.verse}>In the beginning God created the heaven and the earth.</Text>
              <Text style={styles.verse}> And the earth was without form, and void; and darkness was upon the face of the deep...</Text>
            </View>

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
    },
    reference:{
        fontSize: 18,
        fontWeight:'600',
        marginBottom: 16
    },
    scriptureContainer:{
        flex: 1,
        padding:16,
        borderRadius:12,
        marginBottom:16,
        backgroundColor:'#F7F7F7'
    },
    verse:{
        fontSize:16,
        lineHeight:24,
        marginBottom:12,
    },
    progressText:{
        fontSize:14,
        color:'#777',
        marginBottom:12
    },
    completeButton:{
        padding:16,
        borderRadius:12,
        backgroundColor:'#DDD',
        alignItems:'center'
    },
    completeButtonText:{
        padding:16,
        fontWeight:'600',
        backgroundColor:'#999',
    }
})