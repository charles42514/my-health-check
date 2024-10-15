import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';

const HealthStatus = () => {
  const [weight, setWeight] = useState('70 kg'); // Placeholder for current weight
  const [height, setHeight] = useState('175 cm'); // Placeholder for current height
  const [bpm, setBpm] = useState('75'); // Placeholder for current BPM
  const [systolic, setSystolic] = useState('120'); // Placeholder for current systolic BP
  const [diastolic, setDiastolic] = useState('80'); // Placeholder for current diastolic BP

  const handleUpdate = () => {
    // Handle logic to save the updated health status
    Alert.alert('Health Status Updated', `Weight: ${weight}, Height: ${height}, BPM: ${bpm}, Blood Pressure: ${systolic}/${diastolic} mmHg`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Current Health Status</Text>

      <View style={styles.statusContainer}>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.value}>{weight}</Text>

        <Text style={styles.label}>Height:</Text>
        <Text style={styles.value}>{height}</Text>

        <Text style={styles.label}>BPM:</Text>
        <Text style={styles.value}>{bpm}</Text>

        <Text style={styles.label}>Blood Pressure:</Text>
        <Text style={styles.value}>{systolic}/{diastolic} mmHg</Text>
      </View>

      {/* Manual Input Fields for Updating Health Status */}
      <Text style={styles.updateTitle}>Update Health Status</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Weight (e.g., 70 kg)"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (e.g., 175 cm)"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="BPM (e.g., 75)"
        value={bpm}
        onChangeText={setBpm}
      />
      <TextInput
        style={styles.input}
        placeholder="Systolic BP (e.g., 120)"
        value={systolic}
        onChangeText={setSystolic}
      />
      <TextInput
        style={styles.input}
        placeholder="Diastolic BP (e.g., 80)"
        value={diastolic}
        onChangeText={setDiastolic}
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Status</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HealthStatus;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allow the ScrollView to grow if content exceeds screen height
    padding: 16,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  statusContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 15,
    color: '#4CAF50', // Color for better visibility
  },
  updateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
