import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddFarmer = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [occupation, setOccupation] = useState('');
  const [education, setEducation] = useState('');
  const [income, setIncome] = useState('');
  const [familyMembers, setFamilyMembers] = useState('');
  const [landSize, setLandSize] = useState('');
  const [crops, setCrops] = useState('');

  const handleAddFarmer = () => {
    console.log('Adding farmer:', {
      name,
      age,
      address,
      contact,
      occupation,
      education,
      income,
      familyMembers,
      landSize,
      crops
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Farmer</Text>
        <View />
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={age}
          onChangeText={(text) => setAge(text)}
          placeholder="Age"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Address"
          multiline={true}
          style={[styles.input, styles.addressInput]}
        />
        <TextInput
          value={contact}
          onChangeText={(text) => setContact(text)}
          placeholder="Contact"
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TextInput
          value={occupation}
          onChangeText={(text) => setOccupation(text)}
          placeholder="Occupation"
          style={styles.input}
        />
        <TextInput
          value={education}
          onChangeText={(text) => setEducation(text)}
          placeholder="Education"
          style={styles.input}
        />
        <TextInput
          value={income}
          onChangeText={(text) => setIncome(text)}
          placeholder="Income"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={familyMembers}
          onChangeText={(text) => setFamilyMembers(text)}
          placeholder="Family Members"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={landSize}
          onChangeText={(text) => setLandSize(text)}
          placeholder="Land Size (acres)"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={crops}
          onChangeText={(text) => setCrops(text)}
          placeholder="Crops"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddFarmer} style={styles.addButton}>
          <Text style={styles.buttonText}>Add Farmer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    flexGrow: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  addressInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddFarmer;
