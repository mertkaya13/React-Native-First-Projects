import React, {Component, useState} from 'react';
import {Button, Text, View, Image, TextInput, ScrollView} from 'react-native';

export class Human extends Component {
  state = {
    isLaughing: false,
    name: this.props.name,
  };
  
  handleName = text => {
    this.setState({name: text});
  };

  render(props) {
    return (
      <View>
        <Text>
          I am {this.state.name}, and I am{' '}
          {this.state.isLaughing ? 'laughing :D' : 'sad :('}!
        </Text>
        <TextInput
          placeholder="Change My Name???"
          onChangeText={this.handleName }
        />
        <Image source={require('./pp.png')} style={{width: 200, height: 200}} />
        <Button
          onPress={() => {
            if (this.state.isLaughing == false)
              this.setState({isLaughing: true});
            else this.setState({isLaughing: false});
          }}
          title={this.state.isLaughing ? 'Make him sad' : 'Tickle Tİckle'}
        />
      </View>
    );
  }
}
export default class Cafe extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <Human name="Lincoln" />
          <Human name="Churchill" />
          <Human name="Ahmet" />
          <Human name="Mehmet" />
          <Human name="Ali" />
          <Human name="Veli" />
          <Human name="Deli" />
          <Human name="Mert" />
          <Human name="Burcu" />
        </ScrollView>
      </>
    );
  }
}
