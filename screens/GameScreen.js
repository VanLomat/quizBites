import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import styles from '../styles/MasterStyleSheet';
import FlipCard from 'react-native-flip-card';

export default function GameScreen({ route }) {
    const { difficulty } = route.params;
    return (
        <View style={styles.container}>
            <Text>QUIZ BITES!</Text>
            <StatusBar style="auto" />
            <View style={styles.container}>
             <Text>Timer here</Text>
                <FlipCard
                    style={styles.cardStyleContainer}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                >
               {/* front */}
                    <View style={styles.cardFaceFront}>
                    <Text>Difficulty: {difficulty}</Text>
                    <Text>Bite 1</Text>
                        <Text>Question here</Text>
                        <View style={styles.cardButtonPositioning }>
                            <View style={styles.cardButtonViewContainer}>
                                <View style={styles.cardbuttonSpace}>
                                <Button style={styles.cardButtonStyle} title="Answer 1" onPress={() => navigation.navigate("Home")} />
                                </View> 
                                <View style={styles.cardbuttonSpace}>
                                <Button style={styles.cardButtonStyle} title="Answer 2" onPress={() => navigation.navigate("Home")} />
                                </View>    
                            </View>
                            <View style={styles.cardButtonViewContainer}>
                                <View style={styles.cardbuttonSpace}>    
                                <Button style={styles.cardButtonStyle} title="Answer 3" onPress={() => navigation.navigate("Home")} />
                                </View>
                                <View style={styles.cardbuttonSpace}>
                                    <Button style={styles.cardButtonStyle} title="Answer 4" onPress={() => navigation.navigate("Home")} />
                                    </View>
                                    </View>
                        </View>

                    </View>
                {/*back*/}
                    <View style={styles.cardFaceBack}>
                        <Text>Hint: </Text>
                        <Text>Lorem Ipsum</Text>
                    </View>
                </FlipCard>
            </View>
        </View>

    );
}

