import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Counter from './components/Counter';
import Profile from './components/Profile';

export default function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const [name, setName] = useState("");

  const [submittedName, setSubmittedName] = useState("Anonymous");

  const [submittedAge, setSubmittedAge] = useState(0);

  return (
    <View style={styles.container}>

      <Profile 
        nama={submittedName}
        umur={submittedAge}
      />

      <Counter
        value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <Button
        title="PASS VALUE"
        onPress={() => {
          if(name === ""){
            setSubmittedName("Anonymous");
          } else {
            setSubmittedName(name);
          }

          setSubmittedAge(count);
        }}
      />

      <TextInput
        placeholder="Input your name here!"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderWidth:1,
    marginTop:10,
    padding:8,
    width:200,
    textAlign:'center'
  }
});