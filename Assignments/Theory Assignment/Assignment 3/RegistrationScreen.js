import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    
    const existingUsers = JSON.parse(await AsyncStorage.getItem('users')) || [];

    
    if (existingUsers.some(user => user.username === username)) {
      alert('Username is already taken. Please choose another.');
      return;
    }

    
    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];

    
    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

    
    navigation.navigate('Login');
  };

  const handleLoginNavigation = () => {
   
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../assets/backk.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registration Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegistration} />

        
        <TouchableOpacity onPress={handleLoginNavigation}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 40,
    alignContent:'center',
    alignItems:'center',
    marginLefta:10
    
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default RegistrationScreen;
