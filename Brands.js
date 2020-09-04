import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image,Dimensions ,TouchableOpacity} from 'react-native'

import Swiper from 'react-native-swiper'
let screenWidth=Dimensions.get('window').width;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    top:'1%',
    marginBottom:'10%',
    paddingBottom:'5%',
    paddingTop:'4%',
    
    
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  slide2: {
    flex: 1,
    top:'1%',
    marginBottom:'10%',
    paddingBottom:'5%',
    paddingTop:'4%',
    
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide3: {
    flex: 1,
    top:'1%',
    marginBottom:'10%',
    paddingBottom:'5%',
    paddingTop:'4%',
    
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})




export default class Brands extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      dataSource:[]
  }
}
  componentDidMount(){
   
    fetch('https://cairojazzclub.com/wp-json/cjc/home/slider')
    .then ((response) => response.json())
    .then ((responseJson) => {

      this.setState({
        isLoading:false,
        dataSource:  responseJson,
        
        

      })

      
    })
    .catch((error) =>{
      console.log(error);
    });
}
  render() {
  
    let screenWidth=Dimensions.get('window').width;
    return (

      
      <Swiper  style={styles.wrapper} showsButtons={false} pagination={false} autoplay={false} autoplayTimeout={3}dot={<View style={{opacity:0}} />}
      activeDot={<View style={{opacity:0}} />}>
       
       <View style={{position:'absolute' ,}}>
             
      <TouchableOpacity style={{left:10,position:'absolute',top:5}}  >
      
       <Image
        source={require('./images/brands/nestle1.png')} 
         style={{
     
     
         
          height:23,
          width:60,
          zIndex:100,
         }}
       />
       <Image
        source={require('./images/brands/brandseperator.png')} 
         style={{ height:30,width:5,zIndex:100,bottom:20,left:65}}
       />
        
      
      
     </TouchableOpacity>
     <TouchableOpacity style={{left:90,position:'absolute'}}>
      
      <Image
       source={require('./images/brands/tang.png')} 
        style={{
        
    
      
         height:40,
         width:60,
         zIndex:100,
        }}
      />
        <Image
        source={require('./images/brands/brandseperator.png')} 
         style={{ height:30,width:5,zIndex:100,bottom:33,left:68}}
       />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:170,position:'absolute'}}>
      
      <Image
       source={require('./images/brands/marae.png')} 
        style={{
       
         height:37,
         width:62,
         zIndex:100,
        }}
      />
        <Image
        source={require('./images/brands/brandseperator.png')} 
         style={{ height:30,width:5,zIndex:100,bottom:30,left:68}}
       />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:250,position:'absolute'}} >
      
      <Image
       source={require('./images/brands/atyab.png')} 
        style={{
      
         height:30,
         width:62,
         zIndex:100,
         }}
      />
       <Image
        source={require('./images/brands/brandseperator.png')} 
         style={{ height:30,width:5,zIndex:100,bottom:23,left:68}}
       />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:320,position:'absolute'}} >
      
      <Image
       source={require('./images/brands/nestle2.png')} 
        style={{
  
        
        bottom:20,
         height:75,
         width:75,
         zIndex:100,
       }}
      />
   
       
     
     
    </TouchableOpacity>

           </View>
               
           <View style={{position:'absolute' ,}}>
             
           <TouchableOpacity style={{left:10,position:'absolute',top:5}}  >
      
      <Image
       source={require('./images/brands/nestle1.png')} 
        style={{
    
    
        
         height:23,
         width:60,
         zIndex:100,
        }}
      />
      <Image
       source={require('./images/brands/brandseperator.png')} 
        style={{ height:30,width:5,zIndex:100,bottom:20,left:65}}
      />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:90,position:'absolute'}}>
     
     <Image
      source={require('./images/brands/tang.png')} 
       style={{
       
   
     
        height:40,
        width:60,
        zIndex:100,
       }}
     />
       <Image
       source={require('./images/brands/brandseperator.png')} 
        style={{ height:30,width:5,zIndex:100,bottom:33,left:68}}
      />
      
    
    
   </TouchableOpacity>
   <TouchableOpacity style={{left:170,position:'absolute'}}>
     
     <Image
      source={require('./images/brands/marae.png')} 
       style={{
      
        height:37,
        width:62,
        zIndex:100,
       }}
     />
       <Image
       source={require('./images/brands/brandseperator.png')} 
        style={{ height:30,width:5,zIndex:100,bottom:30,left:68}}
      />
      
    
    
   </TouchableOpacity>
   <TouchableOpacity style={{left:250,position:'absolute'}} >
     
     <Image
      source={require('./images/brands/atyab.png')} 
       style={{
     
        height:30,
        width:62,
        zIndex:100,
        }}
     />
      <Image
       source={require('./images/brands/brandseperator.png')} 
        style={{ height:30,width:5,zIndex:100,bottom:23,left:68}}
      />
      
    
    
   </TouchableOpacity>
   <TouchableOpacity style={{left:320,position:'absolute'}} >
     
     <Image
      source={require('./images/brands/nestle2.png')} 
       style={{
 
       
       bottom:20,
        height:75,
        width:75,
        zIndex:100,
      }}
     />
  
      
    
    
   </TouchableOpacity>
       
       
           
               
                  </View>
        
   
      </Swiper>
      
      
    )
    
  }
  
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)