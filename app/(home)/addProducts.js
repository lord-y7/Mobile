import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Platform, ScrollView } from 'react-native'; // Import ScrollView
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
const addProducts = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shipping, setShipping] = useState('');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    try {
      const response = await axios.get('/api/v1/category/get-category');
      if (response.data?.success) {
        setCategories(response.data?.category);
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong in getting category',
      });
    }
  };

  const handleCreate = async () => {
    try {
      const productData = new FormData();
      productData.append('name', name);
      productData.append('description', description);
      productData.append('price', price);
      productData.append('quantity', quantity);
      productData.append('photo', photo);
      productData.append('category', category);

      const response = await axios.post(
        '/api/v1/product/create-product',
        productData
      );

      if (response.data?.success) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: response.data?.message,
        });
      } else {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Product Created Successfully',
        });
        navigation.navigate('/dashboard/admin/products');
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
      });
    }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        setPhoto(response.uri);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Product</Text>
        <View /> 
      </View>
      <View style={styles.formContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          {categories.map((c) => (
            <Picker.Item key={c._id} label={c.name} value={c._id} />
          ))}
        </Picker>
        <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoButton}>
          <Text>{photo ? 'Change Photo' : 'Upload Photo'}</Text>
        </TouchableOpacity>
        {photo && <Image source={{ uri: photo }} style={styles.image} />}
        <TextInput
          value={name}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          value={description}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          style={styles.input}
          multiline={true}
        />
        <TextInput
          value={price}
          placeholder="Price"
          onChangeText={(text) => setPrice(text)}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          value={quantity}
          placeholder="Quantity"
          onChangeText={(text) => setQuantity(text)}
          style={styles.input}
          keyboardType="numeric"
        />
        <Picker
          selectedValue={shipping}
          onValueChange={(itemValue) => setShipping(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="No" value="0" />
          <Picker.Item label="Yes" value="1" />
        </Picker>
        <TouchableOpacity onPress={handleCreate} style={styles.createButton}>
          <Text>Create Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    ...Platform.select({
      ios: {
        paddingTop: 40,
      },
      android: {
        paddingTop: 0,
      },
    }),
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 12,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 12,
  },
  photoButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
  createButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default addProducts;
