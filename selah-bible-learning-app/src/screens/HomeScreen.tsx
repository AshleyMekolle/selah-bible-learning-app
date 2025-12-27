import { View, Text, StyleSheet } from "react-native"
import Card from "../components/card";
import ActionButton from "../components/ActionButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  return(
    <View style={styles.container}>
        <Text style={styles.greeting}>Good Morning!</Text>

        <Card>
            <Text style={styles.cardTitle}>
                Today's Reading
            </Text>
            <Text style={styles.cardText}>Start today's bible reading and keep your streak alive!</Text>
        </Card>
        <View style={styles.actions}>
            <ActionButton label="Read" onPress={() => navigation.navigate('Progress')}/>
            <ActionButton label="Study" onPress={() => navigation.navigate('Progress')}/>
            <ActionButton label="Reflect" onPress={() => navigation.navigate('Profile')}/>
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
  }

  )