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
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

//import {Font} from 'expo';

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userid: null,
      username: "",
      password: "",

      validation: "",

      fontLoaded: false,
      visibleModal: 2,
      checkedboxes: "",
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
    await Font.loadAsync({
      FORMAL: require("./assets/fonts/Tajawal-Regular.ttf"),
      submit: require("./assets/fonts/AnyConv.com__MyriadPro-Cond.ttf"),
    });

    this.setState({ fontLoaded: true });

    
  }

  async googleLogin()
  {
    const that = this;
    try {
      const result = await Google.logInAsync({
        androidClientId: '295549477966-mmfqj7gfej3rfq6eapjuh3igo0kqqc2b.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      
      if (result.type === 'success') {
       
        //console.log(result);
        that.props.navigation.navigate("Home",{
          username:result.user.name
        });
        that.props.navigation.navigate("Map");
        
      } else {
        console.log('cancelled')
      }
    } catch (e) {
      console.log('cancelled',e)
    }
  

  }
  async  FaceboooklogIn() {
    const that = this;
    try {
      await Facebook.initializeAsync('3636195366400231');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
       
       that.props.navigation.navigate("Home",{
        username:(await response.json()).name
      });
      that.props.navigation.navigate("Map");
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
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
        .post("http://www.tamweenymarket.com/api/user/login", {
          username: this.state.username,
          password: this.state.password,
        })
        .then(function (response) {
        
           
            that.props.navigation.navigate("Home",{
              username:response.data
            });
            that.props.navigation.navigate("Map");
            //alert("hello " + response.data + " !");
          
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
            bottom: screenHeight / 1.8,
            width: screenWidth / 2.4,
            height: screenHeight / 4,
            zIndex: 300,}} />
        <Image
          source={require("./images/login.png")}
          style={{
            resizeMode: "contain",

            bottom: screenHeight / 1.6,
            width: screenWidth / 3,
            height: screenHeight /25,
            zIndex: 300,
          }}
        />
        
        <TextInput
          style={{
            //right:screenWidth/20,
            fontFamily: this.state.font,
            height: 40,
            textAlign: 'left',
            width: screenWidth/1.8,
            bottom: "36%",
            zIndex: 400,
            color: "gray",
            //backgroundColor:'black',
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
            bottom: "75%",
            opacity: 0.8,
            height: 50.5,
            width: 273,
          }}
        />
        <Image
          source={require("./images/usernamelogo.png")}
          style={{
            position: "absolute",
            bottom: "76.5%",
            tintColor:'gray',
            height: screenHeight/40,
            width: screenWidth/5,
            resizeMode:'contain',
            left:'45%'
          }}
        />
        <TextInput
          style={{
            //right:screenWidth/5.3,
            height: 40,
            textAlign: "left",
            width: screenWidth/1.8,
            bottom: "34.5%",
            fontFamily: this.state.font,
            zIndex: 400,
            color: "gray",
            fontSize: 18,
           // backgroundColor:'black'
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
            bottom: "70%",
            opacity: 0.8,
            height: 50.5,
            width: 273,
          }}
        />
        <Image
          source={require("./images/passwordlogo.png")}
          style={{
            position: "absolute",
            bottom: "71.5%",
            tintColor:'gray',
            height: screenHeight/40,
            width: screenWidth/5,
            resizeMode:'contain',
            left:'45%'
          }}
        />
        
      </View>
      <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.username, this.state.password)}
        >
          <Image
          source={require("./images/loginbutton.png")}
          style={{
            width: screenWidth/1.2,
            
            resizeMode: "contain",
            zIndex: 50000,
            
          }}
        />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "27.6%",
            color: "gray",
            opacity: 0.8,
            left: screenWidth/3,
            fontFamily: this.state.font,
         
          }}
        >
          or Login with
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "28.6%",
            color: "gray",
            opacity: 0.8,
            left: screenWidth/5,
          }}
        >
          ___
        </Text>
        <Text
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "28.6%",
            color: "gray",
            opacity: 0.8,
            left: screenWidth/1.4,
          }}
        >
          ___
        </Text>

        <TouchableOpacity
        onPress={this.FaceboooklogIn.bind(this)}
         style={styles.submitButton2}>
          <Image
            source={require("./images/facebook.png")}
            style={{ width: screenHeight/11, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.googleLogin.bind(this)}
         style={styles.submitButton3}>
          <Image
            source={require("./images/google.png")}
            style={{ width: screenHeight/11, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        <Text
          style={{
            position: "absolute",
            fontSize: 18,
            bottom: "7.6%",
            color: "gray",
            opacity: 0.8,
            left: "10%",
            fontFamily: this.state.font,
          }}
        >
          Don't have an account?
        </Text>
        <Text
          onPress={() => {
            //on clicking we are going to open the URL using Linking
            this.props.navigation.navigate("Signup");
          }}
          style={{
            position: "absolute",
            fontSize: 20,
            bottom: "7.6%",
            color: "gray",
            opacity: 0.8,
            left: "67%",
            zIndex:10000,
            fontFamily:this.state.font,
          }}
        >
          Sign up
        </Text>
    </View>
  );

  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;

    return (
      <ImageBackground
        source={require("./images/splashone.png")}
        style={{ width: screenWidth, height: screenHeight ,zIndex:0 }}
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
    bottom:screenWidth/6,
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
 
    position:'absolute',
    height: "100%",
    width: "100%",
    top: screenHeight/3.1,
    //right: screenWidth/7,
    left:screenWidth/12,
    zIndex:301
  },
  submitButton2: {
    position: "absolute",

    margin: "4%",
    height: "100%",
    width: "100%",
    top: "63%",
    left: "24.5%",
    zIndex: 302,
  },
  submitButton3: {
    position: "absolute",

    margin: "4%",
    height: "100%",
    width: "100%",
    top: "63%",
    left: "47.5%",
    zIndex: 302,
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
