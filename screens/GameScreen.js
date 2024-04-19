import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../styles/MasterStyleSheet';
import FlipCard from 'react-native-flip-card';
import { auth, db } from '../firebaseConfig';
import firestore, { collection, query, where, doc, getDoc } from 'firebase/firestore';
// quiz pseudocode
/**
 * >retrieve values from database
 * > put the question into the question display
 * > put the hint into the hint display (at the back of the card)
 * > Distribute the answers into the buttons
 * > if a button is pressed, go to the isCorrect function
 * > isCorrect then does the following: 
 * > is the title of the button == correctAnswer
 *  if yes = add points, on to the next question
 * if no = no points, stay on the question until it is right.
 * 
 * 
 *
 */


export default function GameScreen({ route }) {
    const { difficulty } = route.params;
    
        //const [loading, setLoading] = useState(true);
        //const [quizItem, setQuizItem] = useState([]);

    //const [question, setQuestion] = useState('');
    //const [hint, setHint] = useState('');
    //const [answer1, setAnswer1] = useState('');
    //const [answer2, setAnswer2] = useState('');
    //const [answer3, setAnswer3] = useState('');
    //const [answer4, setAnswer4] = useState('');


    //const getQuizItems = async () => {
    //    try {
    //        let doc = await firestore
    //            .collection('qb_QuizItems')
    //            .get();

    //        if (!doc.exists) {
    //            Alert.alert("No docs found");
    //        }
    //        else {
    //            let dataObj = doc.data();
    //            setQuestion(dataObj.Question);
    //            setHint(dataObj.Hint);
    //            setAnswer1(dataObj.Answer1);
    //            setAnswer2(dataObj.Answer2);
    //            setAnswer3(dataObj.Answer3);
    //            setAnswer4(dataObj.Answer4);

    //        }
    //    } catch (e) {
    //        Alert.alert("Error retrieving, ", e.message);
    //    }
    //}

    
    //console.log("", question);
    const isCorrect = async(num)=> {

        if (num==1)
            Alert.alert("Correct! Thank you for playing the demo!");
        else 
            Alert.alert("Wrong! Try again");

    }


    //if (loading) {
    //    return <ActivityIndicator />;
    //}

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
                        <Text>What is the name of this App?</Text>
                        <View style={styles.cardButtonPositioning }>
                            <View style={styles.cardButtonViewContainer}>
                                <View style={styles.cardbuttonSpace}>
                                    <Button style={styles.cardButtonStyle} title="Quiz Bites" onPress={()=> isCorrect(1)} />
                                </View> 
                                <View style={styles.cardbuttonSpace}>
                                    <Button style={styles.cardButtonStyle} title="Buiz Qites" onPress={() => isCorrect(2)} />
                                </View>    
                            </View>
                            <View style={styles.cardButtonViewContainer}>
                                <View style={styles.cardbuttonSpace}>    
                                    <Button style={styles.cardButtonStyle} title="Quiz Bees" onPress={() => isCorrect(3)} />
                                </View>
                                <View style={styles.cardbuttonSpace}>
                                    <Button style={styles.cardButtonStyle} title="Quizee" onPress={() => isCorrect(4)} />
                                    </View>
                                    </View>
                        </View>

                    </View>
                {/*back*/}
                    <View style={styles.cardFaceBack}>
                        <Text>Hint: </Text>
                        <Text>A quiz that bites!</Text>
                    </View>
                </FlipCard>
            </View>
        </View>

    );
}

