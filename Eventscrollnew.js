import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
 
} from "react-native";
import Draggable from 'react-native-draggable';
import Carousel from "react-native-anchor-carousel";
import axios from "axios";
import Modal from "react-native-modal"; // 2.4.0
import AsyncStorage from "@react-native-community/async-storage";
import * as Font from "expo-font";


const { width } = Dimensions.get("window").width;
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;


class Eventscrollnew extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      mydata: [],
      myitem: [],
      dataCart: [],
      fontLoaded: false,

      visibleModal: null,

      productname: null,
      eventid: null,
      modaldescription: null,
      productimage: "http://www.tamweenymarket.com/uploads/me.jpeg",
      sizeAndPrice:null,
      allowimage: false,

      attendees: 1,
      specialRequest: null,
      phone: null,
      details: true,
      addtocartbutton: [],


      categoryID: null,
      isRefreshing: false,
      myRelateddata:null,

      firstoption:false,
      message:null,
      font:'normal',

      counter:[],
      sizenumbers:[0,0,0]
    };
    
  }
 /* componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products){
      
      this.setState({
        mydata:this.props.products
    })
    }
  
  }*/
  componentDidUpdate(prevProps) {
    if (
      prevProps.products !==
      this.props.products
    ) {
      this.setState({
        mydata:this.props.products
    })

    }
  }
 async componentDidMount() {
    await Font.loadAsync({
      'main':require('./assets/fonts/Tajawal-Regular.ttf')
    })

    this.setState({font:'main'})
  
   
    this.setState({
        mydata:this.props.products
    })
    
  
    
  }
 
  async onChangeQual(i,type,data,sized,priced)
  {
    
    const dataCar = this.state.sizenumbers
    let cantd = dataCar[i]
 

    const obj = {
      productname: data.productName,
      productimage: data.productimage,
      productsize:sized,
      price: priced,
      quantity: 1,
    };

    if (type) {
      

      cantd = cantd + 1
      dataCar[i] = cantd
      this.setState({sizenumbers:dataCar})
     
     
     
      this.state.counter.push(obj)
  
      //console.log(this.state.counter)
    }
    else if (!type){
      cantd = cantd - 1
      dataCar[i] = cantd
      this.setState({sizenumbers:dataCar})
      //-----------------------
      //const mytemcounter = this.state.counter
      this.state.counter.map((item, i) => {
        if(item.productsize ==sized && item.productname==data.productName)
        {
           this.state.counter.splice(i, 1)
          //this.setState({counter:mytemcounter})
         // console.log(this.state.counter)
        }
      })
      

    }

  }
  

  modal1() {}

  _renderModalContent = () =>
    this.state.details ? (
      <View style={styles.modalContent}>
        <Image
          source={require("./images/slidebutton.png")}
          style={{
            position: "absolute",
            bottom: "96.5%",
            width: 40,
            height: 10,
          }}
        />

        <Image
          source={require("./images/detailstitlebg.png")}
          style={{
            position: "absolute",
            bottom: "87%",
            width: "100%",
            height: 37,
          }}
        />
        <Text
          style={{
            position: "absolute",
            bottom: "88%",
            fontSize:15,
            fontFamily: this.state.font,
          }}
        >{this.state.productname}</Text>
        <Image
          source={{ uri: this.state.productimage }}
          style={{
            position: "absolute",
            bottom: "47%",
            width: "46%",
            height: "38%",
            right: "52%",
            resizeMode: "contain",
          }}
        />
        {/*----------------------------------------------------------------- */}
          
        {this.state.sizeAndPrice? (this.state.sizeAndPrice.map((item, i) => {
         return (
          <View style={{width:'60%',height:'8.5%',left:'15%',bottom:'32%',flexDirection:'row',paddingBottom:5,margin:5, }}>
          <Image
        source={require("./images/sizebg.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
      />
      <TouchableOpacity
        onPress={()=>this.onChangeQual(i,true,this.state.myitem,item.size,item.price)}
        style={{ position: "absolute", left:'70%',top:'15%',zIndex:500}}
 
      >
        <Image
          source={require("./images/plusicon.png")}
          style={{ width: 35, height: 35,resizeMode:'contain' }}
        />
      </TouchableOpacity>
      <Text
        style={{
          position: "absolute",
          top:'17%',
          left:'65%',
          fontWeight: "bold",
          fontFamily:this.state.font,
          fontSize: 15,
        }}
      >
        {this.state.sizenumbers[i]}
      </Text>
      <TouchableOpacity
      onPress={()=>this.onChangeQual(i,false,this.state.myitem,item.size,item.price)}
        style={{ position: "absolute", left:'50%',top:'15%',zIndex:500}}
      
      >
        <Image
          source={require("./images/minceicon.png")}
          style={{ width: 35, height: 35 }}
        />
      </TouchableOpacity>
        <Text style={{left:'20%',top:'5%',position:'absolute',fontFamily:this.state.font,}}>{item.size}</Text>
        <Text style={{left:'20%',top:'45%',position:'absolute',fontFamily:this.state.font,}}>{item.price} EGP</Text>
       
    
       </View>
         );
      })):(<View></View>)}
         
        
       
        {/*----------------------------------------------------------------- */}
       
      
        {/*----------------------------------------------------------------- */}
        <TouchableOpacity
          onPress={() => this.onClickAddCart2(this.state.counter)}
          style={{
            position: "absolute",
            bottom: "44%",
            left: "46%",
            zIndex: 1000,
          }}
        >
          <Image
            source={require("./images/addtocartbutton.png")}
            style={{ width: 220, height: 100, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/secondbgdetails.png")}
          style={{
            position: "absolute",
            bottom: "26%",
            width: "100%",
            height: 130,
          }}
        />
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/sharebutton.png")}
          style={{
            position: "absolute",
            bottom: "35%",
            width: "18%",
            height: "18%",
            left: "80%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/sharelogo.png")}
          style={{
            position: "absolute",
            bottom: "42.5%",
            width: "3%",
            height: "3%",
            left: "91%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/shareword.png")}
          style={{
            position: "absolute",
            bottom: "41.5%",
            width: "7%",
            height: "5%",
            left: "83%",
            resizeMode: "contain",
          }}
        />
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/addtolistbutton.png")}
          style={{
            position: "absolute",
            bottom: "35%",
            width: "25%",
            height: "18%",
            left: "57%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/addtolistlogo.png")}
          style={{
            position: "absolute",
            bottom: "42.5%",
            width: "3%",
            height: "3%",
            left: "76%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/addtolistword.png")}
          style={{
            position: "absolute",
            bottom: "41%",
            width: "13%",
            height: "6%",
            left: "61%",
            resizeMode: "contain",
          }}
        />
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/otheropinionword.png")}
          style={{
            position: "absolute",
            bottom: "36%",
            width: "15%",
            height: "6%",
            left: "80%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/opinionlogo.png")}
          style={{
            position: "absolute",
            bottom: "31%",
            width: "10%",
            height: "6%",
            left: "86%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/addopinionword.png")}
          style={{
            position: "absolute",
            bottom: "26%",
            width: "15%",
            height: "6%",
            left: "80%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/namenickname.png")}
          style={{
            position: "absolute",
            bottom: "33%",
            width: "15%",
            height: "6%",
            left: "70%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/opinionexample.png")}
          style={{
            position: "absolute",
            bottom: "31%",
            width: "30%",
            height: "6%",
            left: "55%",
            resizeMode: "contain",
          }}
        />
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/detailsline.png")}
          style={{
            position: "absolute",
            bottom: "31%",
            width: "2%",
            height: "10%",
            left: "48%",
            resizeMode: "contain",
          }}
        />
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/desclogo.png")}
          style={{
            position: "absolute",
            bottom: "41%",
            width: "5%",
            height: "5%",
            left: "40%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/descword.png")}
          style={{
            position: "absolute",
            bottom: "39%",
            width: "10%",
            height: "10%",
            left: "28%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/descexample.png")}
          style={{
            position: "absolute",
            bottom: "32%",
            width: "20%",
            height: "10%",
            left: "27%",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/descexample.png")}
          style={{
            position: "absolute",
            bottom: "30%",
            width: "20%",
            height: "10%",
            left: "27%",
            resizeMode: "contain",
          }}
        />
        <TouchableOpacity
          onPress={() => {
            {
              /*} this.numberCarousel.scrollToIndex(index);*/
            }
            //this.state.modaldate=this.state.mydata[index].startDate
            //this.state.eventid = this.state.mydata[index].id
            this.setState({ details: false });
          }}
          style={{
            bottom: "27.5%",
            position: "absolute",
            zIndex: 15000,
            right: "55%",
          }}
        >
          <Image
            source={require("./images/showmorebutton.png")}
            style={{ width: 90, height: 20 }}
          />
        </TouchableOpacity>
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/secondbgdetails.png")}
          style={{
            position: "absolute",
            bottom: "0%",
            width: "100%",
            height: 150,
          }}
        />
        {/*------------------------------------------------------------------- */}
        <Image
          source={require("./images/similarproductsword.png")}
          style={{
            position: "absolute",
            bottom: "19%",
            width: "21%",
            height: "6%",
            left: "75%",
            resizeMode: "contain",
          }}
        />
        {/*------------------------------------------------------------------- */}
       { this.state.myRelateddata? (<TouchableOpacity onPress={
         () => {
          //this.numberCarousel.scrollToIndex(index)
          
          this.state.productname = this.state.myRelateddata[0].productName;
          this.state.eventid = this.state.myRelateddata[0]._id;
          this.state.productimage = this.state.myRelateddata[0].productimage;
          this.state.myitem = this.state.myRelateddata[0];
          
         
          this.setState({ visibleModal: 5 });

          fetch('http://www.tamweenymarket.com/api/products/'+ this.state.myRelateddata[0]._id+'/related')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              myRelateddata: responseJson,
            });
          });
  
        }
       } style={{position:'absolute',width:'60%',height:'70%',top:'30%',zIndex:5,left:'65%'}}>
        <Image
          source={{uri:this.state.myRelateddata[0].productimage}}
          style={{
            position: "absolute",
            bottom: "7%",
            width: "30%",
            height: "20%",
            left:'10.5%',
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/detailsprodnamebox.png")}
          style={{
            position: "absolute",
            top: "81%",
            width: "50%",
            height: "30%",
            
            resizeMode: "contain",
          }}
        />
        <Text style={{position:'absolute', top: "92%",
            width: "25%",
            height: "12%",
            left:'10%',
            fontSize:10,
            fontFamily:this.state.font,}}>{this.state.myRelateddata[0].productName}</Text>
            </TouchableOpacity>):(<View></View>)}
        
        
            { this.state.myRelateddata? (<TouchableOpacity onPress={
         () => {
          //this.numberCarousel.scrollToIndex(index)
          
          this.state.productname = this.state.myRelateddata[1].productName;
          this.state.eventid = this.state.myRelateddata[1]._id;
          this.state.productimage = this.state.myRelateddata[1].productimage;
          this.state.myitem = this.state.myRelateddata[1];
          this.setState({ visibleModal: 5 });

          fetch('http://www.tamweenymarket.com/api/products/'+ this.state.myRelateddata[1]._id+'/related')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              myRelateddata: responseJson,
            });
          });
  
        }
       } style={{position:'absolute',width:'60%',height:'70%',top:'30%',zIndex:4,left:'35%'}}>
        <Image
          source={{uri:this.state.myRelateddata[1].productimage}}
          style={{
            position: "absolute",
            bottom: "7%",
            width: "30%",
            height: "20%",
            left:'10.5%',
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/detailsprodnamebox.png")}
          style={{
            position: "absolute",
            top: "81%",
            width: "50%",
            height: "30%",
            
            resizeMode: "contain",
          }}
        />
        <Text style={{position:'absolute', top: "91.5%",
            width: "25%",
            height: "12%",
            left:'10%',
            fontSize:11,fontFamily:this.state.font,}}>{this.state.myRelateddata[1].productName}</Text>
            </TouchableOpacity>):(<View></View>)}
        
            {this.state.myRelateddata?(<TouchableOpacity 
            onPress={
              () => {
               //this.numberCarousel.scrollToIndex(index)
               
               this.state.productname = this.state.myRelateddata[2].productName;
               this.state.eventid = this.state.myRelateddata[2]._id;
               this.state.productimage = this.state.myRelateddata[2].productimage;
               this.state.myitem = this.state.myRelateddata[2];
               this.setState({ visibleModal: 5 });
     
               fetch('http://www.tamweenymarket.com/api/products/'+ this.state.myRelateddata[2]._id+'/related')
               .then((response) => response.json())
               .then((responseJson) => {
                 this.setState({
                   myRelateddata: responseJson,
                 });
               });
       
             }
            } style={{position:'absolute',width:'60%',height:'70%',top:'30%',zIndex:3,left:'5%'}}>
        <Image
          source={{uri:this.state.myRelateddata[2].productimage}}
          style={{
            position: "absolute",
            bottom: "7%",
            width: "30%",
            height: "20%",
            left:'10.5%',
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("./images/detailsprodnamebox.png")}
          style={{
            position: "absolute",
            top: "81%",
            width: "50%",
            height: "30%",
            
            resizeMode: "contain",
          }}
        />
        <Text style={{position:'absolute', top: "91.5%",
            width: "25%",
            height: "12%",
            left:'10%',
            fontSize:11,fontFamily:this.state.font,}}>{this.state.myRelateddata[2].productName}</Text>
            </TouchableOpacity>):(<View></View>)}
      </View>
    ) : (
      <View style={styles.modalContent}>
        <Image
          source={require("./images/slidebutton.png")}
          style={{
            position: "absolute",
            bottom: "96.5%",
            width: 40,
            height: 10,
          }}
        />

        <Image
          source={require("./images/detailstitlebg.png")}
          style={{
            position: "absolute",
            bottom: "87%",
            width: "100%",
            height: 37,
          }}
        />
        <Image
          source={require("./images/tafaseel.png")}
          style={{
            position: "absolute",
            bottom: "87.5%",
            width: "35%",
            height: 37,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ details: true });
          }}
          style={{
            bottom: "88%",
            position: "absolute",
            right: "90%",
            zIndex: 15000,
          }}
        >
          <Image
            source={require("./images/backbutton.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>

        {/*---------------------------------------------------------------------- */}
        <Image
          source={require("./images/noncurvybg.png")}
          style={{
            position: "absolute",
            bottom: "58%",
            width: "100%",
            height: "25%",
          }}
        />
        <Image
          source={require("./images/wasf.png")}
          style={{
            position: "absolute",
            bottom: "76.5%",
            width: "15%",
            height: 37,
            left: "80%",
          }}
        />
        <Image
          source={require("./images/wasfdesc.png")}
          style={{
            position: "absolute",
            bottom: "61.5%",
            width: "90%",
            height: "14%",
          }}
        />
        {/*---------------------------------------------------------------------- */}
        <Image
          source={require("./images/curvybg.png")}
          style={{
            position: "absolute",
            bottom: "31%",
            width: "95%",
            height: "25%",
          }}
        />
        <Image
          source={require("./images/momasas.png")}
          style={{
            position: "absolute",
            bottom: "50.5%",
            width: "40%",
            height: 28,
            left: "53%",
          }}
        />
        <Image
          source={require("./images/group4.png")}
          style={{
            position: "absolute",
            bottom: "45.5%",
            width: "50%",
            height: "3.5%",
            left: "42%",
          }}
        />
        <Image
          source={require("./images/group8.png")}
          style={{
            position: "absolute",
            bottom: "40.5%",
            width: "22%",
            height: "3%",
            left: "70%",
          }}
        />
        {/*---------------------------------------------------------------------- */}
        <Image
          source={require("./images/curvybg.png")}
          style={{
            position: "absolute",
            bottom: "4%",
            width: "95%",
            height: "25%",
          }}
        />
        <Image
          source={require("./images/specs.png")}
          style={{
            position: "absolute",
            bottom: "23%",
            width: "25%",
            height: 28,
            left: "65%",
          }}
        />
        <Image
          source={require("./images/model.png")}
          style={{
            position: "absolute",
            bottom: "16.5%",
            width: "15%",
            height: "3.5%",
            left: "75%",
          }}
        />
        <Image
          source={require("./images/color.png")}
          style={{
            position: "absolute",
            bottom: "12.5%",
            width: "11%",
            height: "3.5%",
            left: "79%",
          }}
        />
        <Image
          source={require("./images/maining.png")}
          style={{
            position: "absolute",
            bottom: "8.5%",
            width: "27%",
            height: "3%",
            left: "63%",
          }}
        />
        {/*---------------------------------------------------------------------- */}
      </View>
    );

  renderItem = ({ item, index }) => {
    const { startDate, content, productimage, productName,_id ,productprice,sizeAndPrice} = item;

    return (
      
      <View
        style={{
          flex: 1,
          height: 500,
          zIndex: 9000,
        }}
      >
      
        <TouchableOpacity
          //activeOpacity={1}
          style={styles.item}
          onPress={() => {
           
          }}
        >
          <Image
            source={require("./images/productnamebox.png")}
            style={{
              width: 127,
              height: 80,
              bottom: 120,
              left: "2%",
              resizeMode: "contain",
              position: "absolute",
              zIndex: 9,
            }}
          />
          <View style={{position:'absolute',width:'75%',bottom:'80%',left:'10%'}}>
          <Text style={{ fontSize: 15, zIndex: 10,textAlign:'center',fontFamily:this.state.font,}}>
            {productName}
          </Text>
          </View>
          <Draggable 
            imageSource={{uri:productimage}} 
            renderSize={100} 
            x={10}
            y={75}
            z={10}
            shouldReverse={true}
            //onDrag={}
            //onDrag={()=>this.props.parentReference('data')}
           
            onDragRelease={(gestureState)=>
              //this.onClickAddCart(this.state.mydata[index])
              {gestureState.nativeEvent.locationX >=screenWidth/2.4 ? (this.onClickAddCart(this.state.mydata[index])):(alert('please drag the item to the footer'))}
            }
        />  
        
          {/*<Image
            source={{ uri: productimage }}
            style={styles.imageBackground}
          />*/}
        </TouchableOpacity>
        <TouchableOpacity style={{zIndex:1000000}}  onPress={() => {
              //this.numberCarousel.scrollToIndex(index)
              
              this.state.productname = this.state.mydata[index].productName;
              this.state.eventid = this.state.mydata[index]._id;
              this.state.productimage = this.state.mydata[index].productimage;
              this.state.myitem = this.state.mydata[index];
             
              
              this.state.sizeAndPrice=this.state.mydata[index].sizeAndPrice;
              
              this.setState({sizenumbers:[0,0,0]})
              this.setState({counter:[]})
              this.setState({ visibleModal: 5 });

              fetch('http://www.tamweenymarket.com/api/products/'+ this.state.mydata[index]._id+'/related')
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  myRelateddata: responseJson,
                });
              });

              
      
            }} style={styles.item2}>
          <Image
            source={require("./images/sizeofprod.png")}
            style={{
              width: 89,
              height: 18,
              resizeMode: "contain",
              position: "absolute",
              zIndex: 100001,
            }}
          />
          <Text style={{zIndex:100002,top:'13%',color:'red',textAlign:'center',left:'5%',fontFamily:this.state.font,}}>{sizeAndPrice[0].price} EGP</Text>
          <Image
            source={require("./images/sizesbutton.png")}
            style={{
              width: 150,
              height: 95,
              left: "3%",
              resizeMode: "contain",
              position: "absolute",
              zIndex: 9,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    
    return (
      //THIS IS A ONE MODAL FOR EVERY EVENT WITH DIFFERENT INFORMATION DEPENDS ON THE INDEX  (MODAL TO RESERVE AN EVENT)

      <View style={{ height: "40%", top: "50%", zIndex: 5000 }}>
        <Modal
          isVisible={this.state.visibleModal === 5}
          style={styles.bottomModal}
          onModalWillShow={this.modal1()}
          onBackdropPress={() => this.setState({ visibleModal: null })}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection="down"
        >
          {this._renderModalContent()}
        </Modal>

        {/*end of modal ,, start of carousel rendering */}
        
        <Carousel
          style={styles.carousel}
          data={this.state.mydata}
          renderItem={this.renderItem}
          itemWidth={140}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={width}
          pagingEnable={false}
          ref={(c) => {
            this.numberCarousel = c * 3;
          }}
          
        />
      </View>
    );
  }



  onClickAddCart2(data) {
    
    //const itemcart = data;
    
    
    
    AsyncStorage.getItem("cart")
      .then((dataCart) => {
        if (dataCart !== null) {
          
          const cart = JSON.parse(dataCart);
          data.map((item,i)=>{
          cart.push(data[i]);
          AsyncStorage.setItem("cart", JSON.stringify(cart));
          })
        } else {
          
          const cart = [];
          data.map((item,i)=>{
          cart.push(data[i]);
          AsyncStorage.setItem("cart", JSON.stringify(cart));
          })

        }
        alert("Added to cart");
      })
      .catch((err) => {
        alert(err);
      });
      
    
  }


  onClickAddCart(data) {
    
    const itemcart = {
      productname: data.productName,
      productimage: data.productimage,
      productsize:data.sizeAndPrice[0].size,
      price: data.sizeAndPrice[0].price,
      quantity: 1,
    };
    AsyncStorage.getItem("cart")
      .then((dataCart) => {
        if (dataCart !== null) {
          const cart = JSON.parse(dataCart);
          cart.push(itemcart);
          AsyncStorage.setItem("cart", JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemcart);
          AsyncStorage.setItem("cart", JSON.stringify(cart));

        }
        alert("added to cart");
      })
      .catch((err) => {
        alert(err);
      });
    
  }

}


export default Eventscrollnew;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    height: 200,
    width: "70%",
  },
  item: {
    flex: 1,
    top: 112,
    height: 1000,
    zIndex: 9000,
    // borderRadius: 1200/ 2,
  },
  content: {
    //position: "absolute",
    bottom: "0%",
    top: "20%",
    width,
    height: "30%",
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  item2: {
    right: "11%",
    flex: 1,
    top: 100,
    height: 1000,
    zIndex: 1000,
    // borderRadius: 1200/ 2,
  },
 

  modal: {
    flex: 7,

    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 20,
    width: "80%",
    height: "80%",
    left: "11%",
    top: "5%",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: "#3f2949",
    marginTop: 10,
    zIndex: 60,
    bottom: "72%",
    fontWeight: "bold",
    fontSize: 10,
    right: "0%",
    left: "18%",
  },
  
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
    zIndex: 30000,
  },
  modalContent: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: "78%",
  },
});
