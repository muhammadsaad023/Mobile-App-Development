import react from "react";
import {
  ImageBackground,
  Image,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
  
} from "react-native";
import { Button } from "react-native-web";


const Login = () => {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("./assets/backk.jpg")}
        style={styles.ImageBackground}
      >
        <View style={styles.profile}>
          <Image source={require("./assets/saad.jpg")} style={styles.prof} />



          <View style={styles.overlay}> 
          <View style={styles.logincontainer}>
            <TextInput style={styles.input}
            placeholder="Email"
            />

          </View>

          </View>


          
          <View style={styles.overlay}> 
          <View style={styles.logincontainer}>
            <TextInput style={styles.input}
            placeholder="Password"
            />
          </View>
         
          </View>

          
        </View>

        <View>
  <TouchableOpacity
    style={styles.customButton}
    onPress={() => {
      // Handle button press
    }}
  >
    <Text style={styles.buttontext}>Login</Text>
  </TouchableOpacity>
</View>


        <View>
        
          <Text style={styles.text}>Forgotten Password ?</Text>
        </View>

        <View>
        
          <Text style={styles.text}>Create your account</Text>
        </View>
        
      </ImageBackground>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ImageBackground: {
    flex: 0.5,
  },

  profile: {
    alignItems: "center",
    marginTop: 20,
  },
  prof: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  input: {
    height: 40,
    borderColor: "black",
    
    marginBottom: 1,
    paddingLeft: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "white",
    justifyContent :'center',
    alignItems:'center',
    width:200,
    height:100,
    borderWidth:2,
    borderRadius:20,
    paddingLeft:2,
    marginTop:15,
    

  },
  
  logincontainer:{
    paddingHorizontal:1,
    width:200,
    height:40,
    borderWidth:1,
    borderRadius:20,
    paddingLeft:10
  },
  customButton:{

    marginTop: 10,
    width: 250,
    height: 40,
    borderRadius: 20, // Half of the width to make it oval
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems:'center'
   
    

  },
  text:{


textAlign : 'center',
marginTop:10

  },
  buttontext:{
    color:'white',
    fontStyle:'normal',
    fontSize : 18
  }
});

export default Login;