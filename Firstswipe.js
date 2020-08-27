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
    fetch("https://cairojazzclub.com/wp-json/cjc/home/slider")
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
            top: "4.8%",
            marginBottom: "15%",
            paddingBottom: "60%",
            paddingTop: "4%",

            width: screenWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: this.state.dataSource[0] }}
            style={{
              width: screenWidth,
              height: 300,
              resizeMode: "contain",
              top: "61%",
            }}
          />
        </View>
        <View
          style={{
            top: "4.8%",
            marginBottom: "15%",
            paddingBottom: "60%",
            paddingTop: "4%",
            width: screenWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: this.state.dataSource[1] }}
            style={{
              width: screenWidth,
              height: 300,
              resizeMode: "contain",
              top: "61%",
            }}
          />
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
