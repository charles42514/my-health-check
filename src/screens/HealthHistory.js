import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

const HealthHistory = () => {
  // Sample data for past health entries
  const healthData = [
    { id: '1', date: '2024-10-01', weight: '70 kg', height: '175 cm', bpm: '75', systolic: '120', diastolic: '80' },
    { id: '2', date: '2024-10-08', weight: '69 kg', height: '175 cm', bpm: '72', systolic: '118', diastolic: '78' },
    { id: '3', date: '2024-10-15', weight: '68 kg', height: '175 cm', bpm: '70', systolic: '115', diastolic: '75' },
    // Add more entries as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.statText}>Weight: {item.weight}</Text>
      <Text style={styles.statText}>Height: {item.height}</Text>
      <Text style={styles.statText}>BPM: {item.bpm}</Text>
      <Text style={styles.statText}>Blood Pressure: {item.systolic}/{item.diastolic} mmHg</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health History</Text>
      
      {/* Graph placeholder */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphText}>Graph of Health Trends (Placeholder)</Text>
        {/* You can integrate a graph library here to show trends */}
      </View>

      {/* List of past health entries */}
      <FlatList
        data={healthData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default HealthHistory;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F0F4F8', // Light background for better readability
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  graphContainer: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  graphText: {
    fontSize: 16,
    color: '#888',
  },
  entryContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statText: {
    fontSize: 16,
    marginVertical: 5,
  },
});
