import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import{MaterialCommunityIcons}from "@expo/vector-icons";

import Chw from "./dbz";
import Home from "./Home";
import Jojo from "./naruto";

const Tab = createBottomTabNavigator()
;

export default function Rotastab(){
  return(
    <Tab.Navigator inicialRouteName='Home' screenOptions={{headerShown:false}}>
    
  <Tab.Screen name="Dragon Ball Z" component={Chw} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="star" color={color} size={size}/>}}/>
    
    <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="home" color={color} size={size}/>}}/>
    
    <Tab.Screen name="Naruto" component={Jojo}  options={{tabBarIcon:({color,size})=><MaterialCommunityIcons  name="star" color={color} size={size}/>}}/>
    
    </Tab.Navigator>
  );
}