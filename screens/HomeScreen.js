import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import styles from '../styles/MasterStyleSheet';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <StatusBar style="auto" />
            <View>
                <View style={styles.space}>
                    <Button style={styles.dsButton} title="Start!" onPress={() => navigation.navigate("Difficulty")} />
                </View>
                <View style={styles.space}>
                    <Button style={styles.dsButton} title="Highscores" onPress={() => navigation.navigate("Game", { difficulty: "Medium", })} />
                </View>
                <View style={styles.space}>
                    <Button style={styles.dsButton} title="Quiz Others!" onPress={() => navigation.navigate("Quiz Others!")} />
                </View>
            </View>
        </View>

    );
}

