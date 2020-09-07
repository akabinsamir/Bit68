import React, { Component } from "react";
import {View,Text,StyleSheet,ScrollView,ImageBackground,Image,Dimensions} from "react-native";
import {DrawerNavigatorItems} from "react-navigation-drawer";



let screenHeight = Dimensions.get("window").height;


export default Slidebar = props =>{
    

    return(
     
    
        <ImageBackground source={require('./images/slidebar.png')} style={{width:undefined,height:screenHeight,}}>
            <View style={{flex:1}}>
             
                <DrawerNavigatorItems {...props} 
                inactiveTintColor='white'
                activeTintColor='gray'
             
                labelStyle={{fontSize:20,fontWeight:'bold',fontFamily:'normal'}}
                

                
               />
                
            </View>
          
</ImageBackground>
    
    );
}