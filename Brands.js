import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image,Dimensions ,TouchableOpacity} from 'react-native'

import Swiper from 'react-native-swiper'
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




export default class Brands extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      mydata:[],
      products:null
  }
}
async someFunctionInChildComponent(id){

 await fetch("http://www.tamweenymarket.com/api/brands/" +id)
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      products: responseJson,
     
    });
  

  });
  this.props.functionPropNameHere(this.state.products);
}
componentDidUpdate(prevProps) {
  if (
    prevProps.brands !==
    this.props.brands
  ) {
    this.setState({
      mydata:this.props.brands
  })

  }
}
 async componentDidMount(){
   
   //console.log(this.props.brands)
   
   await this.setState({
      mydata:this.props.brands
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
        <View style={{ position: "absolute",flexDirection:'row',width:screenWidth,height:screenHeight/10}}>

         {this.state.mydata?(
            this.state.mydata.slice(max,this.state.mydata.length).map((item, i) => {
            while(i<5)
            {
                return ( 
                  <TouchableOpacity 
                  onPress={()=>this.someFunctionInChildComponent(item._id)}
                  style={{marginHorizontal:screenWidth/20}}  >
                  
                   <Image
                    source={{uri:item.brandimage}} 
                     style={{
                 
                 
                     resizeMode:'contain',
                      height:screenHeight/10,
                      width:screenWidth/10,
                      zIndex:100,
                     }}
                   />
                   <Image
                    source={require('./images/brands/brandseperator.png')} 
                     style={{ height:screenHeight/20,width:screenWidth/10,zIndex:100,bottom:'70%',left:'90%',resizeMode:'contain'}}
                   />
                    
                  
                  
                 </TouchableOpacity>)}})):(<View></View>)}
        </View>
        )}})):(<View></View>)}

   
      </Swiper>
      
      
    )
    
  }
  
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)