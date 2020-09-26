import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import Swiper from "react-native-swiper";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  wrapper: {
      margin:-30
  },
  slide1: {
    flex: 1,
    top: "1%",
    marginBottom: "10%",
    paddingBottom: "5%",
    paddingTop: "4%",
    
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },

  slide2: {
    flex: 1,
    top: "1%",
    marginBottom: "10%",
    paddingBottom: "5%",
    paddingTop: "4%",

    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  slide3: {
    flex: 1,
    top: "1%",
    marginBottom: "10%",
    paddingBottom: "5%",
    paddingTop: "4%",

    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    
  },
});

export default class Categories extends React.Component {
  
  constructor() {
    super();

    this.state = {

      dataSource: [],
      font:'normal',
    };
  }

async componentDidMount() {
  
  await Font.loadAsync({
    'main':require('./assets/fonts/Tajawal-Regular.ttf')
  })

  this.setState({font:'main'})
 
    fetch("http://www.tamweenymarket.com/api/categories/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  navi = (text,name) => {
  if (text != null && name != null)
  {
    this.props.navigation.navigate("Products",{
      link:text,
      cat:name
    });
  }
    //console.log(text)
  };

  render() {
   
    const { navigation } = this.props;
    
    return (
      <Swiper
      
      
        containerStyle={styles.wrapper}
        showsButtons={false}
        pagingEnabled={false}
        pagination={false}
        autoplay={false}
        dot={<View style={{ opacity: 0 }} />}
        activeDot={<View style={{ opacity: 0 }} />}

      >

{this.state.dataSource?(
            this.state.dataSource.map((item, s) => {
              while (s < Math.floor((this.state.dataSource.length/10)+1)) {
                
                var max = s*10;
          
                return ( 
        <View style={{ position: "absolute",flexDirection:'row',width:screenWidth+50,flexWrap:'wrap',}}>

         {this.state.dataSource?(
            this.state.dataSource.slice(max,this.state.dataSource.length).map((item, i) => {
            while(i<10)
            {
                return ( 
         <TouchableOpacity
         
            onPress={() => this.navi(item._id,item.name)}
            style={{marginVertical:-screenWidth/10}}
          >
            <Image
              source={{ uri:item.categoryimage }}
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
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
