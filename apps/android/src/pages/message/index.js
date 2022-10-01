import React, { Component }  from 'react';
import { View, Text, Image ,StatusBar,ImageBackground, StyleSheet,TouchableOpacity,TextInput,Button,ScrollView} from 'react-native';
import {inject,observer} from "mobx-react";
import RootStore from '../../mobx/index';
import {messageList} from '../../mock/message'
class Message extends Component {
  constructor(props) {
    super(props);
  }
state={
    messageList:[],
    currentList:[]
}
getCurrentList=(type)=>{
   const currentList=this.state.messageList.filter(item=>{
        return item.type==type
    })
    this.setState({currentList})
}
getMessageType=(item)=>{
    const typeMap= new Map([
        ['like','赞'],
        ['comment','评论']
    ])
    if(typeMap.has(item.type)){
        const content=item.content==''?'':`:${item.content}`
        return `${typeMap.get(item.type)}了您的代码《${item.code}》${content}`
    }
    if(item.type=='follower'){
        return `关注了您`
    }
    return `${item.content}`
}
componentDidMount(){
    this.setState({messageList})
    this.setState({currentList:messageList})
}
    render() {   
        const messageListDom=this.state.currentList.map(item=>{
            return (  <View style={MesStyles.MesItem}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <Image 
                style={{width:40,height:40,borderRadius:40,marginRight:10}}
                resizeMode="stretch"
                source={require('../../static/img/portrait-1.png')}>
                </Image>      
            <Text style={MesStyles.MesItemName}>{item.user}:</Text>
            </View>
            <Text numberOfLines={2} style={MesStyles.MesItemContent}>{this.getMessageType(item)}</Text>
                <Text style={{color:'white',position:'absolute',right:30,top:30}}>{item.time}</Text>
            </View>  )
        })
        return (
        <View style={MesStyles.bg}>
            <View style={MesStyles.topBg}>
                <Text style={MesStyles.topBgText}>消息中心</Text>
            </View>
        <ScrollView>  
            <View style={MesStyles.topTool}>
            <TouchableOpacity onPress={this.getCurrentList.bind(this,'comment')}>
                <View style={MesStyles.topToolItem}>
                    <Image  
                    style={{width:30,height:30,opacity:0.8}}
                    resizeMode="stretch"
                    source={require('../../static/img/comment-g.png')}>
                    </Image>
                    <Text style={{color:'white',marginTop:10}}>评论</Text>
                </View>
             </TouchableOpacity>
            <TouchableOpacity onPress={this.getCurrentList.bind(this,'like')}>
                <View style={MesStyles.topToolItem}>
                    <Image  
                    style={{width:30,height:30,opacity:0.8}}
                    resizeMode="stretch"
                    source={require('../../static/img/like-5.png')}>
                    </Image>
                    <Text style={{color:'white',marginTop:10}}>点赞</Text>
                </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.getCurrentList.bind(this,'follower')}>
                <View style={MesStyles.topToolItem}>
                    <Image  
                    style={{width:30,height:30,opacity:0.8}}
                    resizeMode="stretch"
                    source={require('../../static/img/follower.png')}>
                    </Image>
                    <Text style={{color:'white',marginTop:10}}>关注</Text>
                </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={this.getCurrentList.bind(this,'message')}>
                <View style={MesStyles.topToolItem}>
                    <Image  
                    style={{width:30,height:30 ,opacity:0.8}}
                    resizeMode="stretch"
                    source={require('../../static/img/message.png')}>
                    </Image>
                    <Text style={{color:'white',marginTop:10}}>消息</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{height:8,backgroundColor:'#151728',marginTop:20}}></View>  
            <Text style={{color:'white',fontSize:16,marginLeft:20,marginTop:10,marginBottom:10}}>消息列表</Text>
           {messageListDom}
        <View style={{height:200}}></View>
        </ScrollView>
</View>
      );
    }
  }
const MesStyles = StyleSheet.create({   
    bg:{
    flex:1,
    height:"100%",
    backgroundColor:'#24273b'
    },
    topBg:{
    height:70,
    backgroundColor:'#151728',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    },
    topBgText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        opacity:0.9
    },
    topTool:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    MesItem:{
        position:'relative',
        padding:20,
        borderTopWidth:1,
        borderColor:'#151728',
    },
    MesItemName:{
        color:'#1b86f8',
        fontSize:18
    },
    MesItemContent:{
        color:'white',
        fontSize:18,
        marginTop:20
    }
});
export default Message;