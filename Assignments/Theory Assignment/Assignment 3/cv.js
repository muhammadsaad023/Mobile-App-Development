import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CvFormScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    education: '',
    experience: '',
    skills: '',
  });

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
     
      const storedData = await AsyncStorage.getItem('cvFormData');
      if (storedData) {
        
        setFormData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error fetching data from local storage:', error);
    }
  };

  const handleSave = async () => {
    try {
      
      await AsyncStorage.setItem('cvFormData', JSON.stringify(formData));
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  };

  const handlePreview = () => {
    
    navigation.navigate('CvDisplay');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CV Form Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        value={formData.jobTitle}
        onChangeText={(text) => setFormData({ ...formData, jobTitle: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Education"
        value={formData.education}
        onChangeText={(text) => setFormData({ ...formData, education: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Experience"
        value={formData.experience}
        onChangeText={(text) => setFormData({ ...formData, experience: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Skills"
        value={formData.skills}
        onChangeText={(text) => setFormData({ ...formData, skills: text })}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} style={styles.button} />
        <View style={styles.space} />
        <Button title="Preview" onPress={handlePreview} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    width: '45%', 
  },
  space: {
    width: '10%', 
  },
});

export default CvFormScreen;
