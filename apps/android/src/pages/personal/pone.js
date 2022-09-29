import React, { Component }  from 'react';
import { View, Text, Image ,StatusBar,ImageBackground, StyleSheet,TouchableOpacity,TextInput,Button} from 'react-native';
import {inject,observer} from "mobx-react";
import RootStore from '../../mobx/index';

class Pone extends Component {
  constructor(props) {
    super(props);
  }
    render() {     
      return (
        <View >
            <Text>个人中心</Text>
        </View>
      );
    }
  }
export default Pone;