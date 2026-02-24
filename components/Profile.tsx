import { View, Text } from 'react-native';

export default function Profile({nama, umur}) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text>Halo nama ku, {nama}!</Text>
      <Text>Umur ku, {umur} tahun</Text>
    </View>
  );
}