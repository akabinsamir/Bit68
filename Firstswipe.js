import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

import Swiper from "react-native-swiper";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
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

export default class Swiperinto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    /*fetch("https://cairojazzclub.com/wp-json/cjc/home/slider")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });*/
   
  }
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        pagination={false}
        autoplay={true}
        autoplayTimeout={3}

        dotColor={'white'}
        dot={<View style={{borderWidth:10/7, borderRadius:10,borderColor:'#D95500',backgroundColor:'white', width: 16, height: 16,borderRadius: 8, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,bottom:'70%'}} />}
        activeDot={<View style={{backgroundColor:'#D95500', width: 16, height: 16,borderRadius: 8, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,bottom:'70%'}} />}
      >
        <View
          style={{
            width: screenWidth,
            height:screenHeight/10*9.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require('./images/bitslider.png')}
            style={{
              width: screenWidth,
  
            }}
          />
        </View>
        <View
          style={{
            width: screenWidth,
            height:screenHeight/10*9.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require('./images/bitslider.png')}
            style={{
              width: screenWidth,

            }}
          />
        </View>
        <View
          style={{
            width: screenWidth,
            height:screenHeight/10*9.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require('./images/bitslider.png')}
            style={{
              width: screenWidth,

            }}
          />
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
