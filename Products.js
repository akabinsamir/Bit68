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
} from "react-native";
import Modal from "react-native-modal"; // 2.4.0
import { AntDesign } from '@expo/vector-icons';
import SearchInput, { createFilter } from "react-native-search-filter";
import Eventscrollnew from "./Eventscrollnew";
import Firstswipe from "./Firstswipe";
import Subcategory from "./Subcategory";
import Brands from "./Brands";
import AsyncStorage from "@react-native-community/async-storage";
import * as Font from "expo-font";

const KEYS_TO_FILTERS = ["productName"];

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

class Products extends React.Component {
  static navigationOptions = {
    title: "المنتجات",
    drawerIcon: (
      <View style={{ bottom: "28%" }}>
        <Image
          source={require("./images/products.png")}
          style={{
            height: 30,
            width: 30,
            position: "absolute",
            resizeMode: "contain",
          }}
        />
      </View>
    ),
  };

  constructor() {
    super();

    this.state = {
      date: "",
      switchValue: false,
      finalname: null,
      visibleModal: null,
      mydata: null,
      searchTerm: "",
      filteredMydata: null,
      isTrue: true,
      mycatName: null,
      mybrands: null,
      subc: null,
      mycategories: null,
      mycatdata:null,
      font:'normal',
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
    if (term.length == 0) {
      this.setState({
        filteredMydata: this.state.mydata,
      });
    } else {
      const filteredProducts = this.state.mydata.filter(
        createFilter(term, KEYS_TO_FILTERS)
      );

      if (filteredProducts.length != 2) {
        this.setState({
          filteredMydata: filteredProducts,
        });
      } else {
        this.setState({
          filteredMydata: this.state.mydata,
        });
      }
    }
  }
  brandupdate(x) {
    this.setState({
      filteredMydata: x,
    });
  }
  subcupdate(x) {
    this.setState({
      filteredMydata: x,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.navigation.state.params.link !==
      this.props.navigation.state.params.link
    ) {
      this.setState({
        mydata: null,
        mycatName: null,
      });
      const { navigation } = this.props;
      const { link } = navigation.state.params;
      const { cat } = navigation.state.params;

      fetch("http://www.tamweenymarket.com/api/categories/" + link)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            mydata: responseJson,
            mycatName: cat,
          });
          fetch(
            "http://www.tamweenymarket.com/api/categories/" + link + "/brands"
          )
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                mybrands: responseJson,
              });
              fetch(
                "http://www.tamweenymarket.com/api/categories/" + link + "/subc"
              )
                .then((response) => response.json())
                .then((responseJson) => {
                  this.setState({
                    subc: responseJson,
                  });
                  fetch("http://www.tamweenymarket.com/api/categories/")
                    .then((response) => response.json())
                    .then((responseJson) => {
                      this.setState({
                        mycategories: responseJson,
                      });
                    });
                });
            });
        });
    }
  }
  async componentDidMount() {
   
    await Font.loadAsync({
      'main':require('./assets/fonts/Tajawal-Regular.ttf')
    })

    this.setState({font:'main'})

    const { navigation } = this.props;
    if (!navigation.state.params) {
      const link = "5f4fbc57782b7f1c0ceab1f0";
    } else if (navigation.state.params.link != null) {
      const { navigation } = this.props;
      const { link } = navigation.state.params;
      const { cat } = navigation.state.params;

      this.setState({
        mycatName: cat,
      });

      fetch("http://www.tamweenymarket.com/api/categories/" + link)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            mydata: responseJson,
          });
        });
      fetch("http://www.tamweenymarket.com/api/categories/" + link + "/brands")
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            mybrands: responseJson,
          });
        });
      fetch("http://www.tamweenymarket.com/api/categories/" + link + "/subc")
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            subc: responseJson,
          });
        });
      fetch("http://www.tamweenymarket.com/api/categories/")
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            mycategories: responseJson,
          });
        });
    }
  }

  /* toggleSwitch = (value) => {
          //onValueChange of the switch this function will be called
          this.setState({switchValue: value})
          //state changes according to switch
          //which will result in re-render the text
      }*/
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <ScrollView
        style={{
          position: "absolute",
          width: "100%",
          height: screenHeight / 2.4,
          zIndex: 40000,
          left: "5%",
        }}
      >
        <View style={{ right: "5%" }}>
          <View style={{ position: "absolute", left: "10%" }}>
            {this.state.mycategories ? (
              this.state.mycategories.map((item, i) => {
                while (i >= this.state.mycategories.length / 2) {
                  return (
                    <Text
                    onPress={async() => {
                      //on clicking we are going to open the URL using Linking
                     await fetch("http://www.tamweenymarket.com/api/categories/" + item._id)
                      .then((response) => response.json())
                      .then((responseJson) => {
                        this.setState({
                          mycatdata: responseJson,
                          mycatName:item.name
                        });
                        console.log(responseJson)
                        this.setState({visibleModal:null})
                      });
                    }}
                    style={(item.name==this.state.mycatName) ? styles.catTextright2 : styles.catTextright}
                    >
                      {item.name}
                    </Text>
                  );
                }
              })
            ) : (
              <View></View>
            )}
          </View>
          <View>
            {this.state.mycategories ? (
              this.state.mycategories.map((item, i) => {
                while (i < this.state.mycategories.length / 2) {
                  return (
                    <Text
                    onPress={async() => {
                      //on clicking we are going to open the URL using Linking
                     await fetch("http://www.tamweenymarket.com/api/categories/" + item._id)
                      .then((response) => response.json())
                      .then((responseJson) => {
                        this.setState({
                          mycatdata: responseJson,
                          mycatName:item.name
                        });

                        console.log(responseJson)
                        this.setState({visibleModal:null})
                      });
                    }}
                      style={(item.name==this.state.mycatName) ? styles.catTextleft2 : styles.catTextleft}
                    >
                      {item.name}
                    </Text>
                  );
                }
              })
            ) : (
              <View></View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );

  render() {
    const { navigation } = this.props;

    const username = "batates";
    const partname = username.split(" ")[0];
    //const filteredEmails = mydata.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    if (partname.length > 10) {
      this.state.finalname = partname.substring(0, 10) + "..";
    }

    return (
      <ImageBackground
        source={require("./images/mrwhite.jpg")}
        style={{ width: "100%", height: "100%", flex: 1, zIndex: 0 }}
      >
        {/*  <NavigationEvents
                onDidFocus={this.myfunction()}
              />*/}
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

        {/*} <View style={styles.footerprice}>
          <Image
            source={require("./images/footerpricebg.png")}
            style={styles.footerphoto}
          />
            </View>*/}

        <View style={styles.menu}>
          <SafeAreaView>
            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                margin: 16,
                top: "40%",
                zIndex: 500000,
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
                  });
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
          <SearchInput
            style={{
              margin: 5,
              height: 60,
              opacity: 1,
              width: "82.5%",
              bottom: "2%",
              left: "15%",
              textAlign: "center",
              fontFamily: this.state.font,
              color: "gray",
              

              fontSize: 20,
              zIndex: 5001,
            }}
            underlineColorAndroid="transparent"
            placeholder="ابحث عن منتج"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(term) => {
              this.searchUpdated(term);
            }}
          />

          <Image
            source={require("./images/searchbar.png")}
            style={{ width: 220, height: 40, bottom: "50%", left: "7%" }}
          />
        </View>
        <View style={styles.headerbuttoncat}>
          <TouchableOpacity
            onPress={() => {
              {
                /*} this.numberCarousel.scrollToIndex(index);*/
              }
              //this.state.modaldate=this.state.mydata[index].startDate
              //this.state.eventid = this.state.mydata[index].id
              this.setState({ visibleModal: 2 });
            }}
            style={{ margin: 16, zIndex: 500 }}
          >
            <Text
              style={{
                color: "#80fc38",
                fontSize: 20,
                textAlign: "center",
                fontFamily: this.state.font,
              }}
            >
              {this.state.mycatName} 
            </Text>
            <AntDesign style={{top:"35%",position:'absolute', zIndex:500,left:'40%'}} name="caretdown" size={10} color="#80fc38" />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ width: "100%", height: "100%" }}>
          <View style={styles.container}></View>

          <View style={{ flex: 1, top: "12%", height: "29%", opacity: 0 }}>
            <Firstswipe />
          </View>
          {/*<View style={{top:'18%'}}>
            <Image source={require('./images/backgroundCUT.png')} style={styles.minibacktwo} />
        </View>*/}
          <View
            style={{
              position: "absolute",
              top: "13%",
              left: "51%",
              zIndex: 100,
            }}
          >
            <Image
              source={require("./images/subcatword.png")}
              style={{ width: 180, height: 33 }}
            />
            {/*Text to show the text according to switch condition*/}
          </View>
          {this.state.subc ? (
            <View
              style={{
                position: "absolute",
                bottom: "74%",
                height: screenHeight/10,
                width: screenWidth,
                zIndex: 1000,
                left: "5%",
              }}
            >
              <Subcategory
                functionPropNameHere={this.subcupdate.bind(this)}
                subc={this.state.subc}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
          {this.state.filteredMydata ? (
            <View
              style={{
                position: "absolute",
                bottom: "25.5%",
                height: 850,
                width: 600,
                zIndex: 500,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
                products={this.state.filteredMydata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}


{this.state.mycatdata ? (
            <View
              style={{
                position: "absolute",
                bottom: "25.5%",
                height: 850,
                width: 600,
                zIndex: 500,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
                products={this.state.mycatdata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
          

          {this.state.mydata != null && this.state.filteredMydata == null ? (
            <View
              style={{
                position: "absolute",
                bottom: "25.5%",
                height: 850,
                width: 600,
                zIndex: 500,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
                products={this.state.mydata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
          <View style={{ position: "absolute", bottom: "72%", zIndex: 2 }}>
            <Image
              source={require("./images/catbg.png")}
              style={{ width: 500, height: 110, resizeMode: "stretch" }}
            />
          </View>

          <View style={{ position: "absolute", bottom: "29%", zIndex: 200 }}>
            <Image
              source={require("./images/sanfbg.png")}
              style={{ width: 420, height: 400 }}
            />
          </View>

          <View style={{ bottom: "35.7%", zIndex: 200 }}>
            <Image
              source={require("./images/shelf2.png")}
              style={{ width: 412, height: 200 }}
            />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: "65%",
              zIndex: 201,
              left: "40%",
            }}
          >
            <Image
              source={require("./images/sanfword.png")}
              style={{ width: 80, height: 29 }}
            />
          </View>

          {this.state.mybrands ? (
            <View
              style={{
                position: "absolute",
                bottom: "55%",
                height: '10%',
                width: 500,
                zIndex: 1000,
                left: "0.5%",
              }}
            >
              <Brands
                brands={this.state.mybrands}
                functionPropNameHere={this.brandupdate.bind(this)}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
        </ScrollView>
        <Modal
          style={styles.bottomModal}
          isVisible={this.state.visibleModal === 2}
          animationIn={"slideInDown"}
          animationOut={"slideOutUp"}
          onBackdropPress={() => this.setState({ visibleModal: null })}
        >
          {this._renderModalContent()}
        </Modal>
      </ImageBackground>
    );
  }
}
export default Products;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    top: 0,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    zIndex: 5000,
    width: screenWidth,
    height: screenHeight / 9,
    top: "0%",
    alignItems: "center",
    position: "absolute",
  },
  headerphoto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  footer: {
    alignItems: "center",
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

    resizeMode: "contain",
  },
  footerprice: {
    flex: 1,
    zIndex: 499,
    width: "100%",
    height: "11%",
    bottom: "3%",

    position: "absolute",
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
    zIndex: 500000,
    position: "absolute",
  },
  cart: {
    zIndex: 5002,
    position: "absolute",
    left: "82%",
  },
  headerbutton1: {
    zIndex: 5001,
    position: "absolute",
    left: "19%",
    top: "7%",
  },
  headerbuttoncat: {
    zIndex: 5001,
    position: "absolute",
    top: "2.5%",
    width: screenWidth,
  },
  headerbutton2: {
    zIndex: 5001,
    position: "absolute",
    left: "20%",
    top: "3.8%",
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

  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20,
  },

  SeparatorLine: {
    backgroundColor: "#00008b",
    width: 1,
    height: 32,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    bottom: "39.5%",
    alignItems: "center",
    borderRadius: 50,
    width: "100%",
    height: "55%",

    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  catTextleft:
  {
    fontSize: 25,
    padding: 15,
    borderBottomWidth: 1,
    color:'gray',
    borderColor: "gray",
    marginLeft: "58%",
    
  },
  catTextleft2:
  {
    fontSize: 25,
    padding: 15,
    borderBottomWidth: 1,
    color:'#80fc38',
    borderColor: "#80fc38",
    marginLeft: "58%",
  },
  catTextright:
  {
    fontSize: 25,
    padding: 15,
    borderBottomWidth: 1,
    color:'gray',
    borderColor: "gray",
    marginRight: "58%",
  },
  catTextright2:
  {
    fontSize: 25,
    padding: 15,
    borderBottomWidth: 1,
    color:'#80fc38',
    borderColor: "#80fc38",
    marginRight: "58%",
  },
});
