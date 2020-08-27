import React from 'react';

import { StyleSheet, } from 'react-native';
//import VerticalScrollView from './components/VerticalScrollView';
//import HorizontalScrollView from './components/HorizontalScrollView';
import { Pages } from 'react-native-pages';

//import Moreinfo from './Moreinfo';
import Home from './Home';
/*import Intro from './Intro';
import Screen from './Screen';
import Aboutus from './Aboutus'
import calender from './Calender'
import Eventscroll from './Eventscroll'
import Location from './Location';
import Firstswipe from './Firstswipe';
import Eventscrollnew from './Eventscrollnew';
import Genres from './Genres';
import Monthswiper from './Monthswiper';
import Moscrollone from './Moscrollone';
import Footer1 from './Footer1';
import Readmore from './Readmore';
import Storage from './Storage';
import Login from './Login';
import Products from './Products';
import Splash from './Splash';*/
import Cart from './Cart';
//import Reciept from './Reciept';
//import Modaltest1 from './Modaltest1';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Slidebar from "./Slidebar";

//import {feather} from '@expo/vector-icons';
//import {createStore}from 'redux';
//import {Provider} from 'react-redux';





const DrawerNavigator = createDrawerNavigator(
  
      {
     
       /* Login: {
          screen:Login,
          navigationOptions: {
            
            drawerLockMode:'locked-closed',
            drawerLabel: () => null
            
            
            
          },
          
        
        },
        
        Moreinfo: {
          screen:Moreinfo,
          navigationOptions: {
            
            drawerLockMode:'locked-closed',
            drawerLabel: () => null
            
            
            
          },
          
        
        },*/
        Home:Home,
        //Products:Products,
        Cart:Cart,
        //Reciept:Reciept,
        


       
        
      },
      {
      contentComponent:props => <Slidebar {...props}/>
      
      }
);
    export default createAppContainer(DrawerNavigator);




/*export default function App() {
  return (
    
    <View>
    
      <Actualimage/>
    </View>
   
  );
  
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'contain',
    marginTop:100,
    paddingTop: 150,
    width:140,
    height:140,
  },
  dot:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'contain',
    marginBottom:120,
    paddingTop: 50,
    width:40 ,
    height:40,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    width:210,
    borderRadius: 5 ,
    margin: 5,
    bottom:120,
    left:90
   
  },
   
  ImageIconStyle: {
     padding: 10,
     margin: 5,
     height: 25,
     width: 25,
     resizeMode : 'stretch',
   
  },
   
  TextStyle :{
   
    color: "#fff",
    marginBottom : 4,
    marginRight :20,
    
  },
   
  SeparatorLine :{
   
  backgroundColor : '#00008b',
  width: 1,
  height: 32
   
  }
 
});
