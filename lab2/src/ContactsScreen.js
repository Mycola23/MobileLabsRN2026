import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';
import { CONTACTS } from './testData';

const ContactsScreen = () => (
  <SectionList
    sections={CONTACTS}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.item}><Text style={styles.name}>{item.name}</Text></View>
    )}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={styles.sectionHeader}>{title}</Text>
    )}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
  />
);

const styles = StyleSheet.create({
  item: { padding: 20, backgroundColor: 'white' },
  name: { fontSize: 16 },
  sectionHeader: { backgroundColor: '#f4f4f4', padding: 10, fontWeight: 'bold', color: '#666' },
  separator: { height: 1, backgroundColor: '#eee' }
});

export default ContactsScreen;