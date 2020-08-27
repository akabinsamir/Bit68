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




export default class Categories extends React.Component {
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
        source={require('./images/categories/cat1.png')} 
         style={{
     
     
         
          height:70,
          width:70,
          zIndex:100,
         }}
       />
       <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:11,left:11}}
       />
        
      
      
     </TouchableOpacity>
     <TouchableOpacity style={{left:80,position:'absolute'}}>
      
      <Image
       source={require('./images/categories/cat2.png')} 
        style={{
        
    
      
         height:80,
         width:80,
         zIndex:100,
        }}
      />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
       />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:160,position:'absolute'}}>
      
      <Image
       source={require('./images/categories/cat3.png')} 
        style={{
       
         height:80,
         width:80,
         zIndex:100,
        }}
      />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
       />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:240,position:'absolute'}} >
      
      <Image
       source={require('./images/categories/cat4.png')} 
        style={{
      
         height:75,
         width:75,
         zIndex:100,
         }}
      />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
       />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:320,position:'absolute'}} >
      
      <Image
       source={require('./images/categories/cat5.png')} 
        style={{
  
        
     
         height:75,
         width:75,
         zIndex:100,
       }}
      />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
       />
       
     
     
    </TouchableOpacity>


    <TouchableOpacity style={{left:10,position:'absolute',top:89}}  >
      
      <Image
       source={require('./images/categories/cat1.png')} 
        style={{
    
    
        
         height:70,
         width:70,
         zIndex:100,
        }}
      />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:7,left:11}}
       />
       
     
     
    </TouchableOpacity>
    <TouchableOpacity style={{left:80,position:'absolute',top:87}}>
     
     <Image
      source={require('./images/categories/cat2.png')} 
       style={{
       
   
     
        height:80,
        width:80,
        zIndex:100,
       }}
     />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
       />
       
      
    
    
   </TouchableOpacity>
   <TouchableOpacity style={{left:160,position:'absolute',top:87}}>
     
     <Image
      source={require('./images/categories/cat3.png')} 
       style={{
      
        height:80,
        width:80,
        zIndex:100,
       }}
     />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
       />
    
    
   </TouchableOpacity>
   <TouchableOpacity style={{left:240,position:'absolute',top:87}} >
     
     <Image
      source={require('./images/categories/cat4.png')} 
       style={{
     
        height:75,
        width:75,
        zIndex:100,
        }}
     />
      
      <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
       />
    
   </TouchableOpacity>
   <TouchableOpacity style={{left:320,position:'absolute',top:87}} >
     
     <Image
      source={require('./images/categories/cat5.png')} 
       style={{
 
       
    
        height:75,
        width:75,
        zIndex:100,
      }}
     />
        <Image
        source={require('./images/categories/catname.png')} 
         style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
       />
    
    
   </TouchableOpacity>
        
           </View>
               
           <View style={{position:'absolute' ,}}>
             
             <TouchableOpacity style={{left:10,position:'absolute',top:5}}  >
             
              <Image
               source={require('./images/categories/cat1.png')} 
                style={{
            
            
                
                 height:70,
                 width:70,
                 zIndex:100,
                }}
              />
              <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:11,left:11}}
              />
               
             
             
            </TouchableOpacity>
            <TouchableOpacity style={{left:80,position:'absolute'}}>
             
             <Image
              source={require('./images/categories/cat2.png')} 
               style={{
               
           
             
                height:80,
                width:80,
                zIndex:100,
               }}
             />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
              />
              
            
            
           </TouchableOpacity>
           <TouchableOpacity style={{left:160,position:'absolute'}}>
             
             <Image
              source={require('./images/categories/cat3.png')} 
               style={{
              
                height:80,
                width:80,
                zIndex:100,
               }}
             />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
              />
              
            
            
           </TouchableOpacity>
           <TouchableOpacity style={{left:240,position:'absolute'}} >
             
             <Image
              source={require('./images/categories/cat4.png')} 
               style={{
             
                height:75,
                width:75,
                zIndex:100,
                }}
             />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
              />
              
            
            
           </TouchableOpacity>
           <TouchableOpacity style={{left:320,position:'absolute'}} >
             
             <Image
              source={require('./images/categories/cat5.png')} 
               style={{
         
               
            
                height:75,
                width:75,
                zIndex:100,
              }}
             />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:12.5,left:20}}
              />
              
            
            
           </TouchableOpacity>
       
       
           <TouchableOpacity style={{left:10,position:'absolute',top:89}}  >
             
             <Image
              source={require('./images/categories/cat1.png')} 
               style={{
           
           
               
                height:70,
                width:70,
                zIndex:100,
               }}
             />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:7,left:11}}
              />
              
            
            
           </TouchableOpacity>
           <TouchableOpacity style={{left:80,position:'absolute',top:87}}>
            
            <Image
             source={require('./images/categories/cat2.png')} 
              style={{
              
          
            
               height:80,
               width:80,
               zIndex:100,
              }}
            />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
              />
              
             
           
           
          </TouchableOpacity>
          <TouchableOpacity style={{left:160,position:'absolute',top:87}}>
            
            <Image
             source={require('./images/categories/cat3.png')} 
              style={{
             
               height:80,
               width:80,
               zIndex:100,
              }}
            />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
              />
           
           
          </TouchableOpacity>
          <TouchableOpacity style={{left:240,position:'absolute',top:87}} >
            
            <Image
             source={require('./images/categories/cat4.png')} 
              style={{
            
               height:75,
               width:75,
               zIndex:100,
               }}
            />
             
             <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
              />
           
          </TouchableOpacity>
          <TouchableOpacity style={{left:320,position:'absolute',top:87}} >
            
            <Image
             source={require('./images/categories/cat5.png')} 
              style={{
        
              
           
               height:75,
               width:75,
               zIndex:100,
             }}
            />
               <Image
               source={require('./images/categories/catname.png')} 
                style={{ height:30,width:35,zIndex:100,bottom:15,left:22}}
              />
           
           
          </TouchableOpacity>
               
                  </View>
        
   
      </Swiper>
      
      
    )
    
  }
  
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)