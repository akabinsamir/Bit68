import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Button,
  TextInput,
  CheckBox,
  KeyboardAvoidingView,
  
  
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import axios from 'axios';
import Modal from 'react-native-modal'; // 2.4.0
//import {connect} from 'react-redux'

const minusIcon = (isMinusDisabled, touchableDisabledColor, touchableColor) => {
  return  <Image source={require('./images/emptybutton.png')} style={styles.minusbutton} />
};

const plusIcon = (isPlusDisabled, touchableDisabledColor, touchableColor) => {
  return <Image source={require('./images/emptybutton.png')} style={styles.plusbutton} />
};


const { width } = Dimensions.get('window');





 class Eventscrollnew extends Component {
  constructor(props){
    super(props)
    
    
    this.state ={

      mydata:[
       
      ],
        fontLoaded:false,

       
        visibleModal: null,

        modaldate:null,
        eventid:null,
        modaldescription:null,



        attendees:1,
        specialRequest:null,
        phone:null,
        details:true,
        addtocartbutton:[],

  
        reservationMessage:null,

    
     
    }
  }

 componentDidMount(){

  this.setState({fontLoaded:true})
 
      fetch('https://cairojazzclub.com/wp-json/cjc/calendar/events_2/web/all')
      .then ((response) => response.json())
      .then ((responseJson) => {
  
        this.setState({
          isLoading:false,
         
          mydata:responseJson,
          


        })
        .catch((error) =>{
          console.log(error);
        });
      }) 
  }
  modal1(){
    const id=this.state.eventid
      fetch(`https://cairojazzclub.com/wp-json/cjc/calendar/events/${id}/2866949966694553/event`)
          .then ((response) => response.json())
          .then ((responseJson) => {
      
            this.setState({
              modaldescription:responseJson.event_description,
      
            })
           

          })
          
          .catch((error) =>{
            console.log("error");
          });
        }
        onChange(number, type) {
          console.log(number, type)
          this.setState({ attendees: number }) // 1, + or -
        }
      
       handlePhone = (text) => {
          this.setState({ phone: text })
       }
      
     
   handleSpecial = (text) =>{
    this.setState({ specialRequest: text })
   }
   
     
       login = (specialRequest, phone,attendees,reservationMessage) => {
     
  
         
        
          axios.post(`https://cairojazzclub.com/wp-json/fbr/reservation/?event_id=${this.state.eventid}&user_id=2866949966694553&attendees=${attendees}&event_place=edrftg&event_type=sedrf&user_address=dsfdgrgd&Time_Slot=084844&Speacial_request=${specialRequest}&request_ttable&Phone_Number=${phone}&accessToken`)
          .then(function (response) {
            alert('report: ' + response.data.message )
     
          })
          
          .catch(function (error) {
            console.log(error);
          });
          
      
         
      }
      _renderModalContent = () => (

        
        this.state.details? <View style={styles.modalContent}>
         
        
            <Image source={require('./images/slidebutton.png')} 
            style={{position:'absolute',bottom:'96.5%',width:40,height:10}}
            />

<Image source={require('./images/detailstitlebg.png')} 
            style={{position:'absolute',bottom:'87%',width:'100%',height:37}}
            />
            <Image source={require('./images/detailstitle.png')} 
            style={{position:'absolute',bottom:'87.5%',width:'57%',height:37}}
            />
             <Image source={require('./images/detailsimage.png')} 
            style={{position:'absolute',bottom:'47%',width:'46%',height:'38%',right:'52%'}}
            />
    {/*----------------------------------------------------------------- */}
             <Image source={require('./images/sizebg.png')} 
            style={{position:'absolute',bottom:'73%',width:'45%',height:'15%',left:'50%',resizeMode:'contain'}}
            />
            <TouchableOpacity style={{position:'absolute',bottom:'77.5%',left:'86%',}} onPress={()=>this.props.increaseCounter()}>
             <Image source={require('./images/plusicon.png')} 
            style={{width:35,height:35}}
            />
            </TouchableOpacity >
            <Text style={{position:'absolute',bottom:'79%',left:'82.5%',fontWeight:"bold", fontSize:15}}>{this.props.counter}</Text>
            <TouchableOpacity style={{position:'absolute',bottom:'77.5%',left:'73%',}} onPress={()=>this.props.decreaseCounter()}>
             <Image source={require('./images/minceicon.png')} 
            style={{width:35,height:35}}
            />
                </TouchableOpacity>
           <Image source={require('./images/ricesize.png')} 
            style={{position:'absolute',bottom:'80%',width:'11%',height:'5%',left:'54%',resizeMode:'contain'}}
            />
            <Image source={require('./images/pricesample.png')} 
            style={{position:'absolute',bottom:'76%',width:'15%',height:'5%',left:'54%',resizeMode:'contain'}}
            />
             {/*----------------------------------------------------------------- */}

             <Image source={require('./images/sizebg.png')} 
            style={{position:'absolute',bottom:'64%',width:'45%',height:'15%',left:'50%',resizeMode:'contain'}}
            />
           <TouchableOpacity style={{position:'absolute',bottom:'68.5%',left:'86%',}}>
             <Image source={require('./images/plusicon.png')} 
            style={{width:35,height:35}}
            />
            </TouchableOpacity>
            <TouchableOpacity style={{position:'absolute',bottom:'68.5%',left:'73%',}}>
             <Image source={require('./images/minceicon.png')} 
            style={{width:35,height:35}}
            />
                </TouchableOpacity>
           <Image source={require('./images/ricesize.png')} 
            style={{position:'absolute',bottom:'71%',width:'11%',height:'5%',left:'54%',resizeMode:'contain'}}
            />
            <Image source={require('./images/pricesample.png')} 
            style={{position:'absolute',bottom:'67%',width:'15%',height:'5%',left:'54%',resizeMode:'contain'}}
            />
             {/*----------------------------------------------------------------- */}
             
             <Image source={require('./images/sizebg.png')} 
            style={{position:'absolute',bottom:'55%',width:'45%',height:'15%',left:'50%',resizeMode:'contain'}}
            />
           <TouchableOpacity style={{position:'absolute',bottom:'59.5%',left:'86%',}}>
             <Image source={require('./images/plusicon.png')} 
            style={{width:35,height:35}}
            />
            </TouchableOpacity>
            <TouchableOpacity style={{position:'absolute',bottom:'59.5%',left:'73%',}}>
             <Image source={require('./images/minceicon.png')} 
            style={{width:35,height:35}}
            />
                </TouchableOpacity>
           <Image source={require('./images/ricesize.png')} 
            style={{position:'absolute',bottom:'62%',width:'11%',height:'5%',left:'54%',resizeMode:'contain'}}
            />
            <Image source={require('./images/pricesample.png')} 
            style={{position:'absolute',bottom:'58%',width:'15%',height:'5%',left:'54%',resizeMode:'contain'}}
            />
             {/*----------------------------------------------------------------- */}
             <Image source={require('./images/addtocartbutton.png')} 
            style={{position:'absolute',bottom:'44%',width:'54%',height:'18%',left:'46%',resizeMode:'contain'}}
            />
              <Image source={require('./images/carttamween.png')} 
            style={{position:'absolute',bottom:'47%',width:'12%',height:'12%',left:'81%',resizeMode:'contain'}}
            />
             <Image source={require('./images/addtocartword.png')} 
            style={{position:'absolute',bottom:'48%',width:'25%',height:'10%',left:'54%',resizeMode:'contain'}}
            />
            {/*------------------------------------------------------------------- */}
            <Image source={require('./images/secondbgdetails.png')} 
            style={{position:'absolute',bottom:'26%',width:'100%',height:130}}
            />
                     {/*------------------------------------------------------------------- */}
              <Image source={require('./images/sharebutton.png')} 
            style={{position:'absolute',bottom:'35%',width:'18%',height:'18%',left:'80%',resizeMode:'contain'}}
            />
            <Image source={require('./images/sharelogo.png')} 
            style={{position:'absolute',bottom:'42.5%',width:'3%',height:'3%',left:'91%',resizeMode:'contain'}}
            />
             <Image source={require('./images/shareword.png')} 
            style={{position:'absolute',bottom:'41.5%',width:'7%',height:'5%',left:'83%',resizeMode:'contain'}}
            />
                     {/*------------------------------------------------------------------- */}
             <Image source={require('./images/addtolistbutton.png')} 
            style={{position:'absolute',bottom:'35%',width:'25%',height:'18%',left:'57%',resizeMode:'contain'}}
            />
            <Image source={require('./images/addtolistlogo.png')} 
            style={{position:'absolute',bottom:'42.5%',width:'3%',height:'3%',left:'76%',resizeMode:'contain'}}
            />
             <Image source={require('./images/addtolistword.png')} 
            style={{position:'absolute',bottom:'41%',width:'13%',height:'6%',left:'61%',resizeMode:'contain'}}
            />
                     {/*------------------------------------------------------------------- */}
                     <Image source={require('./images/otheropinionword.png')} 
            style={{position:'absolute',bottom:'36%',width:'15%',height:'6%',left:'80%',resizeMode:'contain'}}
            />
             <Image source={require('./images/opinionlogo.png')} 
            style={{position:'absolute',bottom:'31%',width:'10%',height:'6%',left:'86%',resizeMode:'contain'}}
            />
           <Image source={require('./images/addopinionword.png')} 
            style={{position:'absolute',bottom:'26%',width:'15%',height:'6%',left:'80%',resizeMode:'contain'}}
            />
             <Image source={require('./images/namenickname.png')} 
            style={{position:'absolute',bottom:'33%',width:'15%',height:'6%',left:'70%',resizeMode:'contain'}}
            />
             <Image source={require('./images/opinionexample.png')} 
            style={{position:'absolute',bottom:'31%',width:'30%',height:'6%',left:'55%',resizeMode:'contain'}}
            />
            {/*------------------------------------------------------------------- */}
            <Image source={require('./images/detailsline.png')} 
            style={{position:'absolute',bottom:'31%',width:'2%',height:'10%',left:'48%',resizeMode:'contain'}}
            />
            {/*------------------------------------------------------------------- */}
            <Image source={require('./images/desclogo.png')} 
            style={{position:'absolute',bottom:'41%',width:'5%',height:'5%',left:'40%',resizeMode:'contain'}}
            />
             <Image source={require('./images/descword.png')} 
            style={{position:'absolute',bottom:'39%',width:'10%',height:'10%',left:'28%',resizeMode:'contain'}}
            />
             <Image source={require('./images/descexample.png')} 
            style={{position:'absolute',bottom:'32%',width:'20%',height:'10%',left:'27%',resizeMode:'contain'}}
            />
             <Image source={require('./images/descexample.png')} 
            style={{position:'absolute',bottom:'30%',width:'20%',height:'10%',left:'27%',resizeMode:'contain'}}
            />
               <TouchableOpacity 
             onPress={() => {
              {/*} this.numberCarousel.scrollToIndex(index);*/}
              //this.state.modaldate=this.state.mydata[index].startDate
              //this.state.eventid = this.state.mydata[index].id
              this.setState({ details: false })
          
             }}
             style={{bottom:'27.5%',position:'absolute',zIndex:15000,right:'55%'}}>
                           <Image source={require('./images/showmorebutton.png')} 
            style={{width:90,height:20}}
            />
            </TouchableOpacity>
             {/*------------------------------------------------------------------- */}
             <Image source={require('./images/secondbgdetails.png')} 
            style={{position:'absolute',bottom:'0%',width:'100%',height:150}}
          
            />
              {/*------------------------------------------------------------------- */}
              <Image source={require('./images/similarproductsword.png')} 
            style={{position:'absolute',bottom:'19%',width:'21%',height:'6%',left:'75%',resizeMode:'contain'}}
            />
            {/*------------------------------------------------------------------- */}
            <Image source={require('./images/milk.png')} 
            style={{position:'absolute',bottom:'5%',width:'15%',height:'15%',left:'75%',resizeMode:'contain'}}
            />
             <Image source={require('./images/detailsprodnamebox.png')} 
            style={{position:'absolute',top:'91%',width:'30%',height:'12%',left:'67.5%',resizeMode:'contain'}}
            />
            <Image source={require('./images/zabady.png')} 
            style={{position:'absolute',bottom:'4.5%',width:'18%',height:'18%',left:'40%',resizeMode:'contain'}}
            />
             <Image source={require('./images/detailsprodnamebox.png')} 
            style={{position:'absolute',top:'91%',width:'30%',height:'12%',left:'33.5%',resizeMode:'contain'}}
            />
            <Image source={require('./images/milk2.png')} 
            style={{position:'absolute',bottom:'5%',width:'15%',height:'15%',left:'10%',resizeMode:'contain'}}
            />
             <Image source={require('./images/detailsprodnamebox.png')} 
            style={{position:'absolute',top:'91%',width:'30%',height:'12%',left:'2.5%',resizeMode:'contain'}}
            />
        </View>:
        <View style={styles.modalContent}>
           <Image source={require('./images/slidebutton.png')} 
            style={{position:'absolute',bottom:'96.5%',width:40,height:10}}
            />

<Image source={require('./images/detailstitlebg.png')} 
            style={{position:'absolute',bottom:'87%',width:'100%',height:37}}
            />
            <Image source={require('./images/tafaseel.png')} 
            style={{position:'absolute',bottom:'87.5%',width:'35%',height:37}}
            />
            <TouchableOpacity 
             onPress={() => {
              {/*} this.numberCarousel.scrollToIndex(index);*/}
              //this.state.modaldate=this.state.mydata[index].startDate
              //this.state.eventid = this.state.mydata[index].id
              this.setState({ details: true })
          
             }}
             style={{bottom:'88%',position:'absolute',right:'90%',zIndex:15000}}>
                           <Image source={require('./images/backbutton.png')} 
            style={{width:25,height:25}}
            />
            </TouchableOpacity>

            {/*---------------------------------------------------------------------- */}
            <Image source={require('./images/noncurvybg.png')} 
            style={{position:'absolute',bottom:'58%',width:'100%',height:'25%'}}
            />
             <Image source={require('./images/wasf.png')} 
            style={{position:'absolute',bottom:'76.5%',width:'15%',height:37,left:'80%'}}
            />
              <Image source={require('./images/wasfdesc.png')} 
            style={{position:'absolute',bottom:'61.5%',width:'90%',height:'14%',}}
            />
            {/*---------------------------------------------------------------------- */}
            <Image source={require('./images/curvybg.png')} 
            style={{position:'absolute',bottom:'31%',width:'95%',height:'25%'}}
            />
             <Image source={require('./images/momasas.png')} 
            style={{position:'absolute',bottom:'50.5%',width:'40%',height:28,left:'53%'}}
            />
                <Image source={require('./images/group4.png')} 
            style={{position:'absolute',bottom:'45.5%',width:'50%',height:'3.5%',left:'42%'}}
            />
              <Image source={require('./images/group8.png')} 
            style={{position:'absolute',bottom:'40.5%',width:'22%',height:'3%',left:'70%'}}
            />
            {/*---------------------------------------------------------------------- */}
            <Image source={require('./images/curvybg.png')} 
            style={{position:'absolute',bottom:'4%',width:'95%',height:'25%'}}
            />
             <Image source={require('./images/specs.png')} 
            style={{position:'absolute',bottom:'23%',width:'25%',height:28,left:'65%'}}
            />
                <Image source={require('./images/model.png')} 
            style={{position:'absolute',bottom:'16.5%',width:'15%',height:'3.5%',left:'75%'}}
            />
               <Image source={require('./images/color.png')} 
            style={{position:'absolute',bottom:'12.5%',width:'11%',height:'3.5%',left:'79%'}}
            />
             <Image source={require('./images/maining.png')} 
            style={{position:'absolute',bottom:'8.5%',width:'27%',height:'3%',left:'63%'}}
            />
            {/*---------------------------------------------------------------------- */}
        </View>
      );
      
      
  renderItem = ({ item, index }) => {
    const { img, startDate, content } = item;
    if(startDate.substring(0,2)==="01"){this.state.month1 = " JAN"};
    if(startDate.substring(0,2)==="02"){this.state.month1 = " FEB"};
    if(startDate.substring(0,2)==="03"){this.state.month1 = " MAR"};
    if(startDate.substring(0,2)==="04"){this.state.month1 = " APR"};
    if(startDate.substring(0,2)==="05"){this.state.month1 = " MAY"};
    if(startDate.substring(0,2)==="06"){this.state.month1 = " JUN"};
    if(startDate.substring(0,2)==="07"){this.state.month1 = " JUL"};
    if(startDate.substring(0,2)==="08"){this.state.month1 = " AUG"};
    if(startDate.substring(0,2)==="09"){this.state.month1 = " SEP"};
    if(startDate.substring(0,2)==="010"){this.state.month1 = " OCT"};
    if(startDate.substring(0,2)==="011"){this.state.month1 = " NOV"};
    if(startDate.substring(0,2)==="012"){this.state.month1 = " DEC"};


    return (
      <View style={{   
        flex: 1,
        height:1000,
        zIndex:9000,}}>
      <TouchableOpacity
        //activeOpacity={1}
        style={styles.item}
        onPress={() => {
         {/*} this.numberCarousel.scrollToIndex(index);*/}
         //this.state.modaldate=this.state.mydata[index].startDate
         //this.state.eventid = this.state.mydata[index].id
         this.setState({ visibleModal: 5 })
     
        }}
      >
        <Image source={require('./images/productnamebox.png')} 
            style={{width: 127,height: 80,bottom:120,left:'2%',resizeMode:'contain',position:'absolute',zIndex:9}}
            />


       
        <Image
          source={require('./images/detailsimage.png')}
          style={styles.imageBackground}
         
        />
         
         
       
       
      </TouchableOpacity>
      <TouchableOpacity  style={styles.item2}>
      <Image source={require('./images/sizeofprod.png')} 
            style={{width: 89,height: 18,resizeMode:'contain',position:'absolute',zIndex:920}}
            />
      <Image source={require('./images/sizesbutton.png')} 
          style={{width: 150,height: 95,left:'3%',resizeMode:'contain',position:'absolute',zIndex:9}}
          />

      </TouchableOpacity >




      </View>
    );
  };

  render() {
    return (
      //THIS IS A ONE MODAL FOR EVERY EVENT WITH DIFFERENT INFORMATION DEPENDS ON THE INDEX  (MODAL TO RESERVE AN EVENT)
      
      <View style={{height:'40%',top:'50%',zIndex:5000}}>
       <Modal
         isVisible={this.state.visibleModal === 5} style={styles.bottomModal}
         onSwipeComplete={() => this.setState({ visibleModal:null })}
          swipeDirection="down"
         >
           {this._renderModalContent()}
         
   

              </Modal>

        {/*end of modal ,, start of carousel rendering */}
      <Carousel
        style={styles.carousel}
        data={this.state.mydata}
        renderItem={this.renderItem}
        itemWidth={138}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={width}
    

        ref={(c) => {
          this.numberCarousel = c*3;
        }}
      />
      </View>
    );
  }
}

