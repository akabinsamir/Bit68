import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import axios from "axios";
//import Home from "./Home";

import * as Font from "expo-font";

//import Intro from "./Intro";


export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userid: null,
      username: "",
      password: "",

      validation: "",

      fontLoaded: false,

      checkedboxes: "",
    };
  }

  CheckBoxTest() {
    this.setState({
      check: !this.state.check,
    });
    console.log(this.state.checked);
  }

  async componentDidMount() {
    const { navigation } = this.props;

    const id = navigation.getParam("id", "some default value");
    const picture = navigation.getParam(
      "picture",
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/01/sony-car-796x418.jpg"
    );
    this.state.userid = id;
    this.state.userpicture = picture;
    await Font.loadAsync({
      FORMAL: require("./assets/fonts/Tajawal-Regular.ttf"),
      submit: require("./assets/fonts/AnyConv.com__MyriadPro-Cond.ttf"),
    });

    this.setState({ fontLoaded: true });
  }

  handleusername = (text) => {
    this.setState({ username: text });
  };
  handlepassword = (text) => {
    this.setState({ password: text });
  };
  handleDate = (text) => {
    (date) => {
      this.setState({ date: date });
    };
    this.setState({ date: text });
  };
  handleAddress = (text) => {
    this.setState({ address: text });
  };
  handleFacebooklink = (text) => {
    this.setState({ facebooklink: text });
  };

  login = (username, password) => {
    const that = this;
    if (username === "" || password === "") {
      alert("please check the missing fields");
    } else {
      axios
        .post("http://192.168.0.100:3000/api/user/login", {
          username: this.state.username,
          password: this.state.password,
        })
        .then(function (response) {
          if (response.data.message) {
            alert(response.data.message);
            console.log(response.data.message);
          } else {
            alert("hello " + response.data + " !");
            that.props.navigation.navigate("Home");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("please check your internet connection!");
        });
    }
  };
  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;

    return (
      <ImageBackground
        source={require("./images/loginbg.png")}
        style={{ width: "104%", height: "100%", right: "3%" }}
      >
        <View style={styles.container}>
          <Image
            source={require("./images/tamweenlogo.png")}
            style={styles.logo}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handleusername}
          />
          <Image
            source={require("./images/fieldbg.png")}
            style={{
              position: "absolute",
              bottom: "72%",
              opacity: 0.8,
              right: "18%",
              height: 50.5,
              width: 273,
            }}
          />
          <Image
            source={require("./images/usernamelogo.png")}
            style={{
              position: "absolute",
              bottom: "72.8%",
              opacity: 0.8,
              right: "70%",
              height: 30,
              width: 27,
            }}
          />

          <TextInput
            style={{
              fontFamily: "normal",
              height: 40,
              textAlign: "center",
              width: "82.5%",
              bottom: "56.2%",
              opacity: 0.8,
              zIndex: 50,
              color: "white",
              fontSize: 28,
            }}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handlepassword}
          />
          <Image
            source={require("./images/fieldbg.png")}
            style={{
              position: "absolute",
              bottom: "66.8%",
              opacity: 0.8,
              right: "18%",
              height: 50.5,
              width: 273,
            }}
          />
          <Image
            source={require("./images/passwordlogo.png")}
            style={{
              position: "absolute",
              bottom: "67.5%",
              opacity: 0.8,
              right: "70%",
              height: 32,
              width: 27,
            }}
          />

          <Text
            style={{
              position: "absolute",
              fontSize: 17,
              bottom: "61.6%",
              color: "white",
              opacity: 0.8,
              left: "35%",
              fontFamily: "normal",
            }}
          >
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.username, this.state.password)}
        >
          <Image
            source={require("./images/loginbutton.png")}
            style={{
              width: 220,
              resizeMode: "contain",
              right: "40%",
              bottom: 90,
              zIndex: 200,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "27.6%",
            color: "white",
            opacity: 0.8,
            left: "33%",
            fontFamily: "normal",
          }}
        >
          or Sign up with
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "28.6%",
            color: "white",
            opacity: 0.8,
            left: "15%",
          }}
        >
          ______
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "28.6%",
            color: "white",
            opacity: 0.8,
            left: "70%",
          }}
        >
          ______
        </Text>

        <TouchableOpacity style={styles.submitButton2}>
          <Image
            source={require("./images/facebook.png")}
            style={{ width: 80, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton3}>
          <Image
            source={require("./images/google.png")}
            style={{ width: 80, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "12.6%",
            color: "white",
            opacity: 0.8,
            left: "14%",
            fontFamily: "normal",
          }}
        >
          Don't have an account?
        </Text>
        <Text
          onPress={() => {
            //on clicking we are going to open the URL using Linking
            this.props.navigation.navigate("Moreinfo");
          }}
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "12.8%",
            color: "white",
            opacity: 0.8,
            left: "67%",
            fontWeight: "bold",
          }}
        >
          Sign up
        </Text>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
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

    bottom: "35%",
    width: "70%",
    height: "70%",
    zIndex: 3,
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
    margin: 5,
    height: 60,
    opacity: 0.8,
    width: "82.5%",
    bottom: "57.5%",
    textAlign: "center",
    fontFamily: "normal",
    color: "white",
    fontSize: 28,
    zIndex: 200,
  },
  input2: {
    margin: 5,
    height: 60,
    opacity: 0.8,
    width: "82.5%",
    bottom: "57.5%",
    fontFamily: "normal",
    textAlign: "center",
    color: "white",
    zIndex: 200,
    fontSize: 20,
    right: "2%",
  },

  submitButton: {
    paddingLeft: "7%",
    paddingTop: "3%",
    margin: "4%",
    height: "5.5%",
    width: "37%",
    bottom: "30%",
    left: "25.5%",
    zIndex: 300,
  },
  submitButton2: {
    position: "absolute",

    margin: "4%",
    height: "10%",
    width: "20%",
    top: "65%",
    left: "24.5%",
    zIndex: 300,
  },
  submitButton3: {
    position: "absolute",

    margin: "4%",
    height: "10%",
    width: "20%",
    top: "65%",
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
