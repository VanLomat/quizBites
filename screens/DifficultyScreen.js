import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import styles from '../styles/MasterStyleSheet';


export default function DifficultyScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>DIFFICULTY!</Text>
            <StatusBar style="auto" />
            <View>
                <View style={styles.space}>
                    <Button style={styles.dsButton} title="Nibble.. (ez)" onPress={() => navigation.navigate("Game", {difficulty:"easy",})} />
                </View>
                <View style={styles.space}>
                    <Button style={styles.dsButton} title="Bite! (Mid)" onPress={() => navigation.navigate("Game", { difficulty: "Medium", })} />
                </View> 
                <View style={styles.space}>
                    <Button style={styles.dsButton} title="CRUNCH!! (HARD)" onPress={() => navigation.navigate("Game", { difficulty: "Hard", })} />
                </View>
                </View>
        </View>

    );
}

