import React, { Component }  from 'react';
import { View, Text, Image ,StatusBar,ImageBackground, StyleSheet,TouchableOpacity,TextInput,Button,ScrollView} from 'react-native';
import {inject,observer} from "mobx-react";
import RootStore from '../../mobx/index';
import {userInfo,userCodeList} from '../../mock/user'
class UserHome extends Component {
  constructor(props) {
    super(props);
  }
state={
  userInfo:{},
  userCodeList:[]
}
 componentDidMount(){
        this.setState({userInfo});
        this.setState({userCodeList})
}
    render() {   
    const {userName,signature,getLikes,followers,concern,avatar}=this.state.userInfo

    const userCodeListDom=this.state.userCodeList.map(item=>{
            return (
            <View style={OpusStyles.OpusBox}>
                <View style={OpusStyles.ItemBox}>
                     <Text style={OpusStyles.title}>{item.title}</Text>
                    <View style={{display:"flex",flexDirection:"row"}}
                    >
                    <Text style={OpusStyles.ItemName}>{item.user}</Text>
                        <Text style={OpusStyles.ItemName}>&nbsp; | &nbsp;</Text>
                    <Text style={OpusStyles.ItemName}>五个月前</Text>
                    </View>
                        <Text numberOfLines={2} style={OpusStyles.mainContent}>{item.introduce}</Text>
                    <View style={OpusStyles.itemTool}>
                        <Image style={OpusStyles.like}source={require('../../static/img/like-3.png')}/>
                    <Text style={{margin:5,color:'gray'}}>{item.getLikes}</Text>   
                    <Image style={OpusStyles.comment}source={require('../../static/img/comment.png')}/>
                    <Text style={{margin:5,color:'gray'}}>{item.comment}</Text>   
                </View>
                    </View>
            </View>
            )
        })
      return (
        <View style={{backgroundColor:'#24273b'}}>
        <ScrollView>
           <View style={UserStyles.bg}><Image style={UserStyles.bg} source={require('../imgc/user_bg.png')}/></View>
             <View style={UserStyles.baseMessageBox}>
                <Image style={UserStyles.avatar}
                source={require('../imgc/avatar.jpg')}
                />
                <View style={UserStyles.userNameBox}><Text style={UserStyles.userName}>{userName}</Text></View>
                <View style={UserStyles.toolBox}> 
                    <View style={UserStyles.toolButton}><Text style={UserStyles.toolButtonText}>关 注</Text></View>
                </View>
                <View style={{marginTop:5,marginLeft:20}}><Text style={{fontSize:18,color:'gray'}}>{signature}</Text></View>
                <View style={UserStyles.MesBox}>
                    <View style={UserStyles.MesBoxItem}><Text style={UserStyles.MesBoxItemText}><Text style={{fontWeight:'bold'}}>{getLikes}</Text>获赞</Text></View>
                    <View style={UserStyles.MesBoxItem}><Text style={UserStyles.MesBoxItemText}><Text style={{fontWeight:'bold'}}>{concern}</Text> 关注</Text></View>
                    <View style={UserStyles.MesBoxItem}><Text style={UserStyles.MesBoxItemText}><Text style={{fontWeight:'bold'}}>{followers}</Text>粉丝</Text></View>
                </View>
                <View style={UserStyles.MesBox}><Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>作品</Text></View>
                <View style={{marginTop:5, marginLeft:12, width:40,height:5,backgroundColor:'white'}}></View>
            </View>
            {userCodeListDom}
            <View style={{height:200}}></View>
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
        marginTop:10,
    },
    userName:{
        fontSize:22,
        color:'white'
    },  
    toolButton:{
        width:65,
        padding:10,
        height:40,
        borderRadius:6,
        borderColor:'#1b86f8',
        borderWidth:1,
        backgroundColor:'#1b86f8',
        textAlign:'center',
    },
    toolButtonText:{
        color:'white',
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
        fontSize:20,
        color:'white'
    }
});
const OpusStyles= StyleSheet.create({
    OpusBox:{
    position:'relative',
    marginTop:10
    },
    ItemBox:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:30,
        backgroundColor:'#151728',
        opacity:0.6
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:40
    },
    ItemName:{
        position:'relative',
        fontSize:16,
        color:'white',
        top:5
    },
    title:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    mainContent:{
        marginTop:5,
        fontSize:18,
        paddingRight:10,
        color:'white'
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