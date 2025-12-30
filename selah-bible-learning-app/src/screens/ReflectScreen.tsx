import {View, Text, StyleSheet, TextInput} from 'react-native'
import { useEffect, useState } from 'react';
import { saveReflection } from '../utils/reflectionStorage';
import { getReflectionbyDate } from '../utils/reflectionStorage';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/card';
import ActionButton from '../components/ActionButton';
import { RootStackParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Reflect'>;

export default function ReflectScreen ({navigation} : Props){
    const [text, setText] = useState("");
    const [saved, setSaved] = useState(false);

    const today = new Date().toISOString().split("T")[0];

    const handleSave = async () => {
        if (!text.trim()) return;

        await saveReflection({
            date: today,
            text
        })

        setSaved(true)
    }

    useEffect(() => {
  const loadReflection = async () => {
    const existing = await getReflectionbyDate(today);
    if (existing) {
      setText(existing.text);
    }
  };

  loadReflection();
}, []);


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Reflect</Text>
            <Text style={styles.subtitle}>
        Take a moment to respond to today's Scripture.
      </Text>

      <Card>
        <View style={styles.promptRow}>
            <Ionicons
            name="chatbubble-ellipses-outline"
            size={18}
            color={colors.primary}
            />
            <Text style={styles.promptText}>
            What stood out to you today?
          </Text>
        </View>
      </Card>

      <Card>
        <TextInput
          style={styles.input}
          placeholder="Write freely…"
          placeholderTextColor={colors.textSecondary}
          multiline
          value={text}
          onChangeText={setText}
        />
      </Card>

       <View style={styles.actions}>
      <ActionButton
        label="Save Reflection"
        iconName="heart-outline"
        onPress={handleSave}
      />

      {saved && (
        <Text style={styles.savedText}>
            Reflection saved quietly.
        </Text>
        )}

       

      <ActionButton
        label="Reflection History"
        iconName="create-outline"
        onPress={() => navigation.navigate("ReflectionHistory")}
      />
      </View>

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
    },
    savedText:{
        marginTop:8,
        fontSize:12,
        fontFamily:typography.regular,
        color:colors.textSecondary,
        textAlign:"center"
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
})