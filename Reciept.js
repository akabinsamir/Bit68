import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground ,TouchableOpacity,Dimensions,SafeAreaView,ScrollView,Linking} from 'react-native';
import Modal from 'react-native-modal';
import * as Font from "expo-font";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
let hours = new Date().getHours();
var min = new Date().getMinutes(); 
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();



export default class Reciept extends React.Component {
  
 
  
  constructor(){
    super()
    
    this.state = {
      email: '',
      password: '',
      date:'',
      fontLoaded: false,
      switchValue:false,
      finalname:null,
      visibleModal: 2,
      details:true,
      
      orderid:null,
      orderDetails:null,
      font:'normal',
   }
  }

  componentDidUpdate(prevProps) {
    if(
      prevProps.navigation.state.params.orderid !==
      this.props.navigation.state.params.orderid
    )
    {
    this.setState({
      orderid:this.props.navigation.state.params.orderid
    })
  }
  
  }
  async componentDidMount() {
    
   await Font.loadAsync({
    'main':require('./assets/fonts/Tajawal-Regular.ttf')
  })

  this.setState({font:'main'})
    
    this.setState({
      orderid:this.props.navigation.state.params.orderid,
      username:this.props.navigation.state.params.user
    })
    //console.log( this.props.navigation.state.params.orderid)
    if(this.props.navigation.state.params.orderid)
    {
  await  fetch("http://www.tamweenymarket.com/api/orders/"+this.props.navigation.state.params.orderid)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          orderDetails: responseJson,
        });
      });
    }
  
  }
      
      toggleSwitch = (value) => {
          
          this.setState({switchValue: value})
      
      }
      renderItem(){
        if(this.state.orderDetails !=null)
        {
    
      }
      }
    
      _renderModalContent = () => (
        <View style={styles.modalContent}>

            <Image
          source={require("./images/slidebutton.png")}
          style={{
            position: "absolute",
            bottom: screenHeight/1.35,
            width: screenWidth/12,
            height: screenHeight/55,
          }}
        />
        <Image
          source={require("./images/loadingorder.png")}
          style={{
            position: "absolute",
            width: screenWidth/1.25,
            height: screenHeight/25,
            bottom:screenHeight/1.5,
            resizeMode:'contain',
          }}
        />

<Image
          source={require("./images/placed.png")}
          style={{
            position: "absolute",
            width: screenWidth/3,
            height: screenHeight/10,
            bottom:screenHeight/1.85,
            right:screenWidth/1.8,
            resizeMode:'contain',
          }}
        />
        <Text style={{color:'black',bottom:screenHeight/1.9,fontSize:17,position:'absolute',fontFamily:this.state.font}}>your order has been sent to the store</Text>
        <Text style={{color:'gray',bottom:screenHeight/2,fontSize:17,position:'absolute'}}>_____________________________________</Text>
        
            <ScrollView style={{position:'absolute',width:'100%',height:screenHeight/2.6,top:'40%',zIndex:40000,left:'10%'}} >
            
          <View>
            <View>
          <Image
          source={require("./images/addressicon.png")}
          style={{
            
            width:screenWidth/20.55,
            height: screenHeight/39.5,
            resizeMode:'contain',
     
          }}
        />
        

           {this.state.orderDetails?( <Text style={{bottom:'30%',width:'60%',left:'10%',fontFamily:this.state.font}}>{this.state.orderDetails.address}</Text>):(<Text style={{bottom:'30%',width:'60%',left:'10%',fontWeight:'bold',fontFamily:this.state.font}}>Unknown..</Text>)}
         
            </View>
            <View style={{paddingTop:screenHeight/25}}>
          <Image
          source={require("./images/orderdetailsicon.png")}
          style={{
            
            width:screenWidth/20.55,
            height: screenHeight/32,
            resizeMode:'contain',
     
          }}
        />
        

            <Text style={{bottom:'20%',width:'60%',left:'10%',fontWeight:'bold'}}>Order Details</Text>
            
            
           {this.state.orderDetails?(this.state.orderDetails.cart.map((item, i) => {
         return (
         <Text  style={{bottom:'20%',width:'60%',left:'10%',fontFamily:this.state.font}}>{item.quantity} X {item.productname}</Text>
         );
      })):(<View></View>)}
         
            </View>
           

           {this.state.orderDetails?( <View>
          <Image
          source={require("./images/orderdetailsicon.png")}
          style={{
            
            width:screenWidth/20.55,
            height: screenHeight/32,
            resizeMode:'contain',
     
          }}
        />
        

            <Text style={{bottom:'20%',width:'60%',left:'10%',fontWeight:'bold'}}>Reciept</Text>
        <Text style={{bottom:'20%',width:'60%',left:'10%',fontFamily:this.state.font}}>Subtotal : {this.state.orderDetails.totalprice} EGP</Text>
            <Text style={{bottom:'20%',width:'60%',left:'10%',fontFamily:this.state.font}}>Delivery Fees : {this.state.orderDetails.deliveryfees} EGP</Text>
            <Text style={{bottom:'20%',width:'60%',left:'10%',fontFamily:this.state.font}}>Total : {Number(this.state.orderDetails.totalprice)+Number(this.state.orderDetails.deliveryfees)} EGP</Text>
         
            </View>):(<View></View>)}
           
 
            <View style={{justifyContent:'center',right:screenWidth/45}}>
              <TouchableOpacity onPress={
                ()=>alert('Order Cancelled !')
              }>
          <Image
          source={require("./images/cancelorderbuttom.png")}
          style={{
            
            width:screenWidth/1.2,
            height: screenHeight/5,
            resizeMode:'contain',
     
          }}
        />
        </TouchableOpacity>
         
            </View>
           
            </View>

     
            </ScrollView>
          
        </View>
      );
  
    
    render(){
      const { navigation } = this.props;  
      const username = 'batates';  
      const partname = username.split(" ")[0];
     
    
      if(partname.length>10){ this.state.finalname=partname.substring(0,10)+".."}
      const picture = navigation.getParam('picture', 'some default value'); 
        return (

            
            
         
          
            <ImageBackground source={require('./images/rebg.png')} style={{width:'100%', height:'100%',flex:1}}>
            
              <View style={styles.header}>
              <Image source={require('./images/headertamween.png')} style={styles.headerphoto} />
              </View>
              

          
             

            
            <View style={styles.menu}>
                <SafeAreaView>
                    <TouchableOpacity style={{alignItems:'flex-end',tintColor:"white",margin:16,top:'40%',zIndex:1002,}} onPress={() =>this.props.navigation.navigate("Cart")}>
                        <Image source={require('./images/whitearrow.png')} style={{width:27,height:27}}/>
                    </TouchableOpacity> 
                </SafeAreaView>
             
            </View>
            <View style={{top:'10%',left:'3.5%',position:'absolute'}}>
                <TouchableOpacity style={{alignItems:'flex-end',tintColor:"white",margin:16,zIndex:1002}} onPress={() => Linking.openURL(`tel:${'01144491368'}`)}>
                        <Image source={require('./images/supportbg.png')} style={{width:120,height:70,resizeMode:'contain'}}/>
                        <Image source={require('./images/supportword.png')} style={{width:100,height:70,resizeMode:'contain',bottom:'50%',right:'6%'}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{top:'15%',left:'8%',position:'absolute'}}>
                
                        <Image source={require('./images/orderdetailsbutton.png')} style={{width:screenWidth/1.2,height:screenHeight/6.6,resizeMode:'contain'}}/>
                  
                    
                    </View>

                   {this.state.orderDetails?( <View style={{top:screenHeight/4.6,left:screenWidth/10,position:'absolute'}}>
                      {screenWidth>=400 && screenHeight>=700?
       ( <Text style={{zIndex:100,fontSize:14}}>ETA {hours}:{min}  |  {date}/{month}/{year}  |  Total  {this.state.orderDetails.totalprice} EGP    {this.state.orderDetails.paymentinfo}</Text>):
       ( <Text style={{zIndex:100,fontSize:12}}>ETA {hours}:{min}  |  {date}/{month}/{year}  |  Total  {this.state.orderDetails.totalprice} EGP    {this.state.orderDetails.paymentinfo}</Text>)}
                
                    
                    </View>):(<View></View>)}
            <View style={{top:screenHeight/6,left:screenWidth/1.9,position:'absolute'}}>
                
                        <Text style={{color:'gray',fontSize:10}}>#{this.state.orderid}</Text>
   
                    </View>
            <View style={styles.cart}>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate("Cart")} style={{alignItems:'flex-end',margin:16,top:'35%',zIndex:1002}}>
                        <Image source={require('./images/carttamween.png')}  style={{ width: 40, height: 40 }}/>
                    </TouchableOpacity> 

            </View>

            <View style={styles.container}>
              
            
         

            </View>
            <View style={{position:'absolute',top:'5.5%',left:'42%',zIndex:5001}}>

            <Text style={{width:180,height:33,fontFamily:'normal',zIndex:501,color:'white',fontSize:18}}>Reciept</Text>
          
              
          </View>
      
          <Modal
            style={styles.bottomModal}
         isVisible={this.state.visibleModal === 2}
         animationIn={'slideInDown'}
         animationOut={'slideOutUp'}
         backdropOpacity={0}
         onSwipeComplete={() => this.setState({ visibleModal: null })}
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
    container: {
        flex:1,
        marginTop: 0,
        top:0,
        position:'relative',
        alignItems: 'center',
        justifyContent: 'center',
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
footerprice: {
    flex:1,
    zIndex:499,
    width:'100%',
    height:'19.5%',
    bottom:'3%',
 
    position:'absolute',

},

    textmenu:{
      color:'#541e1b',
      fontSize:20,
      fontWeight: "500",
  },
    logo:{
    
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode:'contain',

      bottom:'37.5%',
      paddingTop: '1%',
      width:'17%',
      height:'17%',
      zIndex:3,
      
      
    },
    menu:{
      zIndex:5002,
      position:'absolute',
    },
    cart:{
      zIndex:5002,
      position:'absolute',
      left:'82%',
    },
    headerbutton1:{
      zIndex:1001,
      position:'absolute',
      left:'17%',
      top:'8%'
    },
    headerbuttoncat:{
        zIndex:1001,
        position:'absolute',
        left:'25%',
        top:'2.5%',
        width:200
      },
    headerbutton2:{
      zIndex:1001,
      position:'absolute',
      left:'20%',
      top:'3.8%'
    },
    profile:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
        bottom:520,
        left:15,
        paddingTop: 100,
        width:50,
        height:50,
        tintColor:'#541e1b',
        zIndex:3,

    },
    profile2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
        bottom:620,
        left:16,
        paddingTop: 100,
        width:47,
        height:47,
        borderRadius: 400/ 2,
        zIndex:3,

    },
    miniback:{
        flex: 1,
        
        position:'absolute',
        bottom:465,
        paddingTop: 100,
        width:'100%',
        height:250,
       
        
        

    },
    minibacktwo:{
      
        flex:2,
        position:'absolute',
        bottom:1,
       alignItems:'stretch',
       justifyContent:'center',
        width:'100%',
        height:710,
       
      
     
      
      

  },
    dot:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode:'contain',
      marginBottom:120,
      paddingTop: 50,
      width:40 ,
      height:40,
    },
    FacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: .5,
      borderColor: '#fff',
      height: 40,
      width:210,
      borderRadius: 5 ,
      margin: 5,
      bottom:120,
      left:90
     
    },
     
    ImageIconStyle: {
       padding: 10,
       margin: 5,
       height: 25,
       width: 25,
       resizeMode : 'stretch',
     
    },
     
    TextStyle :{
     
      color: "#fff",
      marginBottom : 4,
      marginRight :20,
      
    },
     
    SeparatorLine :{
     
    backgroundColor : '#00008b',
    width: 1,
    height: 32
     
    },
    confirm:{
      zIndex:9000,
      position:'absolute',
      left:'1.5%',
      top:'84.5%',
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
      zIndex:40000,
    },
    modalContent: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height:'75%',
      
      zIndex:30000

      
    
    },
   
   
  });
  