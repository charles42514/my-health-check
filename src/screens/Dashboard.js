import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  // Sample data for health statistics
  const healthStats = [
    { key: 'Weight: 70 kg' },
    { key: 'Height: 175 cm' },
    { key: 'BPM: 75' },
    { key: 'Blood Pressure: 120/80 mmHg' },
  ];

  const renderStat = ({ item }) => (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{item.key}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Latest Health Statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.statLabel}>Latest Health Statistics</Text>
        <FlatList
          data={healthStats}
          renderItem={renderStat}
          keyExtractor={(item) => item.key}
        />
      </View>

      {/* Links to Health Data History and Other Features */}
      <TouchableOpacity 
        style={styles.linkButton} 
        onPress={() => navigation.navigate('Health History')}
      >
        <Text style={styles.buttonText}>View Health Data History</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Light background color for better contrast
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333', // Darker text for better readability
  },
  statsContainer: {
    marginBottom: 40,
    backgroundColor: '#fff', // White background for the stats section
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000', // Adding shadow for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  statLabel: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4CAF50', // Highlighting label color
  },
  stat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  statValue: {
    fontSize: 18,
    color: '#555', // Medium gray text
  },
  linkButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center', // Center the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
