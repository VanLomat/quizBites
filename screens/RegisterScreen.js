import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
//import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/MasterStyleSheet';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import db from "firebase/database";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyC13SF8oePAmD9Sa9wHvO6PqJ1u2rX_7uE ',
    authDomain: 'quizbites-e86b9.firebaseapp.com ',
    databaseURL: 'https://quizbites-e86b9-default-rtdb.firebaseio.com/',
    projectId: 'quizbites-e86b9',
    storageBucket: 'quizbites-e86b9.appspot.com',
    messagingSenderId: '976509004455',
    appId: '1:976509004455:android:0fd1ebce9e7fc8107b0982',
    measurementId: 'G-NQNYYWK01S',
};

const app = initializeApp(firebaseConfig);

export default function RegisterScreen({ }) {
   // const [text, onChangeText] = React.useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    //const [number, onChangeNumber] = React.useState('');

    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = (auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, [auth]);

    //const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {
    //    db().ref('/users/${response.user.uid}').set({ name });

    //};

    const register = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                Alert.alert("User registration success!");
                
            } catch (e) {
                Alert.alert("Oops, please check your form and try again!");
                console.log("" + e);
            }
        } else {
            Alert.alert("Please enter you details, and try again!");
        }
    } 

    return (
        <View style={styles.container}>
            <Text>QUIZ BITES!</Text>
            <StatusBar style="auto" />
            <View>
                <Text>Registration</Text>
                <Text>Name</Text>
                <TextInput style={styles.tInput} onChangeText={setName} value={name} placeholder="" />
                <Text>Username/email</Text>
                <TextInput style={styles.tInput} onChangeText={setEmail} value={email} placeholder="test" />
                <Text>Password</Text>
                <TextInput style={styles.tInput} onChangeText={setPassword} value={password} placeholder="test" />
                <Button title="Sign up!" onPress={register} />
            </View>
        </View>

    );
}
