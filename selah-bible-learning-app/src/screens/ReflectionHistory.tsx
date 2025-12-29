import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getAllReflections, Reflection } from "../utils/reflectionStorage";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";
import Card from "../components/card";

export default function ReflectionHistoryScreen() {
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAllReflections();
      setReflections(data);
    };

    load();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Reflections</Text>
      <Text style={styles.subtitle}>
        Moments you paused to listen and respond.
      </Text>

      {reflections.length === 0 && (
        <View style={styles.emptyState}>
          <Ionicons
            name="book-outline"
            size={24}
            color={colors.textSecondary}
          />
          <Text style={styles.emptyText}>
            Your reflections will appear here.
          </Text>
        </View>
      )}

      {reflections.map((item) => (
        <Card key={item.date}>
          <Text style={styles.date}>{item.date}</Text>
          <Text
            style={styles.preview}
            numberOfLines={3}
          >
            {item.text}
          </Text>
        </Card>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: colors.background
    },
    title:{
        fontSize: 24,
        fontFamily: typography.semibold,
        marginBottom: 4,
        color: colors.textPrimary
    },
    subtitle:{
        fontSize: 14,
        fontFamily: typography.regular,
        marginBottom: 20,
        color: colors.textSecondary
    },
    emptyState:{
        alignItems:"center",
        marginTop:40
    },
    emptyText:{
        marginTop:8,
        fontSize:13,
        fontFamily: typography.regular,
        color: colors.textSecondary
    },
    date:{
        fontSize: 12,
        fontFamily: typography.medium,
        marginBottom: 6,
        color: colors.primary
    },
    preview:{
        fontSize: 14,
        fontFamily: typography.regular,
        color: colors.primary,
        lineHeight: 20
    }
})