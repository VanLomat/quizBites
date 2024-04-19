import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';
//import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/MasterStyleSheet';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';




export default function QuizOthersScreen({ navigation }) {
    // const [text, onChangeText] = React.useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const [question, setQuestion] = useState("");
    const [hint, setHint] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");

    //const [number, onChangeNumber] = React.useState('');

    //const auth = getAuth(app);
    //useEffect(() => {
    //    const unsubscribe = (auth, (user) => {
    //        setUser(user);
    //    });
    //    return () => unsubscribe();
    //}, [auth]);

    //const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {
    //    db().ref('/users/${response.user.uid}').set({ name });

    //};

    //const register = async () => {
    //    if (email && password) {
    //        try {
    //            await createUserWithEmailAndPassword(auth, email, password)
    //                .then((userCredential) => {
    //                    const user = userCredential.user;
    //                    setDoc(doc(db, "users", user.uid), {
    //                        Name: name,
    //                        Email: email,
    //                        Password: password,
    //                    });
    //                })
    //                .then(() => Alert.alert("User registration success!"));
    //            navigation.navigate("Login");

    //        } catch (e) {
    //            Alert.alert("Oops, please check your form and try again!");
    //            console.log("" + e);
    //        }
    //    } else {
    //        Alert.alert("Please enter you details, and try again!");
    //    }
    //}
    const uploadQuestiontoDb = async () => {
        try {

            if (question && hint) {
                if (correctAnswer && answer2 && answer3 && answer4) {
                    addDoc(collection(db, "qb_QuizItems"), {
                            Question: question,
                            Hint: hint,
                            Answer1: correctAnswer,
                            Answer2: answer2,
                            Answer3: answer3,
                            Answer4: answer4,
                    });
                    Alert.alert("Question successfully uploaded");
                }
                else {
                    Alert.alert("Add some choices?")
                }
            }
            else {
                Alert.alert("Add some questions! and maybe a hint as well?")
            }
            
        }
        catch (e) {
            Alert.alert("Uploading error", e.message);
            console.log("", e.message);
        }

    }
    return (
        <View style={styles.container}>
            <Text>QUIZ BITES!</Text>
            <StatusBar style="auto" />
            <View>
                <Text>Registration</Text>
                <Text>Question</Text>
                <TextInput style={styles.tInput} onChangeText={setQuestion} value={question} placeholder="Ask a Question!" />
                <Text>Hint</Text>
                <TextInput style={styles.tInput} onChangeText={setHint} value={hint} placeholder="Help them a bit!" />
                <Text>Answer 1 (Correct)</Text>
                <TextInput style={styles.tInput} onChangeText={setCorrectAnswer} value={correctAnswer} placeholder="Place correct answer here!" />
                <Text>Answer 2</Text>
                <TextInput style={styles.tInput} onChangeText={setAnswer2} value={answer2} placeholder="Confuse em!" />
                <Text>Answer 3</Text>
                <TextInput style={styles.tInput} onChangeText={setAnswer3} value={answer3} placeholder="Make em think!!" />
                <Text>Answer 4</Text>
                <TextInput style={styles.tInput} onChangeText={setAnswer4} value={answer4} placeholder="Troll em!!!" />

                <Button title="Feed the Question!" onPress={uploadQuestiontoDb} />
            </View>
        </View>

    );
}
