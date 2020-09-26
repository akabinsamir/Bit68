import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image,Dimensions ,TouchableOpacity} from 'react-native'

import Swiper from 'react-native-swiper'
import * as Font from "expo-font";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
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

export default class Subcategory extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      mydata:[],
      products:null,
      font:'normal',
  }
}
async someFunctionInChildComponent(id){

  
  await fetch("http://www.tamweenymarket.com/api/subc/" +id)
   .then((response) => response.json())
   .then((responseJson) => {
     this.setState({
       products: responseJson,
      
     });
   
 
   });
   console.log(this.state.products)
   this.props.functionPropNameHere(this.state.products);
 }
componentDidUpdate(prevProps) {
  if (
    prevProps.subc !==
    this.props.subc
  ) {
    this.setState({
      mydata:this.props.subc
  })

  }
}
 async componentDidMount(){
  await Font.loadAsync({
    'main':require('./assets/fonts/Tajawal-Regular.ttf')
  })

  this.setState({font:'main'})
    await this.setState({
      mydata:this.props.subc
  })
  //console.log(this.state.mydata)
   
}
  render() {
  
    let screenWidth=Dimensions.get('window').width;
    return (

      
      <Swiper  style={styles.wrapper} showsButtons={false} pagination={false} autoplay={false} autoplayTimeout={3}dot={<View style={{opacity:0}} />}
      activeDot={<View style={{opacity:0}} />}>
       
       {this.state.mydata?(
            this.state.mydata.map((item, s) => {
              while (s < Math.floor((this.state.mydata.length/5)+1)) {
                
                var max = s*5;
          
                return ( 
        <View style={{ position: "absolute",flexDirection:'row'}}>

         {this.state.mydata?(
            this.state.mydata.slice(max,this.state.mydata.length).map((item, i) => {
            while(i<10)
            {
                return ( 
         <TouchableOpacity
         onPress={()=>this.someFunctionInChildComponent(item._id)}
            style={{marginVertical:-screenWidth/10}}
          >
            <Image
              source={{ uri:item.subcategoryimage }}
              style={{
                height: screenHeight/5,
                width: screenWidth/4.5,
                resizeMode:'contain',
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                fontFamily:this.state.font,
                textAlign:'center',bottom:'30%'
              }}
            >
              {item.name}
            </Text>
            
          </TouchableOpacity>)}})):(<View></View>)}
        </View>
        )}})):(<View></View>)}
                  
          
       
       
           
               
              
        
   
      </Swiper>
      
      
    )
    
  }
  
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)