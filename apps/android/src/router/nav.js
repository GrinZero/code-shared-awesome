import React, { useState, useRef,Component } from "react";
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';


// 路由
import Tab from './tab';
// ---------------主页----------------
// import HomeSearch from '../pages/home/HomeSearch';
import Recomment from '../pages/home/index';

// ---------------用户----------------
import Loginfive from '../pages/user/loginfive';
import Logintwo from '../pages/user/logintwo';
import Loginone from '../pages/user/loginone';
import Login from '../pages/user/login';

import Pone from '../pages/personal/pone';



const Stack = createStackNavigator();

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer
        onStateChange={(state: NavigationState) => {
          //加入该行
          //这个是跳转了才去回调，所以不能利用routes来判断路由栈
          NavigationHelper.navRouters = state.routes;
        }}>
        <Stack.Navigator
          initialRouteName="Tab"
          headerMode={'none'}
          screenOptions={(navigation) => {
            NavigationHelper.navigation = navigation.navigation;
          }}>
          {/* 从这里开始是pages */}
{/* 登录和个人中心部分 */}
         <Stack.Screen
            name="Loginone"
            component={Loginone}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

             <Stack.Screen
            name="Pone"
            component={Pone}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
             <Stack.Screen
            name="Logintwo"
            component={Logintwo}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="Loginfive"
            component={Loginfive}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        {/* 主页部分 */}
          <Stack.Screen
            name="Tab"
            component={Tab}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="Recomment"
            component={Recomment}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Nav;
