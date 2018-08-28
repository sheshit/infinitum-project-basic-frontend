import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput ,View, Alert,Button,Platform,ActivityIndicator} from 'react-native';
export default class LotsOfStyles extends Component {

  constructor(props){
  super(props);

  this.state={
    name:"",
    passcode:"",
    isLoading: true,
  };

  //this.onPressRegisterButton.bind(this);
  }

  onPressRegisterButton() {
    let pass = this.state.passcode;
    let username = this.state.name;
    var data = {
    "username": username,
    "password": pass,

  }

  console.log(JSON.stringify(data));

promise :  fetch("http://localhost:3000/addname", {
   method: "POST",
   headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
   body:  JSON.stringify(data)
}).then(Alert.alert("Registered")).catch(Alert.alert("Not registerd")
)
}

  onPressLoginButton(){

  }


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.head}>Register</Text>
        <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(name)=>this.setState({name})}
        value={this.state.name}
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(passcode)=>this.setState({passcode})}
        value={this.state.passcode}
        />
        <Button style={styles.buttonContainer} variant="contained" color="#808080"
    title="Register!!"
    onPress={this.onPressRegisterButton.bind(this)}
  />

    <Button style={styles.buttonContainer}  color="#808080"
     title="LOGIN"
     onPress={this.onPressLoginButton}
     />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    margin: 20,
    backgroundColor:'#fff',
    flex:1,
    justifyContent:'center',
  },
  head:{
    ...Platform.select({
      android: {
        textAlign :'center',
        fontWeight:'bold',
        fontSize:25,
        fontFamily:'Roboto',
        marginBottom:25,
      },
      ios:{
        fontFamily:'Arial'
      }
    })
  },
  input:{
    padding:20,
    marginBottom:20,
  },
  buttonContainer:{
    marginTop:20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
