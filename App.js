import React from 'react';
import {StyleSheet,Text,View,Image,TextInput}from 'react-native';
import {createAppContainer} from 'reaCt-navigation';
import {createBottomTabNavigator} from 'reaCt-navigation-tabs';
import ReadScreen from './screens/ReadStoryScreen';
import WriteScreen from './screens/WriteStoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
    <TextInput
          style={styles.inputBox}
          onChangeName={name => {
            this.setState({ name: name });
          }}
          value={this.state.name}

        />
         <Text style={styles.text1}>Enter The Word</Text>

  <TouchableOpacity

          style={styles.clickButton}
          onPress={() => {
         if(inputBox.text=''){
alert("The Text Box Is Expty")
         }
         else{
         
         }
          }}>
       <Text style={styles.text2}>Click Here To Listen The Word</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
