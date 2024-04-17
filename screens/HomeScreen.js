import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from 'react';
import styles from '../styles/MasterStyleSheet';



export default function HomeScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    //const [number, onChangeNumber] = React.useState('');
    return (
        <View style={styles.container}>
          <Text>QUIZ BITES!</Text>
              <StatusBar style="auto" />
            <View>
                <Text>Username/email</Text>
                <TextInput style={styles.tInput} onChangeText={onChangeText} value={text} placeholder="test" />
                <Text>Password</Text>
                <TextInput style={styles.tInput} onChangeText={onChangeText} value={text} placeholder="test" />
                <Button title="Bite!" onPress={() => navigation.navigate("Diff")} />

                <Button title="Register" onPress={() => navigation.navigate("Register")} />
              </View>
        </View>
      
    );
}
