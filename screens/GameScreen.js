import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import styles from '../styles/MasterStyleSheet';


export default function GameScreen({ route }) {
    const { difficulty } = route.params;
    return (
        <View style={styles.container}>
            <Text>QUIZ BITES!</Text>
            <StatusBar style="auto" />
            <View>
                <Text>Difficulty: {difficulty}</Text>
                <Text>Bite 1</Text>
                <Text>Question here</Text>
                {/*<Button title="Start!" onPress={() => navigation.navigate("Home")} />*/}
            </View>
        </View>

    );
}

