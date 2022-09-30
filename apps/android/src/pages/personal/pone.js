import React, { Component }  from 'react';
import { View, Text, Image ,StatusBar,ImageBackground, StyleSheet,TouchableOpacity,TextInput,Button,ScrollView} from 'react-native';
import {inject,observer} from "mobx-react";
import RootStore from '../../mobx/index';

class UserHome extends Component {
  constructor(props) {
    super(props);
  }
    render() {     
      return (
        <View >
        <ScrollView>
           <View style={UserStyles.bg}><Image style={UserStyles.bg} source={require('../imgc/userBg.png')}/></View>
             <View style={UserStyles.baseMessageBox}>
                <Image style={UserStyles.avatar}
                source={require('../imgc/avatar.jpg')}
                />
                <View style={UserStyles.userNameBox}><Text style={UserStyles.userName}>撒冷才不是小小蒙</Text></View>
                <View style={UserStyles.toolBox}> 
                    <View style={UserStyles.toolButton}><Text style={UserStyles.toolButtonText}>关 注</Text></View>
                </View>
                <View style={{marginTop:5,marginLeft:20}}><Text style={{fontSize:18,color:'gray'}}>一只躺平的小卷卷</Text></View>
                <View style={UserStyles.MesBox}>
                    <View style={UserStyles.MesBoxItem}><Text style={UserStyles.MesBoxItemText}><Text style={{fontWeight:'bold'}}>100</Text>获赞</Text></View>
                    <View style={UserStyles.MesBoxItem}><Text style={UserStyles.MesBoxItemText}><Text style={{fontWeight:'bold'}}>11</Text> 关注</Text></View>
                    <View style={UserStyles.MesBoxItem}><Text style={UserStyles.MesBoxItemText}><Text style={{fontWeight:'bold'}}>121</Text>粉丝</Text></View>
                </View>
                <View style={UserStyles.MesBox}><Text style={{fontSize:20,color:'#624ac6',fontWeight:'bold'}}>作品</Text></View>
                <View style={{marginTop:5, marginLeft:12, width:40,height:5,backgroundColor:'#624ac6'}}></View>
            </View>

            <View style={OpusStyles.OpusBox}>
                <View style={OpusStyles.ItemBox}>
                     <Text style={OpusStyles.title}>Vue源码这里的处理太妙了！</Text>
                    <View style={{display:"flex",flexDirection:"row"}}
                    >
                    <Text style={OpusStyles.ItemName}>用户名</Text>
                        <Text style={OpusStyles.ItemName}>&nbsp; | &nbsp;</Text>
                    <Text style={OpusStyles.ItemName}>五个月前</Text>
                    </View>
                        <Text numberOfLines={2} style={OpusStyles.mainContent}>关于Vue的源码，一直是为大家津津乐道的,今天我们就来一起研究一下关于Vue源码中响应式的部分...</Text>
                    <View style={OpusStyles.itemTool}>
                        <Image style={OpusStyles.like}source={require('../../static/img/like-3.png')}/>
                    <Text style={{margin:5,color:'gray'}}>120</Text>   
                    <Image style={OpusStyles.comment}source={require('../../static/img/comment.png')}/>
                    <Text style={{margin:5,color:'gray'}}>40</Text>   
                </View>
                    </View>
            </View>
            <View style={{height:30}}></View>
        </ScrollView>
        </View>
      );
    }
  }
const UserStyles = StyleSheet.create({   
    bg:{
    position:'absolute',
    flex:1,
    height:120,
    zIndex:-1
    },
 baseMessageBox:{
position:"relative",
marginTop:40,
padding:20
},
  avatar:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white',
        borderWidth:5,
        backgroundColor:'blue'
    },
    userNameBox:{
        marginLeft:10,
        marginTop:10
    },
    userName:{
        fontSize:22,
    },  
    toolButton:{
        width:65,
        padding:10,
        height:40,
        borderRadius:6,
        borderColor:'#624ac6',
        borderWidth:1,
        backgroundColor:'white',
        textAlign:'center'
    },
    toolButtonText:{
        color:'#624ac6',
        fontSize:18,
        lineHeight:20,
    },
    toolBox:{
    display:'flex',
    position:'absolute',
    top:120,
    right:20
    },
    MesBox:{
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        marginLeft:10
    },
     MesBoxItem:{
        marginRight:10
    },
    MesBoxItemText:{
        fontSize:20
    }
});
const OpusStyles= StyleSheet.create({
    OpusBox:{
    position:'relative',
    marginTop:10
    },
    ItemBox:{
        marginLeft:30,
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:40
    },
    ItemName:{
        position:'relative',
        fontSize:16,
        top:5
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    mainContent:{
        marginTop:5,
        fontSize:18,
        paddingRight:10
    },
    itemTool:{
        position:'relative',
        top:10,
        display:'flex',
        flexDirection:'row'
    },
    like:{
        width:25,
        height:25
    },
    comment:{
        marginLeft:20,
        marginTop:3,
        width:20,
        height:20
    }
})
export default UserHome;