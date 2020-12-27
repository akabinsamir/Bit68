import React, { Component } from "react";
import {View,Text,StyleSheet,Image,ImageBackground,StatusBar,Dimensions} from "react-native";
import {DrawerNavigatorItems} from "react-navigation-drawer";




let screenHeight = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight :Dimensions.get('window').height;


export default Slidebar = props =>{
    

    return(
     
    
        <ImageBackground style={{width:undefined,height:screenHeight+200,backgroundColor:'#D95500'}}>
             <Image source={require('./images/splashlogo.png')} style={{width:'70%',resizeMode:'contain',bottom:'70%',left:'15%',position:'absolute'}}></Image>
           
            <View style={{flex:1,top:'40%',borderRadius:200,width:'100%',height:'100%'}}>
             
                <DrawerNavigatorItems {...props} 
                inactiveTintColor='black'
                activeTintColor='white'
                
                labelStyle={{fontSize:20,fontWeight:'bold',fontFamily:'normal',left:'20%'}}
                

                
               />
                
            </View>
          
</ImageBackground>
    
    );
}