import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const HealthDataInput = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bpm, setBpm] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');

  const handleSubmit = () => {
    if (!weight || !height || !bpm || !systolic || !diastolic) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Here you would typically send the data to your backend or store it in a state management solution
    console.log("Health Data Submitted:", {
      weight,
      height,
      bpm,
      systolic,
      diastolic,
    });

    // Clear the fields after submission (optional)
    setWeight('');
    setHeight('');
    setBpm('');
    setSystolic('');
    setDiastolic('');
    Alert.alert('Success', 'Health data submitted successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Input Health Data</Text>

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="BPM (Beats Per Minute)"
        keyboardType="numeric"
        value={bpm}
        onChangeText={setBpm}
      />
      <View style={styles.bloodPressureContainer}>
        <TextInput
          style={styles.bloodPressureInput}
          placeholder="Systolic (mmHg)"
          keyboardType="numeric"
          value={systolic}
          onChangeText={setSystolic}
        />
        <TextInput
          style={styles.bloodPressureInput}
          placeholder="Diastolic (mmHg)"
          keyboardType="numeric"
          value={diastolic}
          onChangeText={setDiastolic}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HealthDataInput;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F0F4F8', // Light background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff', // White background for input
  },
  bloodPressureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  bloodPressureInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5, // Space between systolic and diastolic inputs
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
