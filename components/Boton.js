import React from "react";
import {StyleSheet, Text,TouchableOpacity,View } from "react-native";

const Boton = (props) => {
    const {onPress,text,color,color2} = props;
    return(
        <TouchableOpacity         
            style = {styles.buttonContainer,{backgroundColor:color, 
                width:"100%", 
                height:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}            
            onPress = {onPress}
        >
            <Text style = {styles.buttonText,{color: color2}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Boton;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:"blue",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: "white",
        
    },
})