/*function mapStateToProps(state)
{
  return {counter: state.counter}
}

function mapDispatchToProps(dispatch){
  return {
    increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'}),
  }
}*/
export default /*connect(mapStateToProps,mapDispatchToProps)(*/Eventscrollnew//)

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    height:200,
    width:'80%',
    
   
  },
  item: {
   
    flex: 1,
    top:112,
    height:1000,
    zIndex:9000,
   // borderRadius: 1200/ 2,
    
    

  },
  content: {
    //position: "absolute",
    bottom: '0%',
    top:'20%',
    width,
    height: '30%',
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    backgroundColor: "white"
  },
  item2: {

    right:'11%',
    flex: 1,
    top:100,
    height:1000,
    zIndex:10000,
   // borderRadius: 1200/ 2,
    
    

  },
  item3: {
    
    left:'65%',
    flex: 1,
    bottom:60,
    height:1000,
    zIndex:10000,
   // borderRadius: 1200/ 2,
    
    

  },
  item4: {
    
    left:'65%',
    flex: 1,
    bottom:70,
    height:1000,
    zIndex:10000,
   // borderRadius: 1200/ 2,
    
    

  },
  imageBackground: {
   
    //backgroundColor: '#EBEBEB',
    position:'absolute',
    //borderRadius: 400/ 2,
    height:100,
    width:100,
    zIndex:100,
    top:'18%',
    left:'11%'
    
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5

  },
  rightText: { color: 'white' },
  lowerContainer: {
    flex: 1,
    
    margin: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  contentText: {
    marginTop: 10,
    fontSize:12
  },
  modal: {
    flex: 7,
    
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
    zIndex:20,
    width:'80%',
    height:'80%',
    left:'11%',
    top:'5%',
 
  },
  text: {
    alignItems:'center',
    justifyContent:'center',
    color: '#3f2949',
    marginTop: 10,
    zIndex:60,
    bottom:'72%',
    fontWeight:'bold',
    fontSize:10,
    right:'0%',
    left:'18%',
  },
  modal2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom:'62%',
    left:'30%',
  
    margin: 50,
    zIndex:200,
  },
  profile3:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    bottom:'46%',
    left:'61%',
  
    width:80,
    height:80,
    borderRadius: 400/ 2,
   

    zIndex:41,


},


