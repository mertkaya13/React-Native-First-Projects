import React, {Component ,useState } from 'react';
import {Text, TextInput , View} from 'react-native';

{/*This app translates every word into 3 pizza*/}
export default function Word3Pizza(){
  const [text, setText] = useState('');
  return (
    <View style = {{padding: 20}}>
      <TextInput
        style= {{height: 50}}
        placeholder="Type words to get 3 pizzas for word."
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding:10,fontSize:40}}>
        {text.split(' ').map((word) => word && '🍕🍕🍕').join(' ')}
      </Text>
    </View>
  );
}