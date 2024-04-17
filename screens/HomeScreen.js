import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../styles/MasterStyleSheet';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

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


export default function HomeScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    //const [number, onChangeNumber] = React.useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null); // Track user authentication state
    const [isLogin, setIsLogin] = useState(true);

    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = (auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, [auth]);

    const login = async () => {
        try {
            //sign in
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully!');
            navigation.navigate("Diff");
        }
        catch (e) {
            console.error('Authentication error:', e.message);
        }
    }

    return (
        <View style={styles.container}>
          <Text>QUIZ BITES!</Text>
              <StatusBar style="auto" />
            <View>
                <Text>Username/email</Text>
                <TextInput style={styles.tInput} onChangeText={setEmail} value={email} placeholder="test" />
                <Text>Password</Text>
                <TextInput style={styles.tInput} onChangeText={setPassword} value={password} placeholder="test" />
                <Button title="Bite!" onPress={login} />

                <Button title="Register" onPress={() => navigation.navigate("Register")} />
              </View>
        </View>
      
    );
}
