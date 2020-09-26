import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import { YellowBox } from 'react-native';
import Eventscrollnew from "./Eventscrollnew";
import Firstswipe from "./Firstswipe";
import Categories from "./Categories";
import SearchInput, { createFilter } from "react-native-search-filter";
import AsyncStorage from "@react-native-community/async-storage";
import SearchableDropDown from 'react-native-dropdown-searchable';
import * as Font from "expo-font";


const KEYS_TO_FILTERS = ["productName"];

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default class Home extends React.Component {
  static navigationOptions = {
    title: "الرئيسية",

    drawerIcon: (
      <View style={{bottom:'28%'}}>
      <Image
        source={require("./images/home.png")}
        style={{ height:30, width: 30, position: "absolute" ,resizeMode:'contain'}}
      />
      </View>
    ),
   
  };

  constructor() {
    super();
    this.spinValue = new Animated.Value(0)
    this.state = {
      finalname: null,
      counter: 0,
      categoryID: null,
      mydata: null,
      dataCart: [],
      country: "الكل",
      list:null,
      tag:null,
      searchTerm: "",
      filteredMydata: null,
      isTrue :true,
      username:null,
      font:'normal',
      long:null,
      lat:null
    
    }
    
  }
  
 /* parentMethod(data) {
    console.log(data)
    
     
      
    
  }*/
  searchUpdated(term) {
    this.setState({ searchTerm: term });
    if(term.length == 0)
    {
      this.setState({
        filteredMydata: this.state.mydata,
      
      });
    }
    else{
    const filteredProducts = this.state.mydata.filter(
      createFilter(term, KEYS_TO_FILTERS)
    );
if(filteredProducts.length != 2)
{
    this.setState({
      filteredMydata: filteredProducts,
    
    });
  }
  else{
    this.setState({
      filteredMydata: this.state.mydata,
    
    });
  }

  }

  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver:false,
        easing: Easing.linear,
        
      }
    ).start()
    //this.spinValue.setValue(1)
  }
 async componentDidMount() {
  await Font.loadAsync({
    'main':require('./assets/fonts/Tajawal-Regular.ttf')
  })

  this.setState({font:'main'})
    
   await this.setState({
      username:this.props.navigation.state.params.username,
 
    })
    console.log(this.state.username)
    YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
   // this.spin()
    
    fetch("http://www.tamweenymarket.com/api/products")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mydata: responseJson,
        });
      });
      fetch("http://www.tamweenymarket.com/api/brands")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          list: responseJson,
        });
      });
    AsyncStorage.clear();
  }

  

  render() {
    const { navigation } = this.props;
    //const username = "batates";
    //const partname = username.split(" ")[0];
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [120, 1]
    })

    return (
      <ImageBackground
        source={require("./images/mrwhite.jpg")}
        style={{ width: "100%", height: "100%", flex: 1,zIndex:0 }}
      >
        <View style={styles.header}>
          <Image
            source={require("./images/headertamween.png")}
            style={styles.headerphoto}
          />
        </View>
        <View style={styles.footer}>
          <Image
            source={require("./images/footertamween.png")}
            style={styles.footerphoto}
          />
        </View>

        <View style={styles.menu}>
          <SafeAreaView>
            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                margin: 16,
                top: "40%",
                zIndex: 500,
              }}
              onPress={this.props.navigation.openDrawer}
            >
              <Image
                source={require("./images/menutamween.png")}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        <View style={styles.cart}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.getItem("cart")
                .then((cart) => {
                  //console.log(this.state.totalprice)

                  // We have data!!
                  const cartfood = JSON.parse(cart);
                  this.props.navigation.navigate("Cart", {
                    cart: cartfood,
                    username:this.state.username
                  });
                  console.log(cartfood);
                })
                .catch((err) => {
                  alert(err);
                });
            }}
            style={{
              alignItems: "flex-end",
              margin: 16,
              top: "30%",
              zIndex: 500,
            }}
          >
            <Image
              source={require("./images/carttamween.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerbutton1}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16, zIndex: 500 }}
          >
            <Image
              source={require("./images/headerbutton1.png")}
              style={{ width: 200, height: 45,tintColor:'white' ,resizeMode:'contain'}}
            />
          </TouchableOpacity>
     
            {/*style={{bottom:'50%',zIndex:1002,textAlign: "center",}}*/}
            <SearchInput
            style={{bottom:screenHeight/15,zIndex:1002,textAlign: "center",fontFamily:this.state.font}}
            underlineColorAndroid="transparent"
            placeholder="ابحث عن منتج"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(term) => {
              this.searchUpdated(term);
            }}
          />
           
        </View>
        
        <View style={styles.headerbutton2}>

       { this.state.list? (<SearchableDropDown
          onTextChange={tag => {
            this.setState({ tag:tag });
            if(this.state.tag == '')
            {
              fetch("http://www.tamweenymarket.com/api/products")
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  mydata: responseJson,
                });
              });
            }
          }}
          onItemSelect={item => {
            this.setState({ tagItem: item });
            fetch("http://www.tamweenymarket.com/api/brands/"+item._id)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                mydata: responseJson,
              });
            });
          }}
          itemText={{fontFamily:this.state.font}}
          items={this.state.list}
          defaultIndex={0}
          resetValue={false}
          placeholder={'الماركات'}
          placeholderTextColor={'gray'}
          underlineColorAndroid="transparent"
          
        />)
        :
        (<View></View>)}
        </View>
        <ScrollView style={{ width: screenWidth, height: screenHeight, zIndex: 0 }}>
          <View style={styles.container}>
            {/*<Image source={require('./images/cairojazz.png')} style={styles.logo} />*/}
          </View>

          <View style={{ flex: 1, bottom: "20%", height: "10%" }}>
            <Firstswipe />
          </View>

          <View
            style={{
              position: "absolute",
              top: "29.5%",
              left: "73%",
              zIndex: 100,
            }}
          >
            <Image
              source={require("./images/arabicTASNEFAAT.png")}
              style={{ width: screenWidth / 4, height: screenHeight / 25 }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "37%",
              height: screenHeight / 3,
              width: screenWidth,
              zIndex: 1001,
              left: "8%",
            }}
          >
            <Categories navigation={this.props.navigation} />
          </View>

          {this.state.filteredMydata ? (
            <View
              style={{
                position: "absolute",
                top: "7.5%",
                height: 850,
                width: 600,
                zIndex: 500,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
               // onRef={ref => (this.parentReference = ref)}
               // parentReference = {this.parentMethod.bind(this)}
                products={this.state.filteredMydata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
           {this.state.mydata!=null && this.state.filteredMydata == null? (
            <View
              style={{
                position: "absolute",
                top: "7.5%",
                height: 850,
                width: 600,
                zIndex: 999,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
              //onRef={ref => (this.parentReference = ref)}
              //parentReference = {this.parentMethod.bind(this)}
                products={this.state.mydata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
          <View style={{ position: "absolute", bottom: "49%", zIndex: 2 }}>
            <Image
              source={require("./images/graybg.png")}
              style={{ width: screenWidth, height: screenHeight / 4.5 }}
            />
          </View>

          <TouchableOpacity
            style={{
              position: "absolute",
              margin: 16,
              top: "50%",
              left: "17%",
              zIndex: 1001,
            }}
          >
            <Image
              source={require("./images/yellowbutton.png")}
              style={{ width: 120, height: 57 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "absolute",
              margin: 16,
              top: "50%",
              left: "47%",
              zIndex: 1001,
            }}
          >
            <Image
              source={require("./images/redbutton.png")}
              style={{ width: 120, height: 57 }}
            />
          </TouchableOpacity>

          <View style={{ position: "absolute", bottom: "16%", zIndex: 200 }}>
            <Image
              source={require("./images/graybg.png")}
              style={{ width: 420, height: 260 }}
            />
          </View>

          <View style={{ bottom: "17%", zIndex: 200 }}>
            <Image
              source={require("./images/shelf2.png")}
              style={{ width: 412, height: 200 }}
            />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: "39%",
              zIndex: 201,
              left: "69%",
            }}
          >
            <Image
              source={require("./images/specialproducts.png")}
              style={{ width: 115, height: 33 }}
            />
          </View>
        </ScrollView>
      
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
 
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    zIndex:0
  },
  header: {
    
    zIndex: 5000,
    width: screenWidth,
    height: screenHeight / 9,
    top: "0%",
    alignItems:'center',
    position: "absolute",
  },
  headerphoto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode:'contain'
   
  },
  footer: {
    alignItems:'center',
    zIndex: 5000,
    width: screenWidth,
    height: screenHeight / 10.5,
    bottom: "0%",
    position: "absolute",
  },
  footerphoto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    resizeMode:'contain'
  },
  textmenu: {
    color: "#541e1b",
    fontSize: 20,
    fontWeight: "500",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",

    bottom: "37.5%",
    paddingTop: "1%",
    width: "17%",
    height: "17%",
    zIndex: 3,
  },
  menu: {
    zIndex: 100000,
    position: "absolute",
  },
  cart: {
    zIndex: 5000,
    position: "absolute",
    left: "82%",
  },
  headerbutton1: {
    zIndex: 5000,
    position: "absolute",
    left: "35%",
    top: "2.5%",
  },
  headerbutton2: {
    zIndex: 5000,
    position: "absolute",
    left: "25%",
    top: screenHeight/20,
    
  },
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    bottom: 520,
    left: 15,
    paddingTop: 100,
    width: 50,
    height: 50,
    tintColor: "#541e1b",
    zIndex: 3,
  },
  profile2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    bottom: 620,
    left: 16,
    paddingTop: 100,
    width: 47,
    height: 47,
    borderRadius: 400 / 2,
    zIndex: 3,
  },
  miniback: {
    flex: 1,

    position: "absolute",
    bottom: 465,
    paddingTop: 100,
    width: "100%",
    height: 250,
  },
  minibacktwo: {
    flex: 2,
    position: "absolute",
    bottom: 1,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: 710,
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


  SeparatorLine: {
    backgroundColor: "#00008b",
    width: 1,
    height: 32,
  },
});
