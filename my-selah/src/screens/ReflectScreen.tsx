import {View, Text, StyleSheet, TextInput, ScrollView, Animated} from 'react-native'
import { useEffect, useState, useRef } from 'react';
import { saveReflection } from '../utils/ReflectionStorage';
import { getReflectionbyDate } from '../utils/ReflectionStorage';
import { colors } from '../theme/color';
import { typography } from '../theme/typography';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import ActionButton from '../components/ActionButton';
import { RootStackParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Reflect'>;

export default function ReflectScreen ({navigation} : Props){
    const [text, setText] = useState("");
    const [saved, setSaved] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const today = new Date().toISOString().split("T")[0];
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    const handleSave = async () => {
        if (!text.trim()) return;

        await saveReflection({
            date: today,
            text
        })

        setSaved(true);
        
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.delay(2000),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => setSaved(false));
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
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Text style={styles.title}>Reflect</Text>
                <Text style={styles.subtitle}>
                    Take a moment to respond to today's Scripture.
                </Text>
            </View>
            <View style={styles.promptCard}>
            <Card>
                <View style={styles.promptIconContainer}>
                    <Ionicons
                        name="bulb"
                        size={24}
                        color={colors.textSecondary}
                    />
                </View>
                <View style={styles.promptContent}>
                    <Text style={styles.promptLabel}>TODAY'S PROMPT</Text>
                    <Text style={styles.promptText}>
                        What stood out to you today?
                    </Text>
                </View>
            </Card>
             </View>

            <View  style={styles.inputCard}>
            <Card>
                <View style={styles.inputHeader}>
                    <Ionicons
                        name="pencil-outline"
                        size={16}
                        color={colors.textSecondary}
                    />
                    <Text style={styles.inputLabel}>Your Thoughts</Text>
                    {text.length > 0 && (
                        <Text style={styles.wordCount}>
                            {wordCount} word{wordCount !== 1 ? 's' : ''}
                        </Text>
                    )}
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Write freely... There's no right or wrong answer. Just share what's on your heart."
                    placeholderTextColor={colors.textSecondary + '80'}
                    multiline
                    value={text}
                    onChangeText={setText}
                />
            </Card>

</View>
            {saved && (
                <Animated.View style={[styles.savedBanner, { opacity: fadeAnim }]}>
                    <Ionicons name="checkmark-circle" size={18} color={colors.primary} />
                    <Text style={styles.savedText}>Reflection saved</Text>
                </Animated.View>
            )}
            <View style={styles.actions}>
                <ActionButton
                    label="Save Reflection"
                    iconName="heart"
                    onPress={handleSave}
                />
                <ActionButton
                    label="View History"
                    iconName="time-outline"
                    onPress={() => navigation.navigate("ReflectionHistory")}
                />
            </View>

            <View style={styles.encouragement}>
                <Text style={styles.encouragementIcon}>
                  <Ionicons 
                  name="heart" size={20} color={colors.primary} />
                </Text>
                <Text style={styles.encouragementText}>
                    Your reflections are a personal record of your spiritual journey.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontFamily: typography.semibold,
        color: colors.textPrimary,
        marginBottom: 4,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 15,
        fontFamily: typography.regular,
        color: colors.textSecondary,
        lineHeight: 22,
    },
    
    promptCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
        marginBottom: 16,
        backgroundColor: colors.accent + '08',
        borderLeftWidth: 3,
        borderLeftColor: colors.accent,
    },
    promptIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.accent + '20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    promptContent: {
        flex: 1,
    },
    promptLabel: {
        fontSize: 11,
        fontFamily: typography.semibold,
        color: colors.textSecondary,
        letterSpacing: 1.2,
        marginBottom: 6,
    },
    promptText: {
        fontSize: 16,
        fontFamily: typography.semibold,
        color: colors.textPrimary,
        lineHeight: 22,
        letterSpacing: -0.2,
    },

    inputCard: {
        marginBottom: 16,
        minHeight: 200,
    },
    inputHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.textSecondary + '20',
    },
    inputLabel: {
        fontSize: 13,
        fontFamily: typography.medium,
        color: colors.textSecondary,
        flex: 1,
    },
    wordCount: {
        fontSize: 12,
        fontFamily: typography.regular,
        color: colors.textSecondary,
    },
    input: {
        fontSize: 15,
        fontFamily: typography.regular,
        color: colors.textPrimary,
        minHeight: 140,
        textAlignVertical: "top",
        lineHeight: 24,
    },

    savedBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: colors.primary + '15',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    savedText: {
        fontSize: 14,
        fontFamily: typography.medium,
        color: colors.primary,
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 24,
    },

    encouragement: {
        backgroundColor: colors.primary + '08',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },
    encouragementIcon: {
        fontSize: 28,
        marginBottom: 8,
    },
    encouragementText: {
        fontSize: 13,
        fontFamily: typography.regular,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 20,
    },
})