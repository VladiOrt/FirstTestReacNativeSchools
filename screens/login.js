import React,{useState} from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { TextInput, StyleSheet } from "react-native";

import Boton from "../components/Boton";

import { getAuth , setPersistence, browserLocalPersistence} from "@firebase/auth";
import { signInWithEmailAndPassword } from "@firebase/auth";



const Login = ({navigation}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Ingresar(){
        const auth = getAuth();
        setPersistence(auth, browserLocalPersistence);
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Inicio de sesion exitoso");
            navigation.navigate('Services');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }


    return(
        <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Inicio de Sesión</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                keyboardType='email-address'
                autoCompleteType='off'
                
            />                    
            <TextInput
                 style={styles.input}
                 value={password}
                 onChangeText={setPassword}
                 placeholder="Password"
                 secureTextEntry={true}
            /> 
            <View style={{width:"50%", maxHeight:40}}>
                <Boton 
                    text="Iniciar Sesión"
                    onPress={() =>Ingresar()}
                    color="green"
                    color2="white"
                />     
            </View>      
            <View style={{width:"50%", maxHeight:40, marginTop: 5}}>
                <Boton 
                    text="Crear"
                    onPress={() =>{
                        navigation.navigate('Create',{
                        nombre: "Alejandro"
                        })                    
                    }}
                    color="#132c33"
                    color2="white"
                />     
            </View>                        
        </View>
        </>
    )
}
export default Login;





const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 21,
      marginBottom: 30,
    },
    input: {
      width: 300,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: '#6d69c3',
      marginVertical: 10,
      padding: 15,
    },
    buttonContainer: {
        backgroundColor:"green",
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
  });