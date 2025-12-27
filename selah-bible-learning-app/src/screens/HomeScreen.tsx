import { View, Text, StyleSheet } from "react-native"

export default function HomeScreen() {
  return(
    <View style={styles.container}>
        <Text style={styles.greeting}>Good Morning!</Text>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>
                Today's Reading
            </Text>
            <Text style={styles.cardText}>Start today's bible reading and keep your streak alive!</Text>
        </View>
        <View style={styles.actions}>
          <View style={styles.actionItem}>
            <Text>Read</Text>
          </View>
          <View style={styles.actionItem}>
            <Text>Study</Text>
          </View>
          <View style={styles.actionItem}>
            <Text>Reflect</Text>
          </View>
        </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    greeting:{
        fontSize:24,
        fontWeight:'600',
        marginBottom:20
    },
    card:{
        padding:16,
        borderRadius:20,
        backgroundColor:'#F2F2F2',
        marginBottom:24
    },
    cardTitle:{
        fontSize:18,
        fontWeight:'600',
        marginBottom:8
    },
    cardText:{
        fontSize:14,
        color:'#555'   
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    actionItem:{
        padding:16,
        borderRadius:10,
        backgroundColor:'#E6E6E6',
        width:'30%',
        alignItems:'center'
    }
  }

  )