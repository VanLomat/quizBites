import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
//import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/MasterStyleSheet';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';




export default function RegisterScreen({ navigation }) {
   // const [text, onChangeText] = React.useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    //const [number, onChangeNumber] = React.useState('');

    //const auth = getAuth(app);
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
                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential)=> {
                        const user = userCredential.user;
                        setDoc(doc(db, "users", user.uid), {
                            Name: name,
                            Email: email,
                            Password: password,
                        });
                    })
                .then(()=>Alert.alert("User registration success!"));
                navigation.navigate("Login");
                
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
