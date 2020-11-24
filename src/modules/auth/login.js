import React from 'react';
import {StyleSheet,View,TextInput,Text, TouchableOpacity, KeyboardAvoidingView,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../style';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/authAction';
import { Divider } from 'react-native-elements';

class LoginScreen extends React.Component{    
          state = {
          email: '',
          password: '',
      };     
    

   UNSAFE_componentWillMount(){
     const {navigation,isAuthenticated} = this.props;

     if(isAuthenticated)
     {
      navigation.navigate("home");
     }
   }

   componentDidUpdate(nextProps){
     const {error,navigation,isAuthenticated} = this.props;
     
     if(isAuthenticated)
     {   
     navigation.navigate("home");
     }
   }

    handleSubmit = () => {  
      const {email,password} = this.state;
      this.props.login(email,password);
      
    
  }
  render(){
    const{email,password}=this.state;
    
    return(      
        <KeyboardAvoidingView 
                          style={styles.conatiner}>   
         <StatusBar size={15} color='#ff3d00'/>
                <View style={styles.iconView}>               
                         <Icon style={styles.icon} name="user" size={30} color="#ff3d00"/>
                         
                </View>
                         <TextInput
                           placeholder="Enter your email" 
                           placeholderTextColor="#fff"
                           style={styles.input}                              
                           inlineImageLeft='email'
                           autoCapitalize = 'none'
                           rightIcon="email"
                           onChangeText={text => this.setState({ email: text })}
                           //value={value} 
                          />
                 
               
                       <TextInput
                          placeholder="Enter your password"
                          placeholderTextColor={colors.whiteOne}
                          style={styles.input}
                          inlineImageLeft='lock'                          
                          autoCapitalize = 'none'
                          rightIcon="lock"
                          secureTextEntry
                          onChangeText={text => this.setState({ password: text })}/>
                 
  
                       <TouchableOpacity style={styles.loginbtn} onPress={()=>this.handleSubmit()}>
                          <Text style={{color:'#ff3d00',fontWeight:'bold'}}>Login</Text>
                       </TouchableOpacity> 
                    
                       <TouchableOpacity style={styles.loginbtn1} onPress={()=>this.handleSubmit()}>
                          <Text style={{color:'#fff',fontWeight:'bold', justifyContent:'center',
                          alignItems:'center',}}>Don't have an account? Sign Up</Text>
                       </TouchableOpacity> 
                       
           </KeyboardAvoidingView>                                                     
     
    );
  }
  }
  
                const mapStateToProps = (state) => ({
                  isAuthenticated:state.auth.isAuthenticated,
                  isLoading: state.auth.isLoading,
                }); 

  export default connect(mapStateToProps,{login})(LoginScreen);
  
      const styles = StyleSheet.create({
                  conatiner: {
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#ff3d00',                    
                   },
                  
                  input: {
                    borderRadius:30,
                    borderWidth:1,
                    borderColor:'transparent',
                    color:'black',
                    backgroundColor:'#ffccbb',
                    width: wp('80%'),
                    height:hp('7%'),
                    marginTop:10,
                    paddingHorizontal:20,
                    fontSize: 15,

                  },
                  
                  iconView:{
                    marginBottom:hp('5%'),
                    width: wp('34%'),
                    height: hp('19.5%'),
                    borderRadius:60,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:colors.background,                  
                    shadowColor:'#000',
                    elevation: 20,
                  },
                  
                  loginbtn :{
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#fff',
                    width: wp('70%'),
                    height: hp('6%'),
                    borderRadius: 30,
                    marginBottom: 5,
                    marginTop: 50,
                    borderWidth: 1,
                    borderColor: '#fff'
                  },
                  loginbtn1 :{
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'transparent',
                    width: wp('70%'),
                    height: hp('6%'),
                    marginTop: 10,
                    borderColor: 'transparent'
                  },
                  icon:{
                    fontSize: hp('5%'),
                    marginBottom: hp('0.5%')
                  }
                           
                  })
  
  