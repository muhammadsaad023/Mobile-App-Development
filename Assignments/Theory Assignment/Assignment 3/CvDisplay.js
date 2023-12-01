import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const CvDisplay = () => {
  const [cvData, setCvData] = useState({});

  useEffect(() => {
    
    const fetchCvData = async () => {
      try {
        
        const storedCvData = await AsyncStorage.getItem('cvFormData');
        if (storedCvData) {
          
          setCvData(JSON.parse(storedCvData));
        }
      } catch (error) {
        console.error('Error fetching CV data from local storage:', error);
      }
    };

    fetchCvData();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CV Display Screen</Text>
      <View style={styles.cvDataContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.data}>{cvData.name}</Text>

        <Text style={styles.label}>Job Title:</Text>
        <Text style={styles.data}>{cvData.jobTitle}</Text>

        <Text style={styles.label}>Education:</Text>
        <Text style={styles.data}>{cvData.education}</Text>

        <Text style={styles.label}>Experience:</Text>
        <Text style={styles.data}>{cvData.experience}</Text>

        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.data}>{cvData.skills}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cvDataContainer: {
    width: '80%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  data: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CvDisplay;
