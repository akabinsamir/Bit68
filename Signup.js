import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import axios from "axios";
import * as Font from "expo-font";
import Modal from "react-native-modal";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      userid: null,
      fullname: "",
      useremail: "",
      username: "",
      phone: "",
      facebooklink: "",
      userpicture: "",

      validation: "",

      fontLoaded: false,

      checkedboxes: "",
      visibleModal: 2,
      font:'normal',
    };
  }

  CheckBoxTest() {
    this.setState({
      check: !this.state.check,
    });
    console.log(this.state.checked);
  }

  async componentDidMount() {

    await Font.loadAsync({
      'main':require('./assets/fonts/Tajawal-Regular.ttf')
    })

    this.setState({font:'main'})
    const { navigation } = this.props;

    const id = navigation.getParam("id", "some default value");
    const picture = navigation.getParam(
      "picture",
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/01/sony-car-796x418.jpg"
    );
    this.state.userid = id;
    this.state.userpicture = picture;

    
  }

  handlefullname = (text) => {
    this.setState({ fullname: text });
  };
  handleemail = (text) => {
    this.setState({ useremail: text });
    console.log(this.state.useremail)
  };
  handleusername = (text) => {
    this.setState({ username: text });
  };
  handlepassword = (text) => {
    this.setState({ password: text });
  };
  handlephone = (text) => {
    this.setState({ phone: text });
  };

  login = (fullname, useremail, username, password, phone) => {
    //this.props.navigation.navigate('Home')
    if (
      fullname === "" ||
      useremail === "" ||
      username === "" ||
      password === "" ||
      phone === ""
    ) {
      alert("please fill in the missing data");
    } else {
      //alert('fullname: ' + fullname + ' useremail: ' + useremail +'username :' + username +"password :"+password+"phone :"+phone)
      axios
        .post("http://www.tamweenymarket.com/api/user/register", {
          fullname: this.state.fullname,
          email: this.state.useremail,
          username: this.state.username,
          password: this.state.password,
          phone: this.state.phone,
        })
        .then(function (response) {
          if (response.data.message) {
            alert(response.data.message);
            console.log(response.data.message);
          } else {
            alert("Registered :)");
            console.log(response);
            //that.props.navigation.navigate('Home');
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("please check your internet connection!");
        });
    }
  };
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={styles.container}>
        <Image source={require("./images/welcome.png")} style={{
            resizeMode: "contain",
            bottom: screenHeight / 2.6,
            width: screenWidth / 2.4,
            height: screenHeight / 4,
            zIndex: 300,}} />
        <Image
          source={require("./images/createaccount.png")}
          style={{
            resizeMode: "contain",

            bottom: screenHeight / 1.8,
            width: screenWidth / 3,
            height: screenHeight / 5,
            zIndex: 300,
          }}
        />

        <TextInput
          style={{
            height: 60,
            right:screenWidth/5.3,
            width: "82.5%",
            bottom: "44.5%",
            fontFamily: this.state.font,
            textAlign: "center",
            color: "gray",
            zIndex: 300,
            fontSize: 18,
          }}
          underlineColorAndroid="transparent"
          placeholder="Full Name"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.handlefullname}
        />

        <Image
          source={require("./images/tamweenyfield.png")}
          style={{
            position: "absolute",
            bottom: "84%",
            opacity: 0.8,
            height: 50.5,
            width: 273,
          }}
        />
        <Image
          source={require("./images/usernamelogo.png")}
          style={{
            position: "absolute",
            bottom: "85.5%",
            tintColor:'gray',
            height: screenHeight/40,
            width: screenWidth/5,
            resizeMode:'contain',
            left:'37%'

          }}
        />

        <TextInput
          style={{   right:screenWidth/6.8,
            height: 60,
            width: "82.5%",
            bottom: "45%",
            textAlign: "center",
            fontFamily: this.state.font,
            color: "gray",
            fontSize: 18,
            zIndex: 300,}}
          underlineColorAndroid="transparent"
          placeholder="Email Address"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.handleemail}
        />
        <Image
          source={require("./images/tamweenyfield.png")}
          style={{
            position: "absolute",
            bottom: "79%",
            opacity: 0.8,
            height: 50.5,
            width: 273,
          }}
        />
        <Image
          source={require("./images/emaillogo.png")}
          style={{
            position: "absolute",
            bottom: "80.5%",
            tintColor:'gray',
            height: screenHeight/40,
            width: screenWidth/5,
            resizeMode:'contain',
            left:'37%'
          }}
        />

        <TextInput
          style={{
            right:screenWidth/5.4,
            fontFamily: this.state.font,
            height: 40,
            textAlign: "center",
            width: "82.5%",
            bottom: "44.5%",
            zIndex: 50,
            color: "gray",
            fontSize: 18,
          }}
          underlineColorAndroid="transparent"
          placeholder="Username"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.handleusername}
        />
        <Image
          source={require("./images/tamweenyfield.png")}
          style={{
            position: "absolute",
            bottom: "74%",
            opacity: 0.8,
            height: 50.5,
            width: 273,
          }}
        />
        <Image
          source={require("./images/usernamelogo.png")}
          style={{
            position: "absolute",
            bottom: "75.5%",
            tintColor:'gray',
            height: screenHeight/40,
            width: screenWidth/5,
            resizeMode:'contain',
            left:'37%'
          }}
        />
        <TextInput
          style={{
            right:screenWidth/5.2,
            height: 40,
            textAlign: "center",
            width: "82.5%",
            bottom: "43%",
            fontFamily: this.state.font,
            zIndex: 50,
            color: "gray",
            fontSize: 18,
          }}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.handlepassword}
          secureTextEntry={true}
        />
        <Image
          source={require("./images/tamweenyfield.png")}
          style={{
            position: "absolute",
            bottom: "69%",
            opacity: 0.8,
            height: 50.5,
            width: 273,
          }}
        />
        <Image
          source={require("./images/passwordlogo.png")}
          style={{
            position: "absolute",
            bottom: "70.5%",
            tintColor:'gray',
            height: screenHeight/40,
            width: screenWidth/5,
            resizeMode:'contain',
            left:'37%'
          }}
        />
        <TextInput
          style={{
            height: 40,
            right:screenWidth/5.3,
            textAlign: "center",
            width: "82.5%",
            bottom: "41.5%",
            fontFamily: this.state.font,
            zIndex: 50,
            color: "gray",
            fontSize: 18,
          }}
          underlineColorAndroid="transparent"
          placeholder="Phone No."
          placeholderTextColor="gray"
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={this.handlephone}
        />
        <Image
          source={require("./images/tamweenyfield.png")}
          style={{
            position: "absolute",
            bottom: "64%",
            opacity: 0.8,
            height: 50.5,
            width: 273,
          }}
        />
        <Image
          source={require("./images/phonelogo.png")}
          style={{
            position: "absolute",
            bottom: "65.5%",
            tintColor:'gray',
            height: screenHeight/40,
            width: screenWidth/5,
            resizeMode:'contain',
            left:'37%'
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          this.login(
            this.state.fullname,
            this.state.useremail,
            this.state.username,
            this.state.password,
            this.state.phone
          )
        }
      >
        <Image
          source={require("./images/signupbutton.png")}
          style={{
            width: screenWidth/1,
            height: screenHeight/15,
            resizeMode: "contain",
            zIndex: 200,
            resizeMode:'contain'
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          position: "absolute",
          fontSize: 20,
          bottom: "17.6%",
          color: "gray",
          opacity: 0.8,
          left: "33%",
          fontFamily:this.state.font,
        }}
      >
        or Sign up with
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: 20,
          bottom: "18.6%",
          color: "gray",
          opacity: 0.8,
          left: screenWidth/7,
       
        }}
      >
        ______
      </Text>
      <Text
        style={{
          position: "absolute",
          fontSize: 20,
          bottom: "18.6%",
          color: "gray",
          opacity: 0.8,
          left: screenWidth/1.4,

        }}
      >
        ______
      </Text>

     {/*} <TouchableOpacity style={styles.submitButton2}>
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
      </TouchableOpacity>*/}
    </View>
  );

  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;

    return (
      <ImageBackground
        source={require("./images/splashone.png")}
        style={{ width: screenWidth, height: screenHeight }}
      >
        <Modal
          style={styles.bottomModal}
          isVisible={this.state.visibleModal === 2}
          animationIn={"slideInDown"}
          animationOut={"slideOutUp"}
          backdropOpacity={0}
          //onSwipeComplete={() => this.setState({ visibleModal: null })}
          //scrollVertical={true}
          coverScreen={false}
        >
          {this._renderModalContent()}
        </Modal>
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
 

  submitButton: {
 
    margin: "4%",
    height: "5.5%",
    width: "37%",
    bottom: screenHeight/5,
    right: screenWidth/3.2,
  },
  submitButton2: {
    position: "absolute",

    margin: "4%",
    height: "100%",
    width: "100%",
    top: "75%",
    left: "24.5%",
    zIndex: 300,
  },
  submitButton3: {
    position: "absolute",

    margin: "4%",
    height: "100%",
    width: "100%",
    top: "75%",
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
