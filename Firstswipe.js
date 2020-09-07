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
        dot={<View style={{ opacity: 0 }} />}
        activeDot={<View style={{ opacity: 0 }} />}
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
            source={require('./images/94116650-special-offer-banner-in-trendy-style-supermarket-sale-proposition-up-to-50-off-message-retail-market.jpg')}
            style={{
              width: screenWidth,
              resizeMode: "contain",
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
            source={require('./images/OOHMID2.jpg')}
            style={{
              width: screenWidth,
              resizeMode: "contain",
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
            source={require('./images/94116645-mega-sale-banner-template-in-trendy-style-retail-marketing-information-new-advertising-campaign-holi.jpg')}
            style={{
              width: screenWidth,
              resizeMode: "contain",
            }}
          />
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
