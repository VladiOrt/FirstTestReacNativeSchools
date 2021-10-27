import React, {useState} from "react";
import { 
    Text,
    View , 
    TextInput,
    StyleSheet , SafeAreaView
} from "react-native";
import { Button } from "react-native";
import Boton from "../components/Boton";

import {signOut} from "@firebase/auth";



const Services = ({navigation}) =>{

    const ciudades = ["Brazil",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Cuba",
        "Guatemala",
        "Mexico",
        "Panama",
        "Peru",
        "Canada"
    ];

    function logout(){
        try{
            app.auth().signOut();
            this.props.navigator.push({
                name:"Login"
            })
            console.log("echo");
        }catch(error){
            console.log(error);
        }
    }
        
    return(
        <SafeAreaView  style={{ flex: 1, alignItems: 'center', backgroundColor:"#D8E3E7"}}>
            <View style={{height:"5%",
            width:"100%",
            flexDirection:"row",
            backgroundColor:"#132C33",            
            }}>
                <Text style={{width:"80%",
                    color:"#FFF", 
                    fontWeight:"700", 
                    fontSize:20
                }}>
                    Paises
                </Text>    
                <View style={{width:"20%", minHeight:"100%"}}>
                    <Boton 
                        text="Salir" 
                        color='white' 
                        color2='red' 
                        onPress={() => logout()}
                    >

                    </Boton>
                </View>
                
            </View>
            <View style={{flex:19}}>
                {
                    ciudades.map(valores =>
                    <View style={{
                        minWidth:"50%", 
                        maxHeight:"5%", 
                        borderRadius:"100", 
                        marginTop:20,
                        backgroundColor:"#000",
                        borderRadius:5
                    }}>
                        <Boton text={valores}
                            color="#51C4D3"
                            color2="white"
                            onPress={() =>{
                                navigation.navigate('Schools',{pais: valores}
                                )                    
                            }}
                        />
                    </View>
                    
                    )
                }   
            </View>
        </SafeAreaView>
    )
}

export default Services;



const styles = StyleSheet.create({
    header: {
        backgroundColor:"#132C33",
        flexDirection:  'row',   
    },
    body: {
        height:600,
        backgroundColor:'red',
        display: 'flex',
        flexDirection:  'column'    
    },
    titulo: {
      fontSize: 25,
      fontWeight:600,
      width:3/4,
      backgroundColor:"red"
    },
    input: {
      width: 300,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: '#6d69c3',
      marginVertical: 10,
      padding: 15,
    },
    buttonContainer:{
        backgroundColor:"red",
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: "#f9f9f9"
    },
  });
