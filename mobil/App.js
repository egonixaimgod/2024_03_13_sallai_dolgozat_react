//2023.03.13. Bodnár Bence II/2/N

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const api = 'http://localhost:8000/orszagok';

const CountryTable = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.nev}</Text>
      <Text style={styles.text}>{item.terulet}</Text>
      <Text style={styles.text}>{item.nepesseg}</Text>
      <Text style={styles.text}>{item.fovaros}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Név</Text>
        <Text style={styles.headerText}>Terület</Text>
        <Text style={styles.headerText}>Népesség</Text>
        <Text style={styles.headerText}>Főváros</Text>
      </View>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <CountryTable />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:1220,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    width:300,
  },
});

export default App;