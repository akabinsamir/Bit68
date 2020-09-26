import React from "react";

import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar
} from "react-native";

import { SliderBox } from "react-native-image-slider-box";

let screenWidth = Dimensions.get("window").width;
//let screenHeight = Dimensions.get("window").height;
let screenHeight = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight :Dimensions.get('window').height;
export default class Splash extends React.Component {
  constructor() {
    super();

    this.state = {
      userid: null,
      username: "",
      password: "",

      validation: "",

      fontLoaded: false,
    
      checkedboxes: "",
      images: [
        require('./images/splashthree.png'),
        require('./images/splashone.png'),
        require('./images/splashtwo.png'),
       
      ]
    };
  }

  async componentDidMount() {
  

    
  }

 

  render() {
    

    return (
      <ImageBackground
        source={require("./images/splashone.png")}
        style={{ width: screenWidth, height: screenHeight }}
      >
      <SliderBox
        images={this.state.images}
        sliderBoxHeight={screenHeight}
        onCurrentImagePressed={index =>this.props.navigation.navigate("Login")}
        dotColor="white"
        inactiveDotColor='gray'
        paginationBoxVerticalPadding={100}
        autoplay
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
    zIndex: 40000,
  },
  modalContent: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: "82%",
    width: screenWidth,
    zIndex: 30000,
  },
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: -550,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.4,
  },
  header: {
    flex: 1,
    paddingTop: "0%",
    width: "100%",
    height: "13%",
    top: "0%",
    zIndex: 1,
    position: "absolute",
  },
  headerphoto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "stretch",

    width: "100%",
    height: "0%",
  },
  logo: {
    resizeMode: "contain",

    bottom: screenHeight / 2.3,
    width: screenWidth / 2.5,
    height: screenHeight / 5,
    zIndex: 300,
  },

  header: {
    flex: 1,
    paddingTop: "0%",
    width: "100%",
    height: "7%",
    top: "0%",
    zIndex: 1,
    position: "absolute",
  },
  headerphoto: {
    flex: 1,

    resizeMode: "stretch",
  },
  dot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    marginBottom: 120,
    paddingTop: 50,
    width: 40,
    height: 40,
  },
  second: {
    flex: 1,
    resizeMode: "contain",
    bottom: 100,
    width: 100,
    height: 100,
  },
  FacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 210,
    borderRadius: 5,
    margin: 5,
    bottom: 120,
    left: 90,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },

  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20,
  },

  SeparatorLine: {
    backgroundColor: "black",
    width: 1,
    height: 32,
  },
  input: {
    right:screenWidth/7,
    height: 60,
    width: "82.5%",
    bottom: "45%",
    textAlign: "center",
    fontFamily: "normal",
    color: "gray",
    fontSize: 18,
    zIndex: 300,
  },
  input2: {
    
    height: 60,
    right:screenWidth/5.3,
    width: "82.5%",
    bottom: "44.5%",
    fontFamily: "normal",
    textAlign: "center",
    color: "gray",
    zIndex: 300,
    fontSize: 18,
  },

  submitButton: {
 
    margin: "4%",
    height: "5.5%",
    width: "37%",
    bottom: screenHeight/3.2,
    right: screenWidth/3.2,
    zIndex:10000
  },
  submitButton2: {
    position: "absolute",

    margin: "4%",
    height: "100%",
    width: "100%",
    top: "63%",
    left: "24.5%",
    zIndex: 300,
  },
  submitButton3: {
    position: "absolute",

    margin: "4%",
    height: "100%",
    width: "100%",
    top: "63%",
    left: "47.5%",
    zIndex: 300,
  },
  submitButtonText: {
    color: "#23395d",
    paddingLeft: "7%",
    fontSize: 25,
    fontFamily: "submit",
    zIndex: 19,
    opacity: 0,
  },

  keyboardViewContainer: {
    width: "100%",
    alignItems: "center",
  },
});
