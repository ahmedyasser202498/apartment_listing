import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function DetailsScreen({ route }) {
  const { id } = route.params;
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/apartments/${id}`)
      .then(response => setApartment(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!apartment) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>{apartment.name}</Text>
      <Text>Address: {apartment.address}</Text>
      <Text>Price: ${apartment.price}</Text>
    </View>
  );
}
