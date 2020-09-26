import React, { Component } from "react";
import {View,Text,StyleSheet,Image,ImageBackground,StatusBar,Dimensions} from "react-native";
import {DrawerNavigatorItems} from "react-navigation-drawer";




let screenHeight = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight :Dimensions.get('window').height;


export default Slidebar = props =>{
    

    return(
     
    
        <ImageBackground source={require('./images/slidebar.png')} style={{width:undefined,height:screenHeight+200,}}>
             <Image source={require('./images/tamweenlogo.png')} style={{width:'70%',resizeMode:'contain',bottom:'70%',left:'15%',position:'absolute'}}></Image>
            <Image source={require('./images/arabicenglish.png')} style={{width:'70%',resizeMode:'contain',top:'20%',left:'15%'}}></Image>
            <View style={{flex:1,top:'20%',borderRadius:200,width:'100%',height:'100%'}}>
             
                <DrawerNavigatorItems {...props} 
                inactiveTintColor='white'
                activeTintColor='gray'
                
                labelStyle={{fontSize:20,fontWeight:'bold',fontFamily:'normal',left:'20%'}}
                

                
               />
                
            </View>
          
</ImageBackground>
    
    );
}