import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState('');

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  }

  const addGoal = () => {
    console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
          style={styles.input} onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD" style={{padding: 20}} 
          onPress={addGoal} />
      </View>

      <View>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderBottomWidth: 1
  }
});
