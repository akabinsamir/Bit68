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
  componentDidUpdate(prevProps) {
    if (
      prevProps.mydata !==
      this.props.mydata
    ) {
      this.setState({
        dataSource:this.props.mydata
    })

    }
  }

async componentDidMount() {
  
  await Font.loadAsync({
    'main':require('./assets/fonts/Tajawal-Regular.ttf')
  })

  this.setState({font:'main'})
 
    fetch("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
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
  
  navi = (id) => {
  if (id != null)
  {
    this.props.navigation.navigate(("Products"),{
      catid:id
    });
  }
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
        loop={true}
        dot={<View style={{ opacity: 0 }} />}
        activeDot={<View style={{ opacity: 0 }} />}

      >

{this.state.dataSource?(
            this.state.dataSource.map((item, s) => {
              while (s < Math.floor((this.state.dataSource.length/10)+1)) {
                
                var max = s*2;
          
                return ( 
        <View style={{ position: "absolute",flexDirection:'row',width:screenWidth+(screenWidth/9),flexWrap:'wrap',}}>

         {this.state.dataSource?(
            this.state.dataSource.slice(max,this.state.dataSource.length).map((item, i) => {
            while(i<10)
            {
                return ( 
         <TouchableOpacity
         
            onPress={() => this.navi(item.id)}
            style={{marginVertical:-screenWidth/5,marginHorizontal:7}}
          >
            <Image
              source={{ uri:item.category_img }}
              style={{
                height: screenHeight/2,
                width: screenWidth/2.2,
                resizeMode:'contain',
                zIndex: 99,
                borderRadius:15
              }}
            />
            <Text
              style={{
                fontSize: 15,
                zIndex: 100,
                fontWeight:'bold',
                fontFamily:this.state.font,
                textAlign:'center',
                bottom:'40%',
                textAlign:'left',
                color:'white',
                textShadowColor:'black',
                textShadowOffset:{width: 3, height: 3},
                textShadowRadius:20,
                left:'10%'
              }}
            >
              {item.name}
            </Text>
            {
            i%2 & i!=1? //to insert an image every two data indexes as mentioned in design
               
                  (   <Image
                    source={require('./images/datasep.png')}
                    style={{
                      height: screenHeight/8,
                      width: screenWidth,
                      zIndex: 200,
                      resizeMode:'stretch',
                      position:'absolute',
                      right:'0%',
                      borderRadius:15,
                      bottom:'71%',
                    }}
                  />):(<View></View>)
                
            }
            
          </TouchableOpacity>)
        }})):(<View></View>)}
        </View>
        )}})):(<View></View>)}
        
        
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
