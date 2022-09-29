import { black } from 'chalk';
import React, { Component } from 'react';
import { View,Text,Image,StatusBar,
        TextInput,ScrollableTabView,StyleSheet,TouchableOpacity,ScrollView,FlatList, Alert
    } from 'react-native';
import { pxToDp } from '../../utils/pxToDp';

import  {DeviceEventEmitter} from 'react-native';

export default class TuiJianQzn extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <View >
                   <Text>主页！！！</Text>
            </View>
        )
    }
}

