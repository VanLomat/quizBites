import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/MasterStyleSheet';


export default function DifficultyScreen({ navigation }) {
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

    //console.log(question);

    return (
        <View style={styles.container}>
            <Text>DIFFICULTY!</Text>
            <StatusBar style="auto" />
            <View>
                <View style={styles.space}>
                    <Button style={styles.dsButton} title="Nibble.. (ez)" onPress={() => navigation.navigate("Game", { difficulty: "easy",})} />
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

