import React, { Component } from "react";
import {View,Text,StyleSheet,ScrollView,ImageBackground,Image} from "react-native";
import {DrawerNavigatorItems} from "react-navigation-drawer";






export default Slidebar = props =>{
    

    return(
     
    
        <ImageBackground source={require('./images/beekoo115.png')} style={{width:undefined,height:'100%'}}>
            <View style={{flex:1,top:'5%',right:'10%'}}>
             
                <DrawerNavigatorItems {...props}  style={{backgroundColor: '#000000'}}
                inactiveTintColor='#FCB034'
                activeTintColor='white'
             
                labelStyle={{fontSize:20,fontWeight:'normal',fontFamily:'FORMAL'}}
                

                
               />
                
            </View>
          
</ImageBackground>
    
    );
}