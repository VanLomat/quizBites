import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../styles/MasterStyleSheet';
import { auth, db } from '../firebaseConfig';
//import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword} from "firebase/auth";




export default function HomeScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    //const [number, onChangeNumber] = React.useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null); // Track user authentication state
    const [isLogin, setIsLogin] = useState(true);

    //const auth = getAuth(app);
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
            //add name here for next screen flow
            navigation.navigate("Home");
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
