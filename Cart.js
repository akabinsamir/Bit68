import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground ,Button,TouchableOpacity,CheckBox,SafeAreaView,ScrollView,Dimensions} from 'react-native';
import Firstswipe from './Firstswipe';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import * as Font from "expo-font";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

var { width } = Dimensions.get("window")
 class Cart extends React.Component {
  static navigationOptions =
  {
     
     title:'طلباتي',
    
     drawerIcon: (
      <View style={{bottom:'28%'}}>
      <Image
        source={require("./images/cart.png")}
        style={{ height:30, width: 30, position: "absolute" ,resizeMode:'contain'}}
      />
      </View>
    ),
  };
 
  
  constructor(){
    super()
    
    this.state = {
      email: '',
      password: '',
      date:'',
      fontLoaded: false,
      switchValue:false,
      finalname:null,
      visibleModal: null,
      details:true,
      dataCart:[],
      totalprice:0,
      totalitems:0,
      orderid:null,
      data:"",
      username:null,
      font:'normal',
     
   }
  }
 async componentDidUpdate(prevProps, prevState) {


  


    if (
      prevProps.navigation.state.params.cart !==
      this.props.navigation.state.params.cart
    ) {
      this.setState({
        totalitems:0,
        totalprice:0,
      
      })
     await AsyncStorage.getItem('cart').then((cart)=>{
        //console.log(this.state.totalprice)
        if (cart !== null) {
          // We have data!!
          const cartfood = JSON.parse(cart)
          this.setState({dataCart:cartfood})

          for(let i = 0; i < this.state.dataCart.length; i++){ 
      
            this.setState({totalprice:this.state.totalprice + (this.state.dataCart[i].quantity*this.state.dataCart[i].price)})
            this.setState({totalitems:this.state.totalitems + this.state.dataCart[i].quantity})
          }

        }
      })
      .catch((err)=>{
        alert(err)
      })
  
    

    }
   
    
  
  }

  async componentDidMount() {
    //console.log(this.props.navigation.state.params.username)

    
   await Font.loadAsync({
    'main':require('./assets/fonts/Tajawal-Regular.ttf')
  })

  this.setState({font:'main'})
 await this.setState({
      totalitems:0,
      totalprice:0,
      username:this.props.navigation.state.params.username,
    })
   // console.log(this.state.username)
  await  AsyncStorage.getItem('cart').then((cart)=>{
      //console.log(this.state.totalprice)
      if (cart !== null) {
        // We have data!!
        const cartfood = JSON.parse(cart)
        this.setState({dataCart:cartfood})
      
        //this.state.totalprice+=cartfood.quantity*cartfood.price 
        
 
      }
    })
    .catch((err)=>{
      alert(err)
    })
    for(let i = 0; i < this.state.dataCart.length; i++){ 
      
      this.setState({totalprice:this.state.totalprice + (this.state.dataCart[i].quantity*this.state.dataCart[i].price)})
      this.setState({totalitems:this.state.totalitems + this.state.dataCart[i].quantity})
    }
   // console.log(this.state.totalprice)
    
  }
      
      toggleSwitch = (value) => {
          //onValueChange of the switch this function will be called
          this.setState({switchValue: value})
          //state changes according to switch
          //which will result in re-render the text
      }
    
     async onChangeQual(i,type)
      {
        const dataCar = this.state.dataCart
        let cantd = dataCar[i].quantity;
    
        if (type) {
         cantd = cantd + 1
         dataCar[i].quantity = cantd
         
         try {
          await AsyncStorage.setItem("cart",JSON.stringify(this.state.dataCart))
          this.setState({ dataCart: JSON.parse(await AsyncStorage.getItem("cart")) })
          
          
  
        } catch (error) {
          console.log(error);
        }
        await  AsyncStorage.getItem('cart').then((cart)=>{
          //console.log(this.state.totalprice)
          if (cart !== null) {
            // We have data!!
            
            const cartfood = JSON.parse(cart)
            this.setState({dataCart:dataCar,totalprice:0,totalitems:0})
            for(let i = 0; i < this.state.dataCart.length; i++){ 
          
              this.setState({totalprice:this.state.totalprice + (this.state.dataCart[i].quantity*this.state.dataCart[i].price)})
            this.setState({totalitems:this.state.totalitems + this.state.dataCart[i].quantity})
            }
          
            //this.state.totalprice+=cartfood.quantity*cartfood.price 
            
     
          }
        })
        .catch((err)=>{
          alert(err)
        })
       
        
         //console.log(this.state.totalprice)
        
        }
        else if (type==false&&cantd>=2){
         cantd = cantd - 1
         dataCar[i].quantity = cantd
         this.setState({dataCart:dataCar})
         try {
          await AsyncStorage.setItem("cart",JSON.stringify(this.state.dataCart))
          this.setState({ dataCart: JSON.parse(await AsyncStorage.getItem("cart")) })
          
  
        } catch (error) {
          console.log(error);
        }
        await  AsyncStorage.getItem('cart').then((cart)=>{
          //console.log(this.state.totalprice)
          if (cart !== null) {
            // We have data!!
            
            const cartfood = JSON.parse(cart)
            this.setState({dataCart:dataCar,totalprice:0,totalitems:0})
            for(let i = 0; i < this.state.dataCart.length; i++){ 
          
              this.setState({totalprice:this.state.totalprice + (this.state.dataCart[i].quantity*this.state.dataCart[i].price)})
            this.setState({totalitems:this.state.totalitems + this.state.dataCart[i].quantity})
            }
          
            //this.state.totalprice+=cartfood.quantity*cartfood.price 
            
     
          }
        })
        .catch((err)=>{
          alert(err)
        })
        //console.log(this.state.totalprice)
        }
        else if (type==false&&cantd==1){
         dataCar.splice(i,1)
         this.setState({dataCart:dataCar})
         
         
         try {
          await AsyncStorage.setItem("cart",JSON.stringify(this.state.dataCart))
          this.setState({ dataCart: JSON.parse(await AsyncStorage.getItem("cart")) })
          
  
        } catch (error) {
          console.log(error);
        }
        await  AsyncStorage.getItem('cart').then((cart)=>{
          //console.log(this.state.totalprice)
          if (cart !== null) {
            // We have data!!
            const cartfood = JSON.parse(cart)
            for(let i = 0; i < cartfood.length; i++){ 
          
              this.setState({totalprice:this.state.totalprice + (cartfood[i].quantity*cartfood[i].price)})
              this.setState({totalitems:this.state.totalitems - 1})
            }
          
            //this.state.totalprice+=cartfood.quantity*cartfood.price 
            
     
          }
        })
        .catch((err)=>{
          alert(err)
        })
    
        console.log(this.state.totalprice)
        
      
         
        } 

        
      }
  
    
    render(){
      const { navigation } = this.props;  
      const username = 'batates';  
      const partname = username.split(" ")[0];
     
    
      if(partname.length>10){ this.state.finalname=partname.substring(0,10)+".."}
      const picture = navigation.getParam('picture', 'some default value'); 
        return (

            
            
         
          
            <ImageBackground source={require('./images/mrwhite.jpg')} style={{width:'100%', height:'100%',flex:1, zIndex: 0}}>
           
              <View style={styles.header}>
              <Image source={require('./images/headertamween.png')} style={styles.headerphoto} />
              </View>
              <View style={styles.footer}>
              <Image source={require('./images/footertamween.png')} style={styles.footerphoto} />
              </View>

              <View style={styles.footerprice}>
              <Image source={require('./images/cartfooter.png')} style={styles.footerphoto} />
            
              </View>
              <View style={{flex:1,
                    zIndex:499,
                    width:'100%',
                    height:'19.5%',
                    bottom:'1%',
                    right:'10%',
                    position:'absolute'}}>
              <Text style={{color:'white',fontFamily:this.state.font}}>المبلغ الاجمالي</Text>
              <Text style={{color:'white',fontSize:15,position:'absolute',left:'85%',top:'12%',textAlign:'center',fontFamily:this.state.font}}>{this.state.totalprice} EGP</Text>
            
              </View>
              <View style={{flex:1,
                    zIndex:499,
                    width:'100%',
                    height:'19.5%',
                    bottom:'1%',
                    right:'42%',
                    position:'absolute'}}>
              <Text style={{color:'white',fontFamily:this.state.font}}>رسوم التوصيل</Text>
              <Text style={{color:'white',fontSize:15,position:'absolute',left:'85%',top:'12%',textAlign:'center',fontFamily:this.state.font}}>10 EGP</Text>
            
              </View>
              <View style={{flex:1,
                    zIndex:499,
                    width:'100%',
                    height:'19.5%',
                    bottom:'1%',
                    right:'80%',
                    position:'absolute'}}>
              <Text style={{color:'white',fontFamily:this.state.font}}>المجموع</Text>
              <Text style={{color:'white',fontSize:15,position:'absolute',left:'87%',top:'12%',textAlign:'center',fontFamily:this.state.font}}>{this.state.totalprice+10} EGP</Text>
            
              </View>
              <View style={styles.confirm}>
                    <TouchableOpacity
                     onPress={() => {
                      const that = this;
                      AsyncStorage.getItem('cart').then((cart)=>{
                          const cartfood = JSON.parse(cart)
                          if(this.state.username!=null){
                              axios.post('http://www.tamweenymarket.com/api/orders/create', {
                                  user:this.state.username,
                                  cart:cartfood,
                                  address:"4,mekka street, el nozha el gdeda ,Cairo,Egypt",
                                  totalprice:this.state.totalprice,
                                  paymentinfo:"CASH",
                                  deliveryfees:"10",
                                  delivered:false,
                                  
                                })
                                .then(function (response) {
                                 
                                  if(response.data.message)
                                  {
                                      alert(response.data.message)
                                      console.log(response.data.message)
                                  }
                                else{
                                  alert('Order is on the count down :)');
                                  
                                  //console.log(response.data._id)
                                if(response.data._id != null)
                                {
                                
                                that.props.navigation.navigate("Reciept",{
                                  orderid:response.data._id,
                                  //user:this.state.username
                                  
                                });
                                
                              }
                                  
                                }
                                })
                                .catch(function (error) {
                                  console.log(error);
                                  alert('please check your internet connection!');
                                });
                                
                              }
                      })
                      .catch((err)=>{
                        alert(err)
                      })
                    }} style={{zIndex:1002}}>
                        <Image source={require('./images/confirmbutton.png')} style={{width:400,height:60}}/>
                    </TouchableOpacity> 

            </View>

            
            <View style={styles.menu}>
                <SafeAreaView>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'40%',zIndex:1002}} onPress={this.props.navigation.openDrawer}>
                        <Image source={require('./images/menutamween.png')} style={{width:27,height:27}}/>
                    </TouchableOpacity> 
                </SafeAreaView>

            </View>
            <View style={styles.cart}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'35%',zIndex:1002}}>
                        <Image source={require('./images/cartnumber.png')} style={{width:32,height:30}}/>
                    <Text style={{bottom:'50%',right:'40%',fontFamily:this.state.font}}>{this.state.totalitems}</Text>
                    </TouchableOpacity> 

            </View>
     

         
            <View style={styles.container}>

         

            </View>
       
            <View style={{flex:1,top:'12%',height:'29%',opacity:0,}}>
            <Firstswipe/>
            </View>
       
            <View style={{position:'absolute',top:'5.5%',left:'22%',zIndex:1001}}>

            <Text style={{width:180,height:33,fontFamily:this.state.font,zIndex:500,color:'white',fontSize:18}}>عربة المشتريات</Text>
    
              
          </View>
     

          <View style={{position:'absolute',bottom:'0%',zIndex:2,}}>

          <Image source={require('./images/cartbg.png')} style={{width:500,height:680,resizeMode:'stretch'}}/>

          </View>
     
        {/*<AppStackNavigator/>*/}
        {/*CART ITEMS---------------------------------------------------------------------------------------- */}
        <View style={{alignItems: 'center', justifyContent: 'center',height:550,bottom:'20%'}}>
         <View style={{flex:1}}>

           <ScrollView style={{zIndex:300,height:800,}}>

             {
               this.state.dataCart.map((item,i)=>{
                 return(
                   <View  style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                     <Image  style={{width:width/3,height:width/3,resizeMode:'contain'}} source={{uri: item.productimage}} />
                     <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"space-between"}}>
                       <View>
                         <Text style={{fontFamily:this.state.font, fontSize:20}}>{item.productname}</Text>
                         <Text style={{fontFamily:this.state.font}}>{item.productsize}</Text>
                       </View>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text style={{fontFamily:this.state.font,color:"#33c37d",fontSize:20}}>${item.price*item.quantity}</Text>
                         <View style={{flexDirection:'row', alignItems:'center'}}>
                           <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                           <Image source={require('./images/minceicon.png')} 
            style={{width:35,height:35}}
            />
                           </TouchableOpacity>
                           <Text style={{paddingHorizontal:8, fontFamily:this.state.font, fontSize:18}}>{item.quantity}</Text>
                           <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                           <Image source={require('./images/plusicon.png')} 
            style={{width:35,height:35}}
            />
                           </TouchableOpacity>
                         </View>
                       </View>
                     </View>
                   </View>
                 )
               })
             }

            
           </ScrollView>

         </View>

      </View>
            {/*end of item */}
       
           


        
    
       
            
            </ImageBackground>
            



        );
    }
}
export default Cart

/*const AppStackNavigator = createStackNavigator({
    Home:Home,
    Products:Products,
})*/

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
      flex:1,
   
      width:screenWidth,
      height:screenHeight/50,
      bottom:'100%',
      zIndex:1000,
      position:'absolute',


  },
  headerphoto:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'stretch',
    zIndex:1000,
    paddingTop: '25%',
    width:'100%',
    height:'0%',
    
    
  },
  footer: {
    flex:1,
    zIndex:500,
    width:screenWidth,
    height:screenHeight/10.5,
    bottom:'0%',
 
    position:'absolute',
},
footerprice: {
    flex:1,
    zIndex:499,
    width:'100%',
    height:'19.5%',
    bottom:'3%',
 
    position:'absolute',

},
footerphoto:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 
  
  width:'100%',
  height:'0%',
  
  
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
      zIndex:1002,
      position:'absolute',
    },
    cart:{
      zIndex:1002,
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
      zIndex:30000,
    },
    modalContent: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height:'78%',
      
    
    },
   
   
  });
  