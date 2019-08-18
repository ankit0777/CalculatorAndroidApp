/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';
export default class App extends React.Component {

constructor(){
  super()
this.state={
  resultText : "",
  calText : ""
}
this.operations = ['D','+','-','/','*']
  }

  calculateResult(){
    const text= this.state.resultText
    this.setState({
      calText : eval(text)
    })
  }

  validate(){
    const text= this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '/':
      case '*':
        return false
    }
    return true
  }

  buttonPressed(text)
  {
    if(text == '='){
      return this.validate() && this.calculateResult()
    }

    this.setState({
      resultText: this.state.resultText + text
    })
    
  }

  operate(operation){
    switch(operation){
      case 'D':
        let text = this.state.resultText.split('')
        text.pop()
        text.join('')
        this.setState({
          resultText : text.join('')
        })
        break
      case '+':
      case '-':
      case '/':
      case '*':
      const lastChar = this.state.resultText.split('').pop()
      if(this.operations.indexOf(lastChar) > 0) return

          if(this.state.text== "") return
          this.setState({
            resultText: this.state.resultText + operation
          })
    }

  }

  render() {

    let rows =[]
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i=0;i <4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={[styles.btnText,styles.white]}>{nums[i][j]}</Text>
      </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    
    let ops = []
    for(let i=0;i <5;i++){
      ops.push(<TouchableOpacity style={styles.btn} onPress={() => this.operate(this.operations[i])}>
        <Text style={[styles.btnText,styles.white]}>{this.operations[i]}</Text>
    </TouchableOpacity>)
    }



    return (
      <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
      </View>
      <View style={styles.calculations}>
        <Text style={styles.calText}>{this.state.calText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
            {rows}
        </View>
        <View style={styles.operations}>
          {ops}

        </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  row:{
    flexDirection: 'row',
    flex:1,
    justifyContent:'space-around',
    alignItems: 'center'
  },
  resultText:{
    fontSize:35,
    color:'black'
  },
  white: {
    color :'white'
  },
  black: {
    color :'black'
  },
  calText:{
    fontSize:25,
    color:'black'
  },
  btnText :{
    fontSize:30
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  results: {
    flex: 2,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculations: {
    flex: 1,
    backgroundColor: '#f9f1f1',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  buttons: {
    flex:7,
    flexDirection: 'row'
  },
  numbers: {
    flex:3,
    backgroundColor: 'black'
  },
  operations:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'stretch',
    backgroundColor: 'grey'
  }

  
}); 