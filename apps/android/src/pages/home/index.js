import { black } from 'chalk';
import React, { Component } from 'react';
import { View,Text,Image,StatusBar,
        TextInput,ScrollableTabView,StyleSheet,TouchableOpacity,ScrollView,FlatList, Alert
    } from 'react-native';
import { pxToDp } from '../../utils/pxToDp';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import  {DeviceEventEmitter} from 'react-native';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import {CodeComponent} from './code.js'
import { padding } from '../../utils/StyleUtils';
export default class TuiJianQzn extends Component {
    constructor(props) {
        super(props);
    }
    state={
        TopBarList:['热门','JS','C++','Java','Python','Android','趣谈','IOS']
    }
    render() {
        const TopBarDom=this.state.TopBarList.map(item=>{
            return <TouchableOpacity><View><Text style={HomeStyles.tag}>{item}</Text></View></TouchableOpacity>
        })
        return(
            <View style={HomeStyles.bg}>
                <View style={{display:'flex',alignItems:'center',marginTop:20}}><Text style={HomeStyles.title}>Code Show</Text>
                </View>
                <View style={HomeStyles.tagBox}>
               <ScrollView horizontal={true}>
                    {TopBarDom}
                </ScrollView>
                </View>
                <View style={HomeStyles.mainContent}>
                    <CodeComponent/>
                </View>
                <View style={HomeStyles.userInfo}>
                    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}><Image style={HomeStyles.avatar} source={require('../../static/img/portrait-1.png')}/>
                    <Text style={{color:'white',fontSize:20,marginLeft:20}}>Vue的源码太巧妙了！</Text></View>
                    <Text numberOfLines={3} style={{color:'white',padding:20,fontSize:18}}>关于Vue的源码，一直是为大家津津乐道的,今天我们就来一起研究一下关于Vue源码中响应式的部分...</Text>
                </View>
                <View style={HomeStyles.userTool}>
                   <Image style={HomeStyles.avatar} source={require('../../static/img/love (1).png')}/>
                </View>
            </View>
        )
    }
}
const HomeStyles = StyleSheet.create({   
    bg:{
    flex:1,
    height:"100%",
    backgroundColor:'#1c151c'
// 24273b
    },
    title:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
    },
    mainContent:{
       flex:1,
    },
    tagBox:{
        marginTop:10,
        paddingLeft:25,
        paddingRight:25,
        padding:5,
        backgroundColor:'#151728',
        height:45,
    },  
    tag:{
        color:'white',
        fontSize:18,
        marginRight:20
    },
    userInfo:{
        height:180,
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50,
        marginLeft:25
    },
    userTool:{
        height:60,
    }
});
