import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/task';

import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
  <View style = {styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style = {styles.mainTitle}>Today's Tasks</Text>
      <View style = {styles.items}>
        {
          taskItems.map((item,index)=>{
            return <TouchableOpacity onPress={()=> completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          })
          }
        
          

      </View>
    </View>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style = {styles.writeTaskWrapper}>
      <TextInput style = {styles.input} placeholder = {'Write a task'} value = {task} onChangeText={text=> setTask(text)} />
      <TouchableOpacity onPress={()=> handleAddTask()}>  
        <View style = {styles.addWrapper}>
        <Icon name="upcircle" size={45} color="black" />

        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingHorizontal:20,
    paddingTop:80,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop:30,
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input: {
    paddingVertical:15,
    width:300,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderWidth:1,
    borderColor:'#C0C0C0',
  },
  addWrapper: {
  
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText: {

  },

});
