import React, { Component, useState } from "react";
import { Button, Text, View ,Image, TextInput } from "react-native";

export class Human extends Component{
  state = {isLaughing: false};

  render(props){
    return(
      <View>
        <Text>
          I am {this.props.name}, and I am {this.state.isLaughing ? "laughing :D" : "sad :("}!
        </Text>
        <Image
        source={require('./pp.png')}
        style={{width: 200, height: 200}}
        />
        <Button
          onPress={() => {
            if(this.state.isLaughing == false)
              this.setState({isLaughing: true});
            else
            this.setState({isLaughing: false});
          }}
          title={this.state.isLaughing ? "Make him sad" : "Tickle Tİckle"}
        >
        </Button>
      </View>
    );
  }
}
  export default class Cafe extends Component{
    render(){
      return(
        <>
          <Human name="Lincoln" />
          <Human name="Churchill" />
        </>
      );
    }
  }