profile4:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    bottom:'46%',
    left:'38.5%',
   
    width:80,
    height:80,
    borderRadius: 400/ 2,

    zIndex:41,

},
profile5:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position:'absolute',
  bottom:'46%',
  left:'16%',

  width:80,
  height:80,
  borderRadius: 400/ 2,

  zIndex:41,

},
minusbutton:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position:'absolute',

  

  width:35,
  height:30,

 

  zIndex:41,

},
plusbutton:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position:'absolute',

  

  width:35,
  height:30,

 

  zIndex:41,

},
input2: {
  margin: 5,
  height: 40,
  borderColor: 'white',
  borderWidth: 20,
  width:250,
  bottom:'23%',
  paddingLeft:5,
  left:'17%',
  fontSize:5,
  fontWeight: 'bold',

  color:'black',
  position:'absolute',
  zIndex:40,

},
input: {
  margin: 5,
  height: 20,
  borderColor: 'white',
  borderWidth: 10,
  borderTopColor:'black',
  borderBottomColor:'black',
  borderTopWidth:1,
  borderBottomWidth:1,
  borderTopRightRadius:1,
  borderTopLeftRadius:1,
  borderLeftColor:'black',
  borderRightColor:'black',
  width:110,
  fontSize:5,
  left:'52%',
  bottom:'34%',
  paddingLeft:8,
  fontWeight: 'bold',

  color:'black',
  position:'absolute',
  zIndex:40,
},
submitButton: {
  backgroundColor: '#752225',
  height: 30,
  width:70,
  borderRadius:4,
  borderWidth: 1,
  borderColor: '#752225',
  
},
submitButtonText:{
  color: 'white',
  paddingLeft:10,
  paddingTop:6,
  fontSize: 9,
  fontFamily:'normal',
  zIndex:19,
},
modalBox: {
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  height:200,
  width:300,
  backgroundColor: "transparent",
  zIndex:9000,
 